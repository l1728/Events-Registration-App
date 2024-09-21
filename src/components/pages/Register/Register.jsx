import { useParams } from 'react-router-dom';
import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';

const Register = () => {
  const { eventId } = useParams();

  const handleRegister = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Register for Event {eventId}</h2>
      <RegistrationForm eventId={eventId} onRegister={handleRegister} />
    </div>
  );
};

export default Register;
