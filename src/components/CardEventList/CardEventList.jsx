import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CardEventList.module.css';
import EventCard from './../EventCard/EventCard.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const SHEET_NAME = 'EventSheet1';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const CardEventList = () => {
  const [events, setEvents] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );

        const rows = response.data.values;

        if (Array.isArray(rows)) {
          if (rows.length > 1) {
            const formattedEvents = rows.slice(1).map(row => ({
              id: row[0] || 'No Id',
              title: row[1] || 'No Title',
              description: row[2] || 'No Description',
              date: row[3] || 'No Date',
              organizer: row[4] || 'No Organizer',
            }));

            setEvents(formattedEvents);
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setTimeout(fetchEvents, 1000);
        }
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = id => {
    setSelectedEventId(id);
    setShowRegistrationForm(true);
  };

  const handleView = () => {};

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
          onRegister={() => handleRegister(event.id)}
          onView={() => handleView(event.id)}
          className={css.eventCard}
        />
      ))}

      {showRegistrationForm && selectedEventId && (
        <RegistrationForm
          eventId={selectedEventId}
          onRegister={() => {
            setShowRegistrationForm(false);
          }}
        />
      )}
    </div>
  );
};

export default CardEventList;
