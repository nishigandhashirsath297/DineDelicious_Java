// src/services/mockApi.js

// 🍽️ Sample Menu Items
export const getMenuItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Margherita Pizza", price: 299, category: "VEG" },
        { id: 2, name: "Chicken Biryani", price: 349, category: "NON_VEG" },
        { id: 3, name: "Pasta Alfredo", price: 279, category: "VEG" },
        { id: 4, name: "Tandoori Chicken", price: 399, category: "NON_VEG" },
        { id: 5, name: "Paneer Butter Masala", price: 319, category: "VEG" },
        { id: 6, name: "Gulab Jamun", price: 99, category: "DESSERT" },
      ]);
    }, 500);
  });
};

// 🍽️ Sample Available Tables
export const getAvailableTables = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, tableNumber: "T101", capacity: 4, status: "AVAILABLE" },
        { id: 2, tableNumber: "T102", capacity: 2, status: "AVAILABLE" },
        { id: 3, tableNumber: "T103", capacity: 6, status: "RESERVED" },
        { id: 4, tableNumber: "T104", capacity: 4, status: "AVAILABLE" },
      ]);
    }, 500);
  });
};
