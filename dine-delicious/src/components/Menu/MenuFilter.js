import React from 'react';

const MenuFilter = ({ onFilterChange }) => {
    return (
        <div>
            <h2>Filter Menu Items</h2>
            <input 
                type="text" 
                placeholder="Search..." 
                onChange={(e) => onFilterChange(e.target.value)} 
            />
        </div>
    );
};

export default MenuFilter;
