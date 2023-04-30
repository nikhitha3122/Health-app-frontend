import React, { useState } from 'react';
import "../styles/form.css"
function Heart() {
  const [formData, setFormData] = useState({
    age : null,
    sex : 2,
    cp : 4,
    trestbps : null,
    chol : null,
    fbs  : 2,
    restecg  : 4,
    thalach : null,
    exang : null,    
    oldpeak : null,   
    slope   : 3,
    ca      : null,
    thal    : 0
  });
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.sex === null || formData.sex === undefined) {
      return;
    }
    if (formData.slope === null || formData.slope=== undefined) {
      return;
    }
    if (formData.fbs === null || formData.fbs === undefined) {
      return;
    }
    if (formData.cp=== null || formData.cp === undefined) {
      return;
    }
    if (formData.thal=== null || formData.thal === undefined) {
      return;
    }
    if (formData.restecg=== null || formData.restecg === undefined) {
      return;
    }
    fetch('https://healthapi-hhhf.onrender.com/heart_prediction', {
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
          Heart Disease Prediction
        </h3>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="sex" value={formData.sex} onChange={handleInputChange}>
          <option value={2}>Select</option>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
          </select>        
          </div>
        <div>
          <label>Chest Pain Type:</label>
          <select name="cp" value={formData.cp} onChange={handleInputChange} >
          <option value={4}>Select</option>
            <option value={0}>Typical Angina</option>
            <option value={1}>Atypical Angina</option>
            <option value={2}>Non Anginal Pain</option>
            <option value={3}>Asymptomatic</option>

          </select>
        </div>
        <div>
          <label>Blood Pressure:</label>
          <input type="number" name="trestbps" value={formData.trestbps} onChange={handleInputChange} />
        </div>
        <div>
          <label>Serum Cholestrol:</label>
          <input type="number" name="chol" value={formData.chol} onChange={handleInputChange} />
        </div>
        <div>
          <label>Fasting Blood Sugar:</label>
          <select name="fbs" value={formData.fbs} onChange={handleInputChange}>
          <option value={2}>Select</option>
          <option value={1}>greater than 120mg/ml</option>
          <option value={0}>lower than 120mg/ml</option>
          </select> 
        </div>
        <div>
          <label>Resting Electrocardiographic:</label>
          <select name="restecg" placeholder='Integer:0 to 2' value={formData.restecg} onChange={handleInputChange} >
          <option value={4}>Select</option>
            <option value={0}>Normal</option>
            <option value={1}>ST-T wave abnormality</option>
            <option value={2}>left ventricular hypertrophy</option>
          </select>
        </div>
        <div>
          <label>Maximum Heart Rate:</label>
          <input type="number" name="thalach" value={formData.thalach} onChange={handleInputChange} />
        </div>
        <div>
          <label>Exercise Induced Angina:</label>
          <select name="exang" value={formData.exang} onChange={handleInputChange}>
          <option value={2}>Select</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
          </select>
        </div>
        <div>
          <label>ST depression </label>
          <input type="number" name="oldpeak" value={formData.oldpeak} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Slope of the peak exercise:</label>
          <select type="number" name="slope" value={formData.slope} onChange={handleInputChange}>
          <option value={3}>Select</option>
          <option value={0}>Upsloping</option>
          <option value={1}>Flat</option>
          <option value={2}>Downsloping</option>
          </select>
        </div>
        <div>
          <label>Number of major vessels:</label>
          <input type="number" name="ca" placeholder='Integer:0 to 4' value={formData.ca} onChange={handleInputChange} />
        </div>
        <div>
          <label>Thalassemia:</label>
          <select name="thal" value={formData.thal} onChange={handleInputChange}>
          <option value={0}>Select</option>
            <option value={1}>Normal</option>
            <option value={2}>Fixed Defect</option>
            <option value={3}>Reversible defect</option>
            </select>
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

export default Heart