import css from './ParticipantList.module.css';
import Participant from './ParticipantList.module.css';
import Loading from '../Loading/Loading.jsx';

const ParticipantList = ({ participants, loading, error }) => {
  return (
    <ul className={css.list}>
      {loading && <Loading />}
      {!loading && !error && participants.length === 0 && (
        <h4 className={css.subTitle}>
          Unfortunately, there are no participants in this event yet.
        </h4>
      )}
      {!loading &&
        !error &&
        participants.map(({ email, fullName, id }) => (
          <li className={css.item} key={id}>
            <Participant id={id} email={email} name={fullName} />
          </li>
        ))}
      {error && <div>Error: {error}</div>}
    </ul>
  );
};

export default ParticipantList;
