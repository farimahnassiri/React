import { useParams, Link } from 'react-router-dom';

function EventDetailsPage(){
    const params = useParams();

    return(
        <>
            <h1>Event Details!</h1>
            <h2>{params.eventId}</h2>
            <p><Link to="edit" relative='path'>Edit</Link></p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default EventDetailsPage;