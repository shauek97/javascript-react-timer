import Container from './Container/Container.js';
import Buttons from './Buttons/Buttons.js'
import { useState } from 'react';
import { useEffect } from 'react';
import FormattedTime from './FormattedTime/FormattedTime.js';

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!start) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  

  return (
    <Container>
    <FormattedTime time={time} setTime={setTime} />
    <Buttons start={start} setStart={setStart} setTime={setTime}/>
    </Container>
  );
};

export default App;
