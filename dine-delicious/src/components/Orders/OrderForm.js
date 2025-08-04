import React, { useState } from 'react';
import OrderItem from './OrderItem';
import OrderNotes from './OrderNotes';
import OrderStatus from './OrderStatus';
import OrderTimer from './OrderTimer';
import './OrderForm.css';

const OrderForm = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [notes, setNotes] = useState('');

    const addOrderItem = (item) => {
        setOrderItems([...orderItems, item]);
    };

    return (
        <div className="order-form">
            <h2>Order Form</h2>
            <div>
                <OrderItem addItem={addOrderItem} />
                <OrderNotes notes={notes} setNotes={setNotes} />
                <OrderStatus />
                <OrderTimer />
            </div>
            <button className="submit-button">Submit Order</button>
        </div>
    );
};

export default OrderForm;
