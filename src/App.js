import React, {useState, useEffect } from 'react';
import {createGlobalStyle} from 'styled-components';
import { StyledApp } from "./AppStyles";
import {createCalendar} from './helpers';
import Hatch from './Hatch';
import moment from "moment";
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'


const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url('./img/calendar_backdrop.jpg');
    margin: 0;
  }
`;


function App() {

  App.listen(process.env.PORT || 3000);


  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    //Checks if something is already saved in local storage, otherwise create new calendar.
    const calendar = localStorage.calendar
    ? JSON.parse(localStorage.calendar)
    : createCalendar();

    setHatches(calendar);
  }, [])

  //Stores calendar in localstorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]); 
    
 
  const handleFlipHatch = id => {
    
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
      );
      if (moment().format('D') != id) {
      alert("Du kan kun åbne lågen for dagen")
      }
      else {
      setHatches(updatedHatches);
      console.log(moment().format('D'))
      console.log(id + 'hatch id');
      }

  }

  return (
    //Maps through the hatches, and make hatch component for each
  <>
    <GlobalStyle/>
    <StyledApp>
      <Snowfall/>
      {hatches.map(hatch => (
        <Hatch 
          key={hatch.id}
          hatchData={hatch}
          handleClick={handleFlipHatch}
        />
      ))} 
    </StyledApp>
  </>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);


export default App;
