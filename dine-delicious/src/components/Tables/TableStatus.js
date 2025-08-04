import React, { useState, useEffect } from 'react';

const TableStatus = () => {
    const [tables, setTables] = useState([]);
    
    useEffect(() => {
        // Logic to get the status of tables goes here
        const fetchTableStatus = async () => {
            const tableStatus = [
                { id: 1, name: 'Table 1', status: 'Available' },
                { id: 2, name: 'Table 2', status: 'Reserved' },
            ];
            setTables(tableStatus);
        };
        fetchTableStatus();
    }, []);

    return (
        <div>
            <h2>Table Status</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map(table => (
                        <tr key={table.id}>
                            <td>{table.name}</td>
                            <td>{table.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableStatus;
