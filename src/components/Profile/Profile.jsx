import styles from '../Profile/Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        <img className={styles.photo} src={image} alt="User avatar" />
        <p className={styles.profName}>{name}</p>
        <p className={styles.profTagLoc}>@{tag}</p>
        <p className={styles.profTagLoc}>{location}</p>
      </div>

      <ul className={styles.profInfo}>
        <li className={styles.profActiv}>
          <span className={styles.activCapt}>Followers</span>
          <span className={styles.activNumb}>{followers}</span>
        </li>
        <li className={styles.profActiv}>
          <span className={styles.activCapt}>Views</span>
          <span className={styles.activNumb}>{views}</span>
        </li>
        <li className={styles.profActiv}>
          <span className={styles.activCapt}>Likes</span>
          <span className={styles.activNumb}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
