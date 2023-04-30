import React, { useState } from 'react';
import "../styles/form.css"
function Diabetes() {
  const [formData, setFormData] = useState({
    pregnancies: null,
    Glucose: null,
    BloodPressure: null,
    SkinThickness: null,
    Insulin: null,
    BMI: null,
    DiabetesPedigreeFunction: null,
    Age: null
  });
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://healthapi-hhhf.onrender.com/diabetes_prediction', {
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
          Diabetes Prediction
        </h3>
        <div>
          <label>Pregnancies:</label>
          <input type="number" name="pregnancies" value={formData.pregnancies} onChange={handleInputChange} />
        </div>
        <div>
          <label>Glucose:</label>
          <input type="number" name="Glucose" value={formData.Glucose} onChange={handleInputChange} />
        </div>
        <div>
          <label>Blood Pressure:</label>
          <input type="number" name="BloodPressure" value={formData.BloodPressure} onChange={handleInputChange} />
        </div>
        <div>
          <label>Skin Thickness:</label>
          <input type="number" name="SkinThickness" value={formData.SkinThickness} onChange={handleInputChange} />
        </div>
        <div>
          <label>Insulin:</label>
          <input type="number" name="Insulin" value={formData.Insulin} onChange={handleInputChange} />
        </div>
        <div>
          <label>Body Mass Index:</label>
          <input type="number" name="BMI" value={formData.BMI} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Diabetes Pedigree Function:</label>
          <input type="number" name="DiabetesPedigreeFunction" value={formData.DiabetesPedigreeFunction} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="Age" value={formData.Age} onChange={handleInputChange} />
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

export default Diabetes;