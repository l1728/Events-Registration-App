import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';
import css from './Register.module.css';

const Register = () => {
  const handleRegister = () => {
    console.log('Registration successful!');
  };
  return (
    <div>
      <h2 className={css.title}>Registration Page</h2>
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
};

export default Register;
