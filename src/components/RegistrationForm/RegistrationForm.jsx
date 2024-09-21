// import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useState } from 'react';
import axios from 'axios';

// const SHEET_ID =
const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const RegistrationForm = ({ eventId, onRegister }) => {
  console.log('Received eventId:', eventId);
  console.log('Received onRegister function:', onRegister);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    eventSource: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name} = ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formatDate = date => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const formattedDate = formatDate(formData.dateOfBirth);
    console.log('Formatted Date:', formattedDate);

    try {
      const response = await axios.post(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/ParticipantsSheet1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
        {
          majorDimension: 'ROWS',
          values: [
            [
              eventId,
              formData.fullName,
              formData.email,
              formattedDate,
              formData.eventSource,
            ],
          ],
        }
      );
      console.log('Response:', response);
      if (response.status === 200) {
        alert('Data saved!');
        onRegister(); // Виклик функції для оновлення списку учасників
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <label>
        Where did you hear about this event?
        <select
          name="eventSource"
          value={formData.eventSource}
          onChange={handleChange}
        >
          <option value="socialMedia">Social Media</option>
          <option value="friends">Friends</option>
          <option value="self">Found Myself</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
