import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(){
    return (
        <MeetupDetail 
            image ='https://www.contiki.com/media/vqlnvuon/oktoberfest-hotel-5-days-trip-14.jpeg?center=0.48756218905472637%2C0.5522388059701493&format=webp&mode=crop&width=2400&height=2400&quality=80'
            title='A First Meetup'
            address='Some address here!'
            description='This is the first meetup!'
        />
    );
}

export default MeetupDetails;