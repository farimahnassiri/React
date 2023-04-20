import { Link } from 'react-router-dom';
import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
    {id: 'e1', title: 'Event1'},
    {id: 'e2', title: 'Event2'},
    {id: 'e3', title: 'Event3'}
];

function EventsPage(){
    return(
    <>
        <h1>Events Page</h1>
            <p><Link to="new" relative='path'>New Event</Link></p>
            <ul>
                {DUMMY_EVENTS.map((event) => (<li key={event.id}><Link to={event.id}>{event.title}</Link></li>))}
            </ul>
    </>
    );
}

export default EventsPage;