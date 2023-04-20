import { useParams, Link } from 'react-router-dom';

function NewEventPage(){
    const params = useParams();

    return(
        <>
            <h1>New Event!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default NewEventPage;