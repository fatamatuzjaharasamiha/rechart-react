import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { animated, useSpring } from 'react-spring'
import { useState } from 'react';
function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <div className="App">

      <animated.div style={props}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
