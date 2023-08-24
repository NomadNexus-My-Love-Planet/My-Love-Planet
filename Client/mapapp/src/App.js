import React, { useState, useEffect } from 'react';

function App() {
  const [nachricht, setNachricht] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/nachricht')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setNachricht(json.nachricht);
      });
  }, []);

  return (
    <div>
      <h1>{nachricht}</h1>
    </div>
  );
}

export default App;