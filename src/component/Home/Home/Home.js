import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Details from '../Details/Details';
import ContractForm from '../ContractFrom/ContractForm';

const Home = () => {
    return (
        <div style={{backgroundColor: '#8b9e70', height: '600px'}}>
            <NavBar></NavBar>
            <Header></Header>
            <Details></Details>
            <ContractForm></ContractForm>
        </div>
    );
};

export default Home;