import React, { useState } from 'react';

const MenuItemForm = ({ onSubmit }) => {
    const [item, setItem] = useState({ name: '', description: '', price: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(item);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={item.name} 
                onChange={handleChange} 
                placeholder="Item Name" 
                required 
            />
            <input 
                type="text" 
                name="description" 
                value={item.description} 
                onChange={handleChange} 
                placeholder="Description" 
                required 
            />
            <input 
                type="number" 
                name="price" 
                value={item.price} 
                onChange={handleChange} 
                placeholder="Price" 
                required 
            />
            <button type="submit">Add Menu Item</button>
        </form>
    );
};

export default MenuItemForm;
