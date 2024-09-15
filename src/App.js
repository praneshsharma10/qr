import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQRValue] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 25) {
      setInputText(value);
    }
  };

  const generateQR = () => {
    setQRValue(inputText);
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center', color: 'blue' }}>
      <h1>Generate a QR</h1>
      
 
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text (max 25 chars)"
        style={{ width: '300px', padding: '10px', fontSize: '20px' }}
      />

{/* //enter */}

      <br />
      <button
        onClick={generateQR}
        style={{ marginTop: '25px', padding: '12px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Enter
      </button>
    </div>  

// {/* //generate */}

// {/* {qrValue && (
//         <div style={{ marginTop: '40px'}}>
//           <QRCode value={qrValue} />
//         </div>
//       )}
//     </div> */}

  );
}
export default App;
