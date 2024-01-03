import { data } from './data';
import React, { useState, useEffect } from 'react';

const Table = () => {
    const [nameData, setNameData] = useState([]);

    useEffect(() => {
        const duplicateValue = data.names.reduce((acc, name) => {
            acc[name] = (acc[name] || 0) + 1;
            return acc;
        }, {});

        const nameDataArray = Object.keys(duplicateValue).map(name => ({
            Name: name,
            times: duplicateValue[name]
        }));
        setNameData(nameDataArray);
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th  style={{fontSize:30}}>Name</th>
                        <th  style={{fontSize:30}}>No of times</th>
                    </tr>
                </thead>
                <tbody>
                    {nameData.map((item, index) => (
                        <tr  key={index} style={{
                            backgroundColor:
                                item.times > 0 && item.times < 3 ? 'red' :
                                    item.times > 3 && item.times < 10 ? 'yellow' : 
                                       item.times > 10 && 'green'
                        }}>
                            <td style={{padding:30,fontSize:25,fontWeight:700}}>{item.Name}</td>
                            <td style={{padding:30,fontSize:25,fontWeight:700}}>{item.times}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
