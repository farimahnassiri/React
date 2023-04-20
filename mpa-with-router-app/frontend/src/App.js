import { 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider, 
  Route } 
from "react-router-dom";

import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailsPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventsPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

// Challenge / Exercise

// 1. [DONE] Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage +
//    - EventsPage +
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. [DONE] Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. [DONE] Add a root layout that adds the <MainNavigation> component above all page components
// 4. [DONE] Add properly working links to the MainNavigation
// 5. [DONE] Ensure that the links in MainNavigation receive an "active" class when active
// 6. [DONE] Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. [DONE] Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

// the path is the part after the domain
const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: '',
      children: [
        { index: true, element: <HomePage/> },
        { path: 'events', element: <EventsRootLayout/>,
          children:[
            { index: true, element: <EventsPage/>},
            { path: ':eventId', element: <EventDetailsPage/>},
            { path: 'new', element: <NewEventPage/>},
            { path: ':eventId/edit', element: < EditEventsPage/>},
        ]},
    ]
},
]);


function App() {
  return <RouterProvider router={router}/>;;
}

export default App;
