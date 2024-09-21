import css from './Participant.module.css';
import { RiUser3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

export default function Participant({ name, email }) {
  return (
    <>
      <div className={css.partCard}>
        <div className={css.partInfo}>
          <RiUser3Fill />
          <p className={css.partName}>{name}</p>
        </div>
        <div className={css.partInfo}>
          <MdEmail />
          <p className={css.partName}>{email}</p>
        </div>
      </div>
    </>
  );
}
