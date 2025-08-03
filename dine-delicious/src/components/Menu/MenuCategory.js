import React from 'react';

const MenuCategory = ({ categories }) => {
    return (
        <div>
            <h2>Menu Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MenuCategory;
