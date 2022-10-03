import React, { useEffect } from 'react';
import './style.css';

const Tabelas = props => {
    const arrayItem =  props.items;

    useEffect(()=> {
        getRows();
    }, []);

    function getRows() {
        const sorted = arrayItem
        sorted.sort((a,b) => {
            return b.point - a.point;
        })        
        return sorted.map((item, i)=> {
            if(i<5) {
                return ( 
            <>
                <tr className ={ i % 2 === 0 ? "par" : "impar"} key={i}>
                    <td> {item.name.toUpperCase() } </td>   
                    <td className="tbright"> {item.point } pts </td>   
                </tr>
            </>    
            )       
    }   
})

}

return (
    <div className = "tabela">
            <table>
                <thead>
                    <tr>
                        <th>NOME</th> 
                        <th>PONTOS</th> 
                    </tr>         
                    </thead>
                    <tbody> 
                       {getRows()}
                    </tbody>
            </table>            
    </div>
    )
}

export default Tabelas;