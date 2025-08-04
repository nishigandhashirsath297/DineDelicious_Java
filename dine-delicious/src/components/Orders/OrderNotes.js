import React from 'react';

const OrderNotes = ({ notes, setNotes }) => {
    return (
        <div>
            <textarea 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                placeholder="Add notes for your order"
            ></textarea>
        </div>
    );
};

export default OrderNotes;
