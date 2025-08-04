import React, { useEffect, useState } from 'react';

const TableGrid = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Logic to fetch tables from an API or database goes here
        const fetchTables = async () => {
            const fetchedTables = [
                { id: 1, name: "Table 1", capacity: 4 },
                { id: 2, name: "Table 2", capacity: 2 },
            ];
            setTables(fetchedTables);
        };
        fetchTables();
    }, []);

    return (
        <div>
            <h2>Available Tables</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {tables.map(table => (
                        <tr key={table.id}>
                            <td>{table.name}</td>
                            <td>{table.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableGrid;
