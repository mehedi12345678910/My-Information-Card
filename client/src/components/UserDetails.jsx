// import React from 'react';
// import { useLoaderData, Link } from 'react-router';

// const CertificateCard = () => {
//   const user = useLoaderData();

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
//         <h2 className="text-2xl font-bold ml-4">Verifying Credentials...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#1a1c2c] flex flex-col items-center justify-center p-4 md:p-10 font-serif">

//       {/* --- Main Certificate Container --- */}
//       <div className="relative bg-[#fdfbf7] p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[12px] border-double border-[#b8860b] max-w-5xl w-full overflow-hidden">

//         {/* Inner Border Design */}
//         <div className="border-2 border-[#b8860b] p-8 md:p-12 relative">

//           {/* Corner Decorations */}
//           <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#b8860b]"></div>
//           <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#b8860b]"></div>
//           <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#b8860b]"></div>
//           <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#b8860b]"></div>

//           {/* Header Section */}
//           <div className="text-center mb-10">
//             <h2 className="text-[#b8860b] text-xl md:text-2xl tracking-[0.3em] uppercase mb-2 font-sans">Official Document</h2>
//             <h1 className="text-5xl md:text-7xl font-bold text-slate-800 my-4 tracking-tight" style={{ fontFamily: 'serif' }}>
//               Certificate of Identity
//             </h1>
//             <div className="h-1 w-40 bg-[#b8860b] mx-auto mt-2"></div>
//           </div>

//           <div className="text-center mb-8">
//             <p className="text-lg text-gray-600 italic">This is to officially certify the information of</p>
//             <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a1c2c] mt-4 mb-2 underline decoration-1 underline-offset-8">
//               {user?.name || 'Full Name'}
//             </h3>
//             <p className="text-gray-500 font-sans tracking-widest uppercase text-sm mt-4">Identification Details</p>
//           </div>

//           {/* Data Grid Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-10 text-left border-t border-b border-gray-200 py-8 px-4">
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Father's Name</span>
//               <span className="text-slate-800 font-semibold">{user?.fatherName || 'N/A'}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Date of Birth</span>
//               <span className="text-slate-800 font-semibold">{user?.dateOfBirth || 'N/A'}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">National ID</span>
//               <span className="text-slate-800 font-semibold">{user?.nationalID || 'N/A'}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Blood Group</span>
//               <span className="text-red-600 font-bold">{user?.bloodGroup || 'N/A'}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Skills</span>
//               <span className="text-slate-800 font-semibold">{user?.skills || 'N/A'}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Nationality</span>
//               <span className="text-slate-800 font-semibold">{user?.nationality || 'N/A'}</span>
//             </div>
//             <div className="md:col-span-2 flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-xs">Address</span>
//               <span className="text-slate-800 font-semibold">{user?.presentAddress || 'N/A'}</span>
//             </div>
//           </div>

//           {/* Footer with Signature and Seal */}
//           <div className="mt-16 flex flex-col md:flex-row justify-between items-center px-6">
//             <div className="text-center mb-8 md:mb-0">
//               <p className="font-serif italic text-lg text-slate-800 border-b-2 border-slate-400 px-8 pb-1">Verified System</p>
//               <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Authority Signature</p>
//             </div>

//             {/* Golden Seal */}
//             <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-700 outline-double outline-2 outline-yellow-600">
//                <span className="text-[10px] font-bold text-yellow-900 text-center uppercase leading-tight">Authentic<br/>Seal</span>
//             </div>

//             <div className="text-center">
//               <p className="font-bold text-slate-800 border-b-2 border-slate-400 px-8 pb-1">{new Date().toLocaleDateString('en-GB')}</p>
//               <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Date of Issue</p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* --- Action Buttons --- */}
//       <div className="flex gap-4 mt-10">
//         <Link
//           to="/"
//           className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-bold transition-all shadow-lg flex items-center gap-2"
//         >
//           🏠 Return Home
//         </Link>
//         <button
//           onClick={() => window.print()}
//           className="px-8 py-3 bg-white hover:bg-gray-100 text-slate-800 rounded-full font-bold transition-all shadow-lg flex items-center gap-2"
//         >
//           🖨️ Print Certificate
//         </button>
//       </div>

//     </div>
//   );
// };

// export default CertificateCard;

// import React from "react";
// import { useLoaderData, Link } from "react-router";

// const CertificateCard = () => {
//   const user = useLoaderData();

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
//         <h2 className="text-2xl font-bold ml-4">Verifying Credentials...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#1a1c2c] flex flex-col items-center justify-center p-4 md:p-10 font-serif">
//       {/* স্টাইল ট্যাগ প্রিন্ট ফরম্যাটিং এর জন্য */}
//       <style>
//         {`
//           @media print {
//             body * { visibility: hidden; }
//             .certificate-container, .certificate-container * { visibility: visible; }
//             .certificate-container {
//               position: absolute;
//               left: 0;
//               top: 0;
//               width: 100%;
//               margin: 0;
//               padding: 0;
//               box-shadow: none;
//             }
//             .no-print { display: none; }
//           }
//         `}
//       </style>

//       {/* --- Main Certificate Container --- */}
//       <div className="certificate-container relative bg-[#fdfbf7] p-2 md:p-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] md:border-[16px] border-double border-[#b8860b] max-w-6xl w-full aspect-[1/1.414] md:aspect-[1.414/1] flex flex-col justify-center overflow-hidden">
//         {/* Inner Border Design */}
//         <div className="border-2 border-[#b8860b] h-full p-6 md:p-12 relative flex flex-col justify-between">
//           {/* Corner Decorations */}
//           <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-4 border-l-4 border-[#b8860b]"></div>
//           <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-4 border-r-4 border-[#b8860b]"></div>
//           <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-4 border-l-4 border-[#b8860b]"></div>
//           <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-4 border-r-4 border-[#b8860b]"></div>

//           {/* Header Section */}
//           <div className="text-center">
//             <h2 className="text-[#b8860b] text-xs md:text-xl tracking-[0.3em] uppercase mb-2 font-sans">
//               Official Document
//             </h2>
//             <h1 className="text-2xl md:text-6xl font-bold text-slate-800 my-2 md:my-4 tracking-tight  italic font-serif">
//               Certificate of Identity
//             </h1>
//             <div className="h-0.5 md:h-1 w-24 md:w-40 bg-[#b8860b] mx-auto mt-1"></div>
//           </div>

//           <div className="text-center my-4">
//             <p className="text-sm md:text-lg text-gray-600 italic">
//               This is to officially certify the information of
//             </p>
//             <h3 className="text-xl md:text-5xl font-extrabold text-[#1a1c2c] mt-2 mb-1 underline decoration-1 underline-offset-4 md:underline-offset-8">
//               {user?.name || "Full Name"}
//             </h3>
//             <p className="text-gray-500 font-sans tracking-widest uppercase text-[10px] md:text-sm mt-2 md:mt-4">
//               Identification Details
//             </p>
//           </div>

//           {/* Data Grid Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-8 lg:gap-x-12 text-left border-t border-b border-gray-200 py-4 md:py-8 px-2 md:px-4">
//             {[
//               { label: "Father's Name", value: user?.fatherName },
//               { label: "Date of Birth", value: user?.dateOfBirth },
//               { label: "National ID", value: user?.nationalID },
//               {
//                 label: "Blood Group",
//                 value: user?.bloodGroup,
//                 color: "text-red-600",
//               },
//               { label: "Skills", value: user?.skills },
//               { label: "Nationality", value: user?.nationality },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between border-b border-gray-100 pb-1"
//               >
//                 <span className="text-gray-500 font-bold uppercase text-[9px] md:text-xs">
//                   {item.label}
//                 </span>
//                 <span
//                   className={`text-slate-800 font-semibold text-[10px] md:text-base ${
//                     item.color || ""
//                   }`}
//                 >
//                   {item.value || "N/A"}
//                 </span>
//               </div>
//             ))}
//             <div className="md:col-span-2 flex justify-between border-b border-gray-100 pb-1">
//               <span className="text-gray-500 font-bold uppercase text-[9px] md:text-xs">
//                 Address
//               </span>
//               <span className="text-slate-800 font-semibold text-[10px] md:text-base text-right max-w-[70%]">
//                 {user?.presentAddress || "N/A"}
//               </span>
//             </div>
//           </div>

//           {/* Footer with Signature and Seal */}
//           <div className="mt-8 md:mt-16 flex justify-between items-center px-2 md:px-6">
//             <div className="text-center w-1/3">
//               <p className="font-serif italic text-xs md:text-lg text-slate-800 border-b border-slate-400 pb-1">
//                 Verified System
//               </p>
//               <p className="text-[8px] md:text-xs uppercase tracking-widest text-gray-500 mt-1 md:mt-2">
//                 Authority Signature
//               </p>
//             </div>

//             {/* Golden Seal */}
//             <div className="relative w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 md:border-4 border-yellow-700 outline-double outline-1 md:outline-2 outline-yellow-600">
//               <span className="text-[6px] md:text-[10px] font-bold text-yellow-900 text-center uppercase leading-tight">
//                 Authentic
//                 <br />
//                 Seal
//               </span>
//             </div>

//             <div className="text-center w-1/3">
//               <p className="font-bold text-xs md:text-lg text-slate-800 border-b border-slate-400 pb-1">
//                 {new Date().toLocaleDateString("en-GB")}
//               </p>
//               <p className="text-[8px] md:text-xs uppercase tracking-widest text-gray-500 mt-1 md:mt-2">
//                 Date of Issue
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Action Buttons --- */}
//       <div className="flex gap-4 mt-10 no-print">
//         <Link
//           to="/"
//           className="px-6 md:px-8 py-2 md:py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-sm md:text-base"
//         >
//           🏠 Home
//         </Link>
//         <button
//           onClick={() => window.print()}
//           className="px-6 md:px-8 py-2 md:py-3 bg-white hover:bg-gray-100 text-slate-800 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-sm md:text-base"
//         >
//           🖨️ Print
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CertificateCard;

// import React from "react";
// import { useLoaderData, Link } from "react-router";

// const CertificateCard = () => {
//   const user = useLoaderData();

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
//         <h2 className="text-2xl font-bold ml-4">Verifying...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#2c2c2c] flex flex-col items-center justify-center p-4 md:p-10 font-serif">
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Great+Vibes&family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

//           @media print {
//             body { background: white; padding: 0; }
//             .no-print { display: none; }
//             .certificate-container {
//               box-shadow: none !important;
//               border: 12px solid #d4af37 !important;
//               margin: 0 !important;
//               width: 100% !important;
//             }
//           }
//           .font-decorative { font-family: 'Cinzel Decorative', cursive; }
//           .font-signature { font-family: 'Great Vibes', cursive; }
//           .font-montserrat { font-family: 'Montserrat', sans-serif; }
//           .font-playfair { font-family: 'Playfair Display', serif; }
//         `}
//       </style>

//       {/* --- Main Certificate Container --- */}
//       <div className="certificate-container relative bg-[#fefdf0] p-4 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.6)] border-[20px] border-[#d4af37] max-w-[1150px] w-full aspect-[1.414/1] flex flex-col justify-between overflow-hidden">

//         {/* --- Top Right Floral Design (SVG) --- */}
//         <div className="absolute -top-2 -right-2 w-72 h-72 opacity-90 pointer-events-none">
//           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#d4af37" d="M180,20 Q150,20 130,50 Q110,80 80,80 Q50,80 50,110 Q50,140 20,140 L200,200 L200,20 Z" opacity="0.2"/>
//             <g fill="none" stroke="#d4af37" strokeWidth="1.5">
//               <path d="M190,10 Q140,10 120,60 M190,30 Q150,30 140,80 M170,10 Q170,60 120,90" />
//               <circle cx="185" cy="15" r="3" fill="#d4af37" />
//               <path d="M195,50 C180,80 150,90 130,120" strokeWidth="1"/>
//             </g>
//             <circle cx="195" cy="5" r="10" fill="#d4af37" opacity="0.3"/>
//           </svg>
//         </div>

//         {/* --- Bottom Left Floral Design (SVG) --- */}
//         <div className="absolute -bottom-2 -left-2 w-72 h-72 opacity-90 pointer-events-none rotate-180">
//           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#d4af37" d="M180,20 Q150,20 130,50 Q110,80 80,80 Q50,80 50,110 Q50,140 20,140 L200,200 L200,20 Z" opacity="0.2"/>
//             <g fill="none" stroke="#d4af37" strokeWidth="1.5">
//               <path d="M190,10 Q140,10 120,60 M190,30 Q150,30 140,80 M170,10 Q170,60 120,90" />
//             </g>
//           </svg>
//         </div>

//         {/* Inner Borders */}
//         <div className="absolute inset-3 border-2 border-[#b8860b] pointer-events-none"></div>
//         <div className="absolute inset-5 border border-[#b8860b] pointer-events-none opacity-30"></div>

//         {/* Header: Logo & Title */}
//         <div className="relative z-10 flex flex-col items-center mt-4">
//           <div className="flex items-center gap-4 mb-2">
//             <div className="w-14 h-14 bg-[#1a2a6c] rounded flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-yellow-500">P</div>
//             <div className="text-left">
//               <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">Google Developers</p>
//               <p className="text-lg font-bold text-[#1a2a6c] leading-none">Launchpad</p>
//             </div>
//           </div>
//           <p className="font-montserrat text-[#b8860b] text-xs tracking-[0.6em] uppercase font-bold mt-6">Official Document</p>
//           <h1 className="font-decorative text-4xl md:text-5xl text-[#1a2a6c] mt-2">CERTIFICATE OF IDENTITY</h1>
//           <div className="h-1 w-96 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4"></div>
//         </div>

//         {/* Body: User Info */}
//         <div className="relative z-10 text-center px-16">
//           <p className="text-lg text-gray-600 italic font-playfair mb-2">This is to officially certify the information of</p>
//           <h2 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 font-playfair tracking-tight">
//             {user?.name || "Om Prakssh Singh"}
//           </h2>
//           <div className="h-[2px] w-3/4 bg-gray-200 mx-auto mb-6"></div>

//           <p className="font-montserrat text-gray-400 tracking-[0.4em] uppercase text-[10px] font-bold mb-6">Identification Details</p>

//           <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left max-w-4xl mx-auto border-t border-b border-dashed border-gray-300 py-6">
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">Father's Name:</span>
//               <span className="font-bold text-slate-700">{user?.fatherName || "Ram Singh"}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">Date of Birth:</span>
//               <span className="font-bold text-slate-700">{user?.dateOfBirth || "01/01/1990"}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">National ID:</span>
//               <span className="font-bold text-slate-700">{user?.nationalID || "1231/77890"}</span>
//             </div>
//             <div className="flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">Nationality:</span>
//               <span className="font-bold text-slate-700">{user?.nationality || "Indian"}</span>
//             </div>
//             <div className="col-span-2 flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">Skills:</span>
//               <span className="font-bold text-red-600">{user?.skills || "C++, Python, Web Dev"}</span>
//             </div>
//             <div className="col-span-2 flex justify-between border-b border-gray-100 pb-1">
//               <span className="font-bold text-gray-500 uppercase text-[10px]">Address:</span>
//               <span className="font-bold text-slate-700 text-right">{user?.presentAddress || "123, Gandhi Marg, Delhi"}</span>
//             </div>
//           </div>
//         </div>

//         {/* Footer: Sign & Seal */}
//         <div className="relative z-10 flex justify-between items-end px-16 pb-6">
//           <div className="text-center w-1/3">
//             <p className="font-signature text-3xl text-[#1a2a6c] mb-[-10px]">Verified System</p>
//             <div className="h-[1px] bg-gray-400 w-full mb-2"></div>
//             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Authority Signature</p>
//           </div>

//           {/* Golden Seal (CSS) */}
//           <div className="relative flex items-center justify-center">
//             <div className="w-24 h-24 bg-[#d4af37] rounded-full shadow-xl border-4 border-[#b8860b] flex items-center justify-center relative outline outline-1 outline-offset-4 outline-[#d4af37]">
//                <div className="absolute inset-1 border border-dashed border-white/40 rounded-full"></div>
//                <p className="text-[9px] font-black text-yellow-900 text-center uppercase leading-tight font-montserrat">
//                  OFFICIAL<br/>VERIFIED<br/>SEAL
//                </p>
//             </div>
//           </div>

//           <div className="text-center w-1/3">
//             <p className="font-montserrat text-lg font-bold text-slate-800 mb-1">
//               {new Date().toLocaleDateString("en-GB")}
//             </p>
//             <div className="h-[1px] bg-gray-400 w-full mb-2"></div>
//             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date of Issue</p>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4 mt-8 no-print">
//         <Link to="/" className="px-8 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors font-bold">Home</Link>
//         <button onClick={() => window.print()} className="px-8 py-2 bg-[#d4af37] text-white rounded hover:bg-[#b8860b] transition-colors font-bold shadow-lg">Print Certificate</button>
//       </div>
//     </div>
//   );
// };

// export default CertificateCard;

import React from "react";
import { useLoaderData, Link } from "react-router";

const CertificateCard = () => {
  const user = useLoaderData();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mb-4"></div>
        <h2 className="text-2xl font-bold ml-4">Verifying...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#38393c] flex flex-col items-center justify-center p-2 md:p-10 font-serif">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Great+Vibes&family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
          
          @media print {
            @page {
              size: A5 landscape;
              margin: 0;
            }
            body { background: white !important; margin: 0; padding: 10; }
            .no-print { display: none !important; }
            .certificate-container { 
              box-shadow: none !important; 
              border: 10px solid #d4af37 !important;
              margin: 10 !important;
              width: 100vw !important;
              height: 100vh ;
              border-radius: 0 !important;
            }
          }

          .font-decorative { font-family: 'Cinzel Decorative', cursive; }
          .font-signature { font-family: 'Great Vibes', cursive; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-playfair { font-family: 'Playfair Display', serif; }
        `}
      </style>

      {/* --- Main Certificate Container --- */}
      <div className="certificate-container relative bg-[#fefdf0] p-4 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.6)] border-[10px] md:border-[15px] border-[#d4af37] max-w-[1150px] w-full min-h-[600px] md:aspect-[1.414/1] flex flex-col justify-between overflow-hidden">
        {/* --- Top Right Floral Design (SVG) --- */}
        <div className="absolute -top-2 -right-2 w-32 h-32 md:w-72 md:h-72 opacity-90 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#d4af37"
              d="M180,20 Q150,20 130,50 Q110,80 80,80 Q50,80 50,110 Q50,140 20,140 L200,200 L200,20 Z"
              opacity="0.2"
            />
            <g fill="none" stroke="#d4af37" strokeWidth="1.5">
              <path d="M190,10 Q140,10 120,60 M190,30 Q150,30 140,80 M170,10 Q170,60 120,90" />
              <circle cx="185" cy="15" r="3" fill="#d4af37" />
            </g>
          </svg>
        </div>

        {/* --- Bottom Left Floral Design (SVG) --- */}
        <div className="absolute -bottom-2 -left-2 w-32 h-32 md:w-72 md:h-72 opacity-90 pointer-events-none rotate-180">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#d4af37"
              d="M180,20 Q150,20 130,50 Q110,80 80,80 Q50,80 50,110 Q50,140 20,140 L200,200 L200,20 Z"
              opacity="0.2"
            />
            <g fill="none" stroke="#d4af37" strokeWidth="1.5">
              <path d="M190,10 Q140,10 120,60 M190,30 Q150,30 140,80 M170,10 Q170,60 120,90" />
            </g>
          </svg>
        </div>

        {/* Inner Borders */}
        <div className="absolute inset-2 md:inset-3 border-3 border-[#b8860b] pointer-events-none"></div>

        {/* Header: Logo & Title */}
        <div className="relative z-10 flex flex-col items-center mt-2 md:mt-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#1a2a6c] rounded flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg border border-yellow-500">
              P
            </div>
            <div className="text-left">
              <p className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                Programing Hero
              </p>
              <p className="text-sm md:text-lg font-bold text-[#1a2a6c] leading-none">
                Devlopers
              </p>
            </div>
          </div>
          <p className="font-montserrat text-[#b8860b] text-[8px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold mt-2 md:mt-6">
            Official Document
          </p>
          <h1 className="font-decorative text-xl md:text-4xl lg:text-5xl text-[#1a2a6c] mt-2 text-center px-2">
            CERTIFICATE OF PrOgRamiNg Hero
          </h1>
          <div className="h-0.5 md:h-1 w-32 md:w-96 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-2 md:mt-4"></div>
        </div>

        {/* Body: User Info */}
        <div className="relative z-10 text-center px-4 md:px-16 my-4">
          <p className="text-sm md:text-lg text-gray-600 italic font-playfair mb-1">
            This is to officially certify the information of
          </p>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-2 md:mb-6 font-playfair tracking-tight">
            {user?.name || "Om Prakash Singh"}
          </h2>
          <div className="h-[1px] md:h-[2px] w-3/4 bg-gray-200 mx-auto mb-4 md:mb-6"></div>

          <p className="font-montserrat text-gray-400 tracking-[0.2em] md:tracking-[0.4em] uppercase text-[8px] md:text-[10px] font-bold mb-4">
            Identification Details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-4 text-left max-w-4xl mx-auto border-t border-b border-dashed border-gray-300 py-4 md:py-6">
            <DetailRow
              label="Father's Name"
              value={user?.fatherName || "Ram Singh"}
            />
            <DetailRow
              label="Date of Birth"
              value={user?.dateOfBirth || "01/01/1990"}
            />
            <DetailRow
              label="National ID"
              value={user?.nationalID || "1231/77890"}
            />
            <DetailRow
              label="Nationality"
              value={user?.nationality || "Indian"}
            />
            <div className="md:col-span-2">
              <DetailRow
                label="Skills"
                value={user?.skills || "C++, Python, Web Dev"}
                isFullWidth
                valueColor="text-red-600"
              />
            </div>
            <div className="md:col-span-2">
              <DetailRow
                label="Address"
                value={user?.presentAddress || "123, Gandhi Marg, Delhi"}
                isFullWidth
              />
            </div>
          </div>
        </div>

        {/* Footer: Sign & Seal */}
        <div className="relative z-10 flex flex-row justify-between items-end px-4 md:px-16 pb-4 md:pb-6 gap-2">
          <div className="text-center w-1/3">
            <p className="font-signature text-xl md:text-3xl text-[#1a2a6c] mb-[-5px] md:mb-[-10px]">
              Verified System
            </p>
            <div className="h-[1px] bg-gray-400 w-full mb-1 md:mb-2"></div>
            <p className="text-[6px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Authority Signature
            </p>
          </div>

          {/* Golden Seal */}
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#d4af37] rounded-full shadow-xl border-2 md:border-4 border-[#b8860b] flex items-center justify-center relative outline outline-1 outline-offset-2 md:outline-offset-4 outline-[#d4af37]">
              <div className="absolute inset-1 border border-dashed border-white/40 rounded-full"></div>
              <p className="text-[6px] md:text-[9px] font-black text-yellow-900 text-center uppercase leading-tight font-montserrat">
                Pro
                <br />
                Graming
                <br />
                Hero
              </p>
            </div>
          </div>

          <div className="text-center w-1/3">
            <p className="font-montserrat text-sm md:text-lg font-bold text-slate-800 mb-1">
              {new Date().toLocaleDateString("en-GB")}
            </p>
            <div className="h-[1px] bg-gray-400 w-full mb-1 md:mb-2"></div>
            <p className="text-[6px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Date of Issue
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6 md:mt-8 no-print pb-10">
        <Link
          to="/"
          className="px-6 md:px-8 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors font-bold text-sm md:text-base"
        >
          Home
        </Link>
        <button
          onClick={() => window.print()}
          className="px-6 md:px-8 py-2 bg-[#d4af37] text-white rounded hover:bg-[#b8860b] transition-colors font-bold shadow-lg text-sm md:text-base"
        >
          Print Certificate
        </button>
      </div>
    </div>
  );
};

// Helper component for detail rows to keep code clean
const DetailRow = ({
  label,
  value,
  isFullWidth = false,
  valueColor = "text-slate-700",
}) => (
  <div
    className={`flex justify-between border-b border-gray-100 pb-1 ${
      isFullWidth ? "flex-row" : ""
    }`}
  >
    <span className="font-bold text-gray-500 uppercase text-[7px] md:text-[10px] whitespace-nowrap mr-2">
      {label}:
    </span>
    <span
      className={`font-bold text-[10px] md:text-sm ${valueColor} text-right`}
    >
      {value}
    </span>
  </div>
);

export default CertificateCard;
