import React, { useState } from 'react';

const TableReservation = () => {
    const [reservationName, setReservationName] = useState('');
    const [tableId, setTableId] = useState('');

    const handleReservation = (e) => {
        e.preventDefault();
        // Logic to reserve table goes here

        console.log("Reserved:", { reservationName, tableId });
        // Reset form
        setReservationName('');
        setTableId('');
    };

    return (
        <form onSubmit={handleReservation}>
            <div>
                <label>Guest Name:</label>
                <input 
                    type="text" 
                    value={reservationName} 
                    onChange={(e) => setReservationName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Table ID:</label>
                <input 
                    type="text" 
                    value={tableId} 
                    onChange={(e) => setTableId(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Reserve Table</button>
        </form>
    );
};

export default TableReservation;
