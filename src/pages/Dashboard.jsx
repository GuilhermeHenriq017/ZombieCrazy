import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Table from '../components/Table';
import MiniTable from '../components/MiniTable';

import { Api } from '../services/api';

export default function Dashboard() {
  const [data, setData] = useState([]);

    useEffect(() => {
      getApi();
  }, []);

  async function getApi() {
     const  NewArray = await Api();
     setData(NewArray);
  }
    
      
  
  return(
    <div className="main">
    <div className="graf1">
        <div className="graf2">
            <h2>RANKING</h2>
            <MiniTable items={data} />                
        </div>
        <div className="graf3">
            <button onClick={() => getApi()} className="btn"><span>Atualizar</span></button>
            <a 
                href="https://zombiecrazy.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn1">
                    <span>Jogar</span>
            </a>
        </div>        
    </div>
        <div className="Classificação">
            <h2>HISTÓRICO</h2>
            <div className="boxTable">
                <Table items={data} />
            </div>            
        </div>
    </div>
  )
}


