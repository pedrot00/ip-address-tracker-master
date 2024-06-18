import React, { useState } from "react";
import axios from 'axios';


function IPInfo({ onDataReceived }) {
   const [userIp, setIp] = useState('');

   const handleInputChange = (e) =>{
    setIp(e.target.value);
   };


   const fetchIPInfo = async () =>{
    const url = `https://ipapi.co/${userIp}/json/`;
    
    try {
        const response = await axios.get(url);
        console.log(response.data);
        onDataReceived(response.data); // Passa os dados recuperados para o componente pai
    } catch (error){
        console.error('Não achou a desgraça do erro', error)
    }

   };


   const handleSubmit = (e) => {
    e.preventDefault();
    fetchIPInfo();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='userIp'
          type="text" 
          className="textBar" 
          placeholder="Search for any IP address or domain"
          onChange={handleInputChange}
        />
        <button type="submit" className='inButton'>Search</button>
      </form>
    </div>
  );
}

export default IPInfo;
