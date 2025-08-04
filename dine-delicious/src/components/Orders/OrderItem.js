import React, { useState } from 'react';

const OrderItem = ({ addItem }) => {
    const [itemName, setItemName] = useState('');

    const handleAddItem = () => {
        if (itemName) {
            addItem(itemName);
            setItemName('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
                placeholder="Enter item name"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default OrderItem;
