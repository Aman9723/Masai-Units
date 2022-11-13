import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8000').then((res) => setData(res.data));
  });

  return (
    <>
      {data.map((elm) => (
        <li id={elm.id}>{elm.name}</li>
      ))}
    </>
  );
}

export default App;
