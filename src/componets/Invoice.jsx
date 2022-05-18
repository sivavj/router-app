import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  const handleDelete = () => {
    deleteInvoice(invoice.number);
    navigate("/invoices" + location.search);
  };
  return (
    <div>
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
          <button
            style={{
              background: "green",
              color: "white",
              border: "1px solid gray",
              borderRadius: '25px',
              padding: '5px 10px',
              fontWeight: "bold",
            }}
            onClick={handleDelete}
          >
            Remove
          </button>
        </p>
      </main>
    </div>
  );
}
