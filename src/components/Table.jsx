import React from 'react';
import './style.css';

const Tabelas = props => {
    let arrayItem = [];
    function getRows() {
         arrayItem = props.items;

         arrayItem.sort((a,b) => {
            return a.name.localeCompare(b.name);
        })        
        return arrayItem.map((item, i)=> {
        return ( 
            <tr className ={ i % 2 === 0 ? "par" : "impar"} key={i}>
                <td className="tbCenter"> {i +1} </td>   
                <td> {item.name.toUpperCase() } </td>   
                <td className="tbright"> {item.point } pontos </td>   
            </tr>
        )       
    })

}
return (
    <div className = "tabela">
            <table>
                <thead>
                    <tr>
                        <th> ID </th> 
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