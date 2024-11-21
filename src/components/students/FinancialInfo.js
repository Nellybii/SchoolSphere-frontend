import React from "react";

const FinancialInfo = ({ records }) => {
  if (!records || records.length === 0) {
    return <div className="text-gray-500">No financial records available.</div>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Financial Information</h3>
      <div className="mt-4">
        {records.map((record, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <p><span className="font-semibold">Fee Type:</span> {record.fee_type}</p>
            <p><span className="font-semibold">Amount Due:</span> ${record.amount_due}</p>
            <p><span className="font-semibold">Amount Paid:</span> ${record.amount_paid}</p>
            <p><span className="font-semibold">Balance:</span> ${record.balance}</p>
            <p><span className="font-semibold">Due Date:</span> {record.due_date || "N/A"}</p>
            <p><span className="font-semibold">Payment Date:</span> {record.payment_date || "Not Paid"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialInfo;
