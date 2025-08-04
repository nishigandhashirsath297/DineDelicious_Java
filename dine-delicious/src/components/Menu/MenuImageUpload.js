import React from 'react';

const MenuImageUpload = ({ onImageUpload }) => {
    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onImageUpload(file);
        }
    };

    return (
        <div>
            <h2>Upload Menu Image</h2>
            <input type="file" onChange={handleChange} />
        </div>
    );
};

export default MenuImageUpload;
