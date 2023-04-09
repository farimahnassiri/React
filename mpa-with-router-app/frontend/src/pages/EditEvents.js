import { useParams, Link } from 'react-router-dom';

function EditEventsPage(){
    const params = useParams();

    return(
        <>
            <h1>Edit Event!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default EditEventsPage;