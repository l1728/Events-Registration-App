import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CardEventList.module.css';
import EventCard from './../EventCard/EventCard.jsx';

const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const SHEET_NAME = 'EventSheet1';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const CardEventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );

        const rows = response.data.values;
        console.log('Fetched Rows:', rows);

        if (Array.isArray(rows)) {
          if (rows.length > 1) {
            const formattedEvents = rows.slice(1).map(row => ({
              id: row[0] || 'No Id', // Event ID
              title: row[1] || 'No Title', // Event Title
              description: row[2] || 'No Description', // Event Description
              date: row[3] || 'No Date', // Event Date
              organizer: row[4] || 'No Organizer', // Organizer
            }));

            console.log('Formatted Events:', formattedEvents);
            setEvents(formattedEvents);
          } else {
            console.log('No event data found.');
          }
        } else {
          console.error('Data is not an array:', rows);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        if (error.response && error.response.status === 429) {
          setTimeout(fetchEvents, 1000); // спробувати через 1 секунду
        }
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = id => {
    console.log(`Registering for event ID: ${id}`);
  };

  const handleView = id => {
    console.log(`Viewing participants for event ID: ${id}`);
  };
  console.log('Rendering events:', events);
  return (
    <div className={css.cardContainer}>
      {events.map(event => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          organizer={event.organizer}
          id={event.id}
          onRegister={() => handleRegister(event.id)} // Передача ID для реєстрації
          onView={() => handleView(event.id)} // Передача ID для перегляду
          className={css.eventCard}
        />
      ))}
    </div>
  );
};

export default CardEventList;
