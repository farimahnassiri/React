import { Link, useNavigate } from 'react-router-dom';
import PageContent from '../components/PageContent';

function HomePage() {
    const navigate = useNavigate();
   
    function navigateHandler(){
        navigate('/');
    }

    return(
        <PageContent title="Welcome!">
            <p>Browser all our amazing events!</p>
        </PageContent>
    );
}

export default HomePage;