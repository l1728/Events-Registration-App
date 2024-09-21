import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList';

const Home = ({ events, loading }) => {
  return (
    <div>
      <h2 className={css.title}>Welcome to the event board!</h2>
      {loading ? <p>Loading...</p> : <CardEventList events={events} />}
    </div>
  );
};

export default Home;
