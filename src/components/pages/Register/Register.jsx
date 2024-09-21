import { useParams, useNavigate } from 'react-router-dom';
import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';

const Register = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const handleRegister = () => {
    // Перенаправлення на домашню сторінку після реєстрації
    navigate('/');
  };

  return (
    <div>
      <h2>Register for Event {eventId}</h2>
      <RegistrationForm eventId={eventId} onRegister={handleRegister} />
    </div>
  );
};

export default Register;
