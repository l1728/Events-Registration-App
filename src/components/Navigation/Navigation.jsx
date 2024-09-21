import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={css.link}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/participants" className={css.link}>
            Participants
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
