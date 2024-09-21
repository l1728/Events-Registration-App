//  import { useSelector } from 'react-redux';
// import css from './ParticipantList.module.css';
// import Participant from '../Participant/Participant.jsx';
// import Loading from '../Loading/Loading.jsx';

// //   selectError,
// //   selectFilteredparticipant,
// //   selectLoading,
// // } from '../../store/participant/selectorsparticipant.js';

// function ParticipantList() {
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const participant = useSelector(selectFilteredparticipant);

//   return (
//     <ul className={css.list}>
//       {loading && <Loading />}
//       {!loading && !error && participant.length === 0 && (
//         <h4 className={css.subTitle}>
//           Unfortunftely,thtre is no participant in this event yet.
//         </h4>
//       )}
//       {!loading &&
//         participant &&
//         !error &&
//         participant.map(({ email, name, id }) => (
//           <li className={css.item} key={id}>
//             <Participant id={id} email={email} name={name} />
//           </li>
//         ))}
//       {error && <div>Error: {error}</div>}
//     </ul>
//   );
// }

// export default ParticipantList;
// ________________________________________
// import React from 'react';
import css from './ParticipantList.module.css';
import Participant from '../Participant/Participant.jsx';
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
