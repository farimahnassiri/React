import { useParams, Link } from 'react-router-dom';

function EventDetailsPage(){
    const params = useParams();

    return(
        <>
            <h1>Event Details!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default EventDetailsPage;