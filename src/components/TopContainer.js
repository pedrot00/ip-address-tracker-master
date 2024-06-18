import './TopContainer.css';
import React, { useState } from 'react';
import axios from 'axios';

function TopContainer({ setIpData }) {
    const [userIp, setUserIp] = useState('');

    const handleInputChange = (e) => {
        setUserIp(e.target.value);
    };

    const fetchIPInfo = async () => {
        const url = `https://ipapi.co/${userIp}/json/`;

        try {
            const response = await axios.get(url);
            console.log(response.data);
            setIpData(response.data); // Passa os dados para o componente pai
        } catch (error) {
            console.error('Erro ao buscar as informações do IP', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchIPInfo();
    };

    return (
        <div className="container">
            <div>
                <h1 className="title">IP Address Tracker</h1>
            </div>
            <div className="searchBar">
                <input
                    id='userIp'
                    type="text"
                    className="textBar"
                    placeholder="Search for any IP address or domain"
                    onChange={handleInputChange}
                />
                <button className='inButton' onClick={handleSubmit}>
                    Buscar
                </button>
            </div>
        </div>
    );
}

export default TopContainer;
