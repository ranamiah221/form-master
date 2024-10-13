
import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const AssetContext=createContext('gold');
export const MoneyContext=createContext(1000);


const Grandpa = () => {
    const assets='diamond'
    const [money, setMoney]=useState(1000);
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>In total : {money}</p>
            <section className="flex">
                   <MoneyContext.Provider value={[money, setMoney]}>
                       <AssetContext.Provider value='gold'>
                              <Dad assets={assets}></Dad>
                              <Uncle assets={assets}></Uncle> 
                              <Aunty></Aunty>
                        </AssetContext.Provider>
                   </MoneyContext.Provider>
            </section>
        </div>
    );
};

export default Grandpa;