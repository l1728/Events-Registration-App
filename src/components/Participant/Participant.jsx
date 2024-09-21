import css from './Participant.module.css';

export default function Participant({ name, email }) {
  return (
    <>
      <div className={css.partCard}>
        <div className={css.partInfo}>
          <p className={css.partName}>{name}</p>
        </div>
        <div className={css.partInfo}>
          <p className={css.partName}>{email}</p>
        </div>
      </div>
    </>
  );
}
