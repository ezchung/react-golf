import React, { useState } from 'react';

const calculateScore = (course: number, handicap: number): number => {
 const parScore = 72;
 return parScore - ((course - handicap) * 5 / 9);
};

const App: React.FC = () => {
 const [course, setCourse] = useState('');
 const [handicap, setHandicap] = useState('');
 const [score, setScore] = useState('');

 const handleCalculate = () => {
    const c = parseInt(course);
    const h = parseInt(handicap);
    if (isNaN(c) || isNaN(h)) {
      setScore('Error: Invalid input');
    } else {
      setScore(calculateScore(c, h).toFixed(2));
    }
 };

 return (
    <div className="App">
      <h1>Handicap Score Count</h1>
      <input
        type="number"
        placeholder="Course Rating"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="number"
        placeholder="Handicap Index"
        value={handicap}
        onChange={(e) => setHandicap(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <h2>{score}</h2>
    </div>
 );
};

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
