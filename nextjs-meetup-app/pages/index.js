import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://www.contiki.com/media/vqlnvuon/oktoberfest-hotel-5-days-trip-14.jpeg?center=0.48756218905472637%2C0.5522388059701493&format=webp&mode=crop&width=2400&height=2400&quality=80',
    address: 'Some address here!',
    description: 'This is the first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://media.npr.org/assets/img/2021/11/04/gettyimages-1236319784-917b8dfda5e2e0a5a9f7ae9946cd105ec4cabfe0-s1600-c85.webp',
    address: 'Some address here!',
    description: 'This is the second meetup!'
  }
];

function HomePage(props){
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps(){
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

export default HomePage;