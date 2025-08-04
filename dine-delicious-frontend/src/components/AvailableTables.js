// src/components/AvailableTables.js

import React, { useEffect, useState } from "react";
import { getAvailableTables } from "../services/mockApi";

const AvailableTables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await getAvailableTables();
        setTables(response);
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Available Tables</h2>
      <div className="row">
        {tables.map((table) => (
          <div key={table.id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-info">
              <div className="card-body">
                <h5 className="card-title">Table {table.tableNumber}</h5>
                <p className="card-text">
                  Capacity: {table.capacity}
                  <br />
                  Status:{" "}
                  <span
                    className={`badge ${
                      table.status === "AVAILABLE"
                        ? "bg-success"
                        : "bg-warning"
                    }`}
                  >
                    {table.status}
                  </span>
                </p>
                {table.status === "AVAILABLE" && (
                  <button className="btn btn-primary">Book Table</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTables;
