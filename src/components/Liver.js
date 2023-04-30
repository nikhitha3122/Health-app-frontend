import React, { useState } from 'react';
import "../styles/heart.css"
function Liver() {
  const [formData, setFormData] = useState({
    Age    : null,
    Gender : 2,
    Total_Bilirubin  : null,
    Alkaline_Phosphotase : null,
    Alamine_Aminotransferase : null,
    Aspartate_Aminotransferase : null,
    Total_Protiens  : null,
    Albumin   : null,   
    Albumin_and_Globulin_Ratio : null  
  });
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.Gender === null || formData.Gender === undefined) {
      return;
    }
    fetch('https://healthapi-hhhf.onrender.com/liver_prediction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(text => setResultText(text))
    .catch(error => console.error(error));
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <div className='dinpf'>
      <form onSubmit={handleSubmit}>
        <h3>
          Liver Disease Prediction
        </h3>
        <div>
          <label>Age:</label>
          <input type="number" name="Age" value={formData.Age} onChange={handleInputChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="Gender" value={formData.Gender} onChange={handleInputChange}>
          <option value={2}>Select</option>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
          </select>
        </div>

        <div class="desc">
          <label>Total Bilirubin:</label>
          <input type="number" name="Total_Bilirubin" value={formData.Total_Bilirubin} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>AlkalinemPhosphotase:</label>
          <input type="number" name="Alkaline_Phosphotase" value={formData.Alkaline_Phosphotase} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Alamine Aminotransferase:</label>
          <input type="number" name="Alamine_Aminotransferase" value={formData.Alamine_Aminotransferase} onChange={handleInputChange} />
        </div>
        <div>
          <label>Aspartate Aminotransferase:</label>
          <input type="number" name="Aspartate_Aminotransferase" value={formData.Aspartate_Aminotransferase} onChange={handleInputChange} />
        </div>
        <div>
          <label>Total Protiens:</label>
          <input type="number" name="Total_Protiens" value={formData.Total_Protiens} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Albumin:</label>
          <input type="number" name="Albumin" value={formData.Albumin} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Albumin and Globulin Ratio:</label>
          <input type="number" name="Albumin_and_Globulin_Ratio" value={formData.Albumin_and_Globulin_Ratio} step="0.1" onChange={handleInputChange} />
        </div>
      <div className='predict-btn'>
        <button type="submit">Predict</button>
        </div>
        <div className='result'>
        {resultText}
      </div>
      </form>
      </div>
    </div>
  );
}

export default Liver