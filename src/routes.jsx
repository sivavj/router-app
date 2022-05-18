import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Expenses from "./componets/Expenses";
import Invoices from "./componets/Invoices";
import NotFound from "./componets/NotFound";
import Invoice from "./componets/Invoice";
export default function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an Invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
