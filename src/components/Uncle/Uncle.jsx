import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({assets}) => {
    return (
        <div className='grandpa'>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rana'} assets={assets}></Cousin>
                <Cousin name={'Emtiaz'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;