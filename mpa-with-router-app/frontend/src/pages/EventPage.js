import { Link } from 'react-router-dom';
import EventsList from '../components/EventsList';

const PRODUCTS = [
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
                {PRODUCTS.map((prod) => (<li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>))}
            </ul>
    </>
    );
}

export default EventsPage;