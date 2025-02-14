import React, { useState } from 'react';
import { Plus, Minus, Download, Upload } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
    paymentInfo: {
      studio: '',
      bank: '',
      accountNo: '',
      email: '',
      address: ''
    }
  });
  
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => {
      return sum + (Number(item.quantity) * Number(item.price) || 0);
    }, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.20; // 20% tax
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index][field] = value;
    
    if (field === 'quantity' || field === 'price') {
      newItems[index].subtotal = (Number(newItems[index].quantity) * Number(newItems[index].price)).toFixed(2);
    }
    
    setInvoiceData({
      ...invoiceData,
      items: newItems
    });
  };

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { quantity: '', description: '', price: '', subtotal: '' }]
    });
  };

  const removeItem = (index) => {
    setInvoiceData({
      ...invoiceData,
      items: invoiceData.items.filter((_, i) => i !== index)
    });
  };

  const downloadPDF = async () => {
    try {
      const invoice = document.getElementById('invoice-template');
      
      const canvas = await html2canvas(invoice, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('invoice-template');
          if (clonedElement) {
            clonedElement.style.display = 'block';
          }
        }
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight,
        '',
        'FAST'
      );

      if (imgHeight > pageHeight) {
        let remainingHeight = imgHeight;
        let position = 0;
        
        while (remainingHeight > 0) {
          position -= pageHeight;
          remainingHeight -= pageHeight;
          
          if (remainingHeight > 0) {
            pdf.addPage();
            pdf.addImage(
              canvas.toDataURL('image/jpeg', 1.0),
              'JPEG',
              0,
              position,
              imgWidth,
              imgHeight,
              '',
              'FAST'
            );
          }
        }
      }

      pdf.save(`invoice-${invoiceData.invoiceNo || 'draft'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Form Section */}
        <div className="border border-gray-700 rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div className="grid grid-cols-2 gap-4 flex-grow">
              <div>
                <label className="block text-sm text-gray-400">Invoice Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                  value={invoiceData.date}
                  onChange={e => setInvoiceData({...invoiceData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Invoice No.</label>
                <input
                  type="text"
                  className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                  value={invoiceData.invoiceNo}
                  onChange={e => setInvoiceData({...invoiceData, invoiceNo: e.target.value})}
                />
              </div>
            </div>
            
            {/* Logo Upload Section */}
            <div className="ml-4 flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center overflow-hidden">
                {logo ? (
                  <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center p-4">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <span className="text-sm text-gray-400">Upload Logo</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className="mt-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md cursor-pointer text-sm"
              >
                Choose Logo
              </label>
            </div>
          </div>

          {/* Rest of the form content remains the same */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-900 border border-gray-800 rounded p-2 mb-2"
              value={invoiceData.billTo.name}
              onChange={e => setInvoiceData({
                ...invoiceData,
                billTo: {...invoiceData.billTo, name: e.target.value}
              })}
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-gray-900 border border-gray-800 rounded p-2"
              value={invoiceData.billTo.phone}
              onChange={e => setInvoiceData({
                ...invoiceData,
                billTo: {...invoiceData.billTo, phone: e.target.value}
              })}
            />
          </div>

          {/* Items Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Items:</h2>
            {invoiceData.items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-1">
                  <input
                    type="number"
                    placeholder="Qty"
                    className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                    value={item.quantity}
                    onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                  />
                </div>
                <div className="col-span-5">
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                    value={item.description}
                    onChange={e => handleItemChange(index, 'description', e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    placeholder="Price"
                    className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                    value={item.price}
                    onChange={e => handleItemChange(index, 'price', e.target.value)}
                  />
                </div>
                <div className="col-span-3">
                  <input
                    type="text"
                    placeholder="Subtotal"
                    className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                    value={item.subtotal}
                    disabled
                  />
                </div>
                <div className="col-span-1">
                  <button
                    onClick={() => removeItem(index)}
                    className="w-full h-full bg-red-500 hover:bg-red-600 rounded flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={addItem}
              className="flex items-center text-blue-400 hover:text-blue-300"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Item
            </button>
          </div>

          {/* Payment Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment Information:</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Studio Name"
                className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                value={invoiceData.paymentInfo.studio}
                onChange={e => setInvoiceData({
                  ...invoiceData,
                  paymentInfo: {...invoiceData.paymentInfo, studio: e.target.value}
                })}
              />
              <input
                type="text"
                placeholder="Bank Name"
                className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                value={invoiceData.paymentInfo.bank}
                onChange={e => setInvoiceData({
                  ...invoiceData,
                  paymentInfo: {...invoiceData.paymentInfo, bank: e.target.value}
                })}
              />
              <input
                type="text"
                placeholder="Account Number"
                className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                value={invoiceData.paymentInfo.accountNo}
                onChange={e => setInvoiceData({
                  ...invoiceData,
                  paymentInfo: {...invoiceData.paymentInfo, accountNo: e.target.value}
                })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-900 border border-gray-800 rounded p-2"
                value={invoiceData.paymentInfo.email}
                onChange={e => setInvoiceData({
                  ...invoiceData,
                  paymentInfo: {...invoiceData.paymentInfo, email: e.target.value}
                })}
              />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div id="invoice-template" className="bg-white text-black p-8 rounded-lg">
          <div className="flex justify-between items-start border-2 border-purple-500 p-4 mb-8">
            <div>
              <div className="text-4xl font-bold">Invoice</div>
              <div className="text-sm">
                {invoiceData.date}<br />
                Invoice No: {invoiceData.invoiceNo}
              </div>
            </div>
            {logo && (
              <div className="w-32">
                <img src={logo} alt="Company Logo" className="w-full h-auto object-contain" />
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="font-bold mb-2">BILL TO:</div>
            <div>{invoiceData.billTo.name}</div>
            <div>{invoiceData.billTo.phone}</div>
          </div>

          <table className="w-full mb-8">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">DESCRIPTION</th>
                <th className="text-right py-2">PRICE</th>
                <th className="text-right py-2">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="py-2">
                    {item.quantity}x {item.description}
                  </td>
                  <td className="text-right py-2">${item.price}</td>
                  <td className="text-right py-2">${item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mb-8">
            <div className="w-1/3">
              <div className="flex justify-between border-b py-2">
                <span>SUBTOTAL</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b py-2">
                <span>TAX (20%)</span>
                <span>${calculateTax(calculateSubtotal()).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold py-2">
                <span>TOTALS</span>
                <span>${calculateTotal(calculateSubtotal(), calculateTax(calculateSubtotal())).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold mb-2">Payment Information</div>
            <div>Studio: {invoiceData.paymentInfo.studio}</div>
            <div>Bank: {invoiceData.paymentInfo.bank}</div>
            <div>Account No.: {invoiceData.paymentInfo.accountNo}</div>
            <div>Email: {invoiceData.paymentInfo.email}</div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={downloadPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;