import React, { useRef } from 'react';
import './App.css';
import ItemList from './components/ItemList'; // Adjust path as necessary
import ReactToPrint from 'react-to-print';
import numberToWords from 'number-to-words'; // Import the library
import companyLogo from './assets/company-logo.png';  // Import the logo
import signature from './assets/signature.png';  // Import the signature

const App = () => {
  const componentRef = useRef(null);
  const companyInfo = {
    name: "Shinde Pvt Ltd",
    address: "A2/206, Santoor, Vasant Vihar",
    cityStatePincode: "Thane, Maharashtra, 400610",
    panNo: "ABCFV3121K",
    gstNo: "28BACFD3215Z2KY"
  };

  const items = [
    {
      Sr:1,
      description: 'Socks',
      unitPrice: 100,
      quantity: 2,
      discount: 10,
      netAmount: 180,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 32.4,
      totalAmount: 212.4
    },
    {
      Sr:2,
      description: 'Mens Hanky set',
      unitPrice: 150,
      quantity: 1,
      discount: 0,
      netAmount: 150,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 27,
      totalAmount: 177
    },
    {
      Sr:3,
      description: 'Wallet',
      unitPrice: 400,
      quantity: 1,
      discount: 10,
      netAmount: 360,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 64.8,
      totalAmount: 424.8
    },
    {
      Sr:4,
      description: 'Mens Bracelet',
      unitPrice: 300,
      quantity: 2,
      discount: 0,
      netAmount: 300,
      taxType: 'CGST & SGST',
      taxRate: 18,
      taxAmount: 54,
      totalAmount: 354
    }
  ];

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.totalAmount, 0);
  };

  const totalAmount = calculateTotalAmount(items);
  const totalAmountInWords = numberToWords.toWords(Math.round(totalAmount));

  return (
    <div className="App">
      <div className="invoice" ref={componentRef}>
        <div className="company-logo">
          <img src={companyLogo} alt="Company Logo" />
        </div>

        <div className="company-details">
          <h2>Company Details</h2>
          <p>Name: {companyInfo.name}</p>
          <p>Address: {companyInfo.address}</p>
          <p>{companyInfo.cityStatePincode}</p>
          <p>PAN No: {companyInfo.panNo}</p>
          <p>GST Registration No: {companyInfo.gstNo}</p>
        </div>

        <div className="invoice-details">
          <h2>Invoice Details</h2>
          <p>Place of Supply: Maharashtra</p>
          <p>Place of Delivery: Maharashtra</p>
          <p>Order No.: 123456</p>
          <p>Order Date: 2024-06-26</p>
          <p>Invoice No.: 789-0125432-6431567</p>
          <p>Invoice Date: 2024-06-26</p>
          <p>Reverse Charge: No</p>
        </div>

        <div className="billing-details">
          <h2>Billing Details</h2>
          <p>Aditya Nadkarni</p>
          <p>A2/302, Adarsh Building, Thane W </p>
          <p>Thane, Maharashtra, 400610</p>
          <p>State/UT Code: 27</p>
        </div>

        <div className="shipping-details">
          <h2>Shipping Details</h2>
          <p>Aditya Nadkarni</p>
          <p>A2/302, Adarsh Building, Thane W </p>
          <p>Thane, Maharashtra, 400610</p>
          <p>State/UT Code: 27</p>
        </div>

        <ItemList items={items} totalAmount={totalAmount} totalAmountInWords={totalAmountInWords} />

        <div className="signature">
          <img src={signature} alt="Signature" />
          <p>Authorised Signatory</p>
        </div>
      </div>
      <div className="center-button">
        <ReactToPrint
          trigger={() => <button>Generate PDF</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
}

export default App;
