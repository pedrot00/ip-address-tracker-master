import React, { useState } from 'react';
import TopContainer from './components/TopContainer';
import MainContainer from './components/MainContainer';

function App() {
  const [ipData, setIpData] = useState(null);

  return (
    <div className="App">
      <TopContainer setIpData={setIpData} />
      <MainContainer ipData={ipData} />
    </div>
  );
}

export default App;
