import { Fragment } from 'react';
import './App.css';
// import Card from './Card'
import User2 from './User2';

function App() {

  return(
    <Fragment>
    {/* <Card name = "Amit"
    designation ="Graphic Designer" 
    description= "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  /> */}

  <User2 name="Ruhi"
  designation="Singer"
  description="perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups. "
  />
  </Fragment>
  )
}

export default App;