import React from 'react';
import './MainContainer.css';
import Box from './Box';

function MainContainer({ ipData }) {
  console.log("ipData:", ipData);

  return (
    <div className="mainContainer">
      <Box
        id='ipBox'
        title='IP ADDRESS'
        info={ipData ? ipData.ip : '000.000.000.000'}
      />
      <Box
        id='locationBox'
        title='LOCATION'
        info={ipData ? `${ipData.city}, ${ipData.region} ${ipData.postal}` : 'Brooklyn, NY 10001'}
      />
      <Box
        id='timeBox'
        title='TIMEZONE'
        info={ipData ? `UTC ${ipData.utc_offset}` : 'UTC - 05:00'}
      />
      <Box
        id='ispBox'
        title='ISP'
        info={ipData ? ipData.org : 'SpaceX Starlink'}
      />
    </div>
  );
}

export default MainContainer;
