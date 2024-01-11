// 'use client'
// import React from 'react';

// const PrintOnlyContent = ({ hotelInfo, tableInfo, currentOrder, calculateTotal }) => {
//     return (
//         <div className="print-only" style={{ visibility: "hidden" }}>
//         {/* Bill Header */}
//         <div className=" text-center mb-4 mt-10 ">
//           {hotelInfo && hotelInfo.hotelLogo && (
//             <div className="flex justify-center items-center mb-2">
//               <img
//                 src={`https://back-jj8x.onrender.com/${hotelInfo.hotelLogo}`}
//                 alt="Hotel Logo"
//                 className="w-24 h-24 object-cover rounded-md"
//               />
//             </div>
//           )}
//           <h1 className="text-2xl font-bold">{hotelInfo ? hotelInfo.hotelName : 'Hotel Not Found'}</h1>
//           <p className="text-sm">{hotelInfo ? hotelInfo.address : 'Hotel Not Found'}</p>
//         </div>
//         {/* <div className="text-lg font-semibold">Hotel: {hotelInfo ? hotelInfo.hotelName : 'Hotel Not Found'}</div> */}

//         <div className="text-sm font-bold">Table No: {tableInfo ? tableInfo.tableName : 'Table Not Found'}</div>
//         <div className="text-sm font-bold">FSSAI NO : {hotelInfo ? hotelInfo.fssaiNo : 'Fssai not found'}</div>
//         <div className="text-sm font-bold">SAC NO : {hotelInfo ? hotelInfo.sacNo : 'Fssai not found'}</div>
//         <div className="text-sm font-bold">MOBILE NO : {hotelInfo ? hotelInfo.contactNo : 'Fssai not found'}</div>


//         {/* Order Details */}
//         <div className="mb-10">
//           <h2 className="text-lg font-bold text-center">Invoice</h2>
//           <table className="w-full">
//             <thead >
//               <tr>
//                 <th className="text-center border border-black p-1.5">Sr No</th>
//                 <th className="text-center border border-black p-1.5">Menu Name</th>
//                 <th className="text-center border border-black p-1.5">Qty</th>
//                 <th className="text-center border border-black p-1.5">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentOrder.map((orderItem, index) => (
//                 <tr key={orderItem._id}>
//                   <td className="text-center border border-black p-1.5">{index + 1}</td>
//                   <td className="text-center border border-black p-1.5">{orderItem.name}</td>
//                   <td className="text-center border border-black p-1.5">{orderItem.quantity}</td>
//                   <td className="text-center border border-black p-1.5">{`₹${(orderItem.price * orderItem.quantity).toFixed(2)}`}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Total Section */}
//           <div className="border-t-2 pt-2 border-black">
//             <table className="w-full">
//               <tbody>
//                 <tr className="flex justify-between font-bold">
//                   <td className="text-left">Subtotal</td>
//                   <td className="text-right">{`₹${calculateTotal().subtotal}`}</td>
//                 </tr>
//                 <tr className="flex justify-between font-bold">
//                   <td className="text-left">CGST</td>
//                   <td className="text-right">{`₹${calculateTotal().CGST}`}</td>
//                 </tr>
//                 <tr className="flex justify-between font-bold">
//                   <td className="text-left">SGST</td>
//                   <td className="text-right">{`₹${calculateTotal().SGST}`}</td>
//                 </tr>
//                 <tr className="flex justify-between font-bold">
//                   <td className="text-left">Total</td>
//                   <td className="text-right">{`₹${calculateTotal().total}`}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="text-center mt-4">
//           {hotelInfo && hotelInfo.qrCode && (
//             <div className="flex justify-center items-center">
//               <img
//                 src={`https://back-jj8x.onrender.com/${hotelInfo.qrCode}`}
//                 alt="QR Code"
//                 className="w-32 h-32 object-cover rounded-md"
//               />
//             </div>
//           )}
//         </div>
//         <h1 className='text-center'> Thank You! Visit Again !!!</h1>
//       </div>
//     );
// };

// export default PrintOnlyContent;