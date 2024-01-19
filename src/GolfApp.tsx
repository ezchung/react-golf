import React, { useState } from 'react';

const calculateScore = (course: number, handicap: number): number => {
 const parScore = 72;
 return parScore - ((course - handicap) * 5 / 9);
};

const GolfApp: React.FC = () => {
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
    <div className="GolfApp">
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

export default GolfApp;