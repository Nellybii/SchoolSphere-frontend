// src/components/payments/PaymentHistory.jsx
import React from "react";

const PaymentHistory = ({ payments }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Payment History</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border-b py-2">Date</th>
            <th className="border-b py-2">Amount</th>
            <th className="border-b py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border-b py-2">{payment.date}</td>
              <td className="border-b py-2">{payment.amount}</td>
              <td className="border-b py-2">{payment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
