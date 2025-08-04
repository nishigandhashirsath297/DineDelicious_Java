import React, { useState } from 'react';

const TableForm = () => {
    const [tableName, setTableName] = useState('');
    const [tableCapacity, setTableCapacity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add table goes here

        console.log("Table added:", { tableName, tableCapacity });
        // Reset form
        setTableName('');
        setTableCapacity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Table Name:</label>
                <input 
                    type="text" 
                    value={tableName} 
                    onChange={(e) => setTableName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Table Capacity:</label>
                <input 
                    type="number" 
                    value={tableCapacity} 
                    onChange={(e) => setTableCapacity(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Add Table</button>
        </form>
    );
};

export default TableForm;
