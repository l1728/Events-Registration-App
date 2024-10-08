import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home.jsx';
import AboutEvent from './components/pages/AboutEvent/AboutEvent.jsx';
import Register from './components/pages/Register/Register.jsx';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/EventSheet1?key=${API_KEY}`
        );
        const rows = response.data.values;
        const formattedEvents = rows.slice(1).map(row => ({
          id: row[0],
          title: row[1],
          description: row[2],
          date: row[3],
          organizer: row[4],
        }));
        setEvents(formattedEvents);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <Routes>
        <Route path="/" element={<Home events={events} loading={loading} />} />
        <Route path="/register/:eventId" element={<Register />} />
        <Route path="/participants/:eventId" element={<AboutEvent />} />
      </Routes>
      <ToastContainer />
      <ToastNotification />
    </div>
  );
};

export default App;
