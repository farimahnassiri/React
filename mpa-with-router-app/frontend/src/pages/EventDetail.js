import { useLoaderData, Link, json } from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailsPage(){
    const data = useLoaderData();

    return(
       <EventItem event={data.event} />
    );
}

export default EventDetailsPage;

export async function loader({request, params}) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/' + id);

if (!response.ok){
    throw json({ message: 'Could not fetch details for selected events.' }, {
        status: 500
    });
} else {
    return response;
}

}