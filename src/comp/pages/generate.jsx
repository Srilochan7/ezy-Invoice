import React, { useState } from 'react';
import { Trash2, Plus, Download } from 'lucide-react';

const InvoiceGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    date: '',
    invoiceNo: '',
    billTo: {
      name: '',
      phone: ''
    },
    items: [
      { quantity: '', description: '', price: '', subtotal: '' }
    ],
    subtotal: 0,
    tax: 0,
    total: 0,
    paymentInfo: {
      studio: '',
      bank: '',
      accountNo: '',
      email: '',
      address: '',
      phone: ''
    }
  });

  const calculateSubtotal = (items) => {
    return items.reduce((sum, item) => {
      const subtotal = Number(item.quantity) * Number(item.price) || 0;
      return sum + subtotal;
    }, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.20; // 20% tax
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index][field] = value;
    
    if (field === 'quantity' || field === 'price') {
      newItems[index].subtotal = Number(newItems[index].quantity) * Number(newItems[index].price) || 0;
    }
    
    const newSubtotal = calculateSubtotal(newItems);
    const newTax = calculateTax(newSubtotal);
    
    setInvoiceData({
      ...invoiceData,
      items: newItems,
      subtotal: newSubtotal,
      tax: newTax,
      total: newSubtotal + newTax
    });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { quantity: '', description: '', price: '', subtotal: '' }]
    });
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    const newSubtotal = calculateSubtotal(newItems);
    const newTax = calculateTax(newSubtotal);
    
    setInvoiceData({
      ...invoiceData,
      items: newItems,
      subtotal: newSubtotal,
      tax: newTax,
      total: newSubtotal + newTax
    });
  };

  const handleDownload = () => {
    console.log('Download Invoice:', invoiceData);
  };

  // Custom Input component with proper event handling
  const CustomInput = ({ type, value, onChange, disabled, className = "" }) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${className}`}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg shadow-xl backdrop-blur-sm">
        <div className="p-6">
          <div className="text-4xl font-bold mb-8 text-blue-400">Invoice</div>
          
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Date</label>
              <CustomInput 
                type="date" 
                value={invoiceData.date}
                onChange={(e) => setInvoiceData({...invoiceData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Invoice No.</label>
              <CustomInput 
                type="text"
                value={invoiceData.invoiceNo}
                onChange={(e) => setInvoiceData({...invoiceData, invoiceNo: e.target.value})}
              />
            </div>
          </div>

          {/* Bill To Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">BILL TO:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.billTo.name}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    billTo: {...invoiceData.billTo, name: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Phone</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.billTo.phone}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    billTo: {...invoiceData.billTo, phone: e.target.value}
                  })}
                />
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">ITEMS:</h2>
            {invoiceData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Quantity</label>
                  <CustomInput 
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
                  <CustomInput 
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Price</label>
                  <CustomInput 
                    type="number"
                    value={item.price}
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium mb-1 text-gray-300">Subtotal</label>
                  <CustomInput 
                    type="number"
                    value={item.subtotal}
                    disabled
                  />
                </div>
                <div className="md:col-span-1 flex items-end justify-end">
                  <button
                    onClick={() => removeItem(index)}
                    className="p-2 bg-red-600 hover:bg-red-700 rounded-md text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <button 
              onClick={addItem} 
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Item
            </button>
          </div>

          {/* Totals Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="md:col-start-2">
              <div className="flex justify-between mb-2 text-gray-300">
                <span>Subtotal:</span>
                <span>${invoiceData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-300">
                <span>Tax (20%):</span>
                <span>${invoiceData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-blue-400">
                <span>Total:</span>
                <span>${invoiceData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Payment Information:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Studio Name</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.paymentInfo.studio}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, studio: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Bank Name</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.paymentInfo.bank}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, bank: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Account Number</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.paymentInfo.accountNo}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, accountNo: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <CustomInput 
                  type="email"
                  value={invoiceData.paymentInfo.email}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, email: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Address</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.paymentInfo.address}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, address: e.target.value}
                  })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Phone</label>
                <CustomInput 
                  type="text"
                  value={invoiceData.paymentInfo.phone}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData, 
                    paymentInfo: {...invoiceData.paymentInfo, phone: e.target.value}
                  })}
                />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-end">
            <button 
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center"
            >
              <Download className="h-4 w-4 mr-2" /> Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;