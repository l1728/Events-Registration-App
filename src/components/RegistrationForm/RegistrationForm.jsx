import { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ eventId, onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    eventSource: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5173/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, eventId }),
      });

      if (response.ok) {
        onRegister();
        setFormData({
          fullName: '',
          email: '',
          dateOfBirth: '',
          eventSource: '',
        });
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registrationForm}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Where did you hear about this event?
        <select
          name="eventSource"
          value={formData.eventSource}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="socialMedia">Social Media</option>
          <option value="friends">Friends</option>
          <option value="self">Found Myself</option>
        </select>
      </label>
      <button type="submit">Register for Event {eventId}</button>
    </form>
  );
};

export default RegistrationForm;
