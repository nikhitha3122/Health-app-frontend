import React, { useState } from 'react';


function Cancer() {
  const [formData, setFormData] = useState({
    texture_mean: null,
    smoothness_mean : null,
    compactness_mean : null,
    symmetry_mean : null,
    fractal_dimension_mean : null,
    texture_se : null,
    smoothness_se : null,
    symmetry_se : null,    
    symmetry_worst : null
  });
  const [resultText, setResultText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://healthapi-hhhf.onrender.com/cancer_prediction', {
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
          Breast Cancer Prediction
        </h3>
        <div>
          <label>Texture Mean:</label>
          <input type="number" name="texture_mean" value={formData.texture_mean} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Smoothness Mean:</label>
          <input type="number" name="smoothness_mean" value={formData.smoothness_mean} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Compactness Mean:</label>
          <input type="number" name="compactness_mean" value={formData.compactness_mean} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Symmetry Mean:</label>
          <input type="number" name="symmetry_mean" value={formData.symmetry_mean} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Fractal Dimension Mean:</label>
          <input type="number" name="fractal_dimension_mean" value={formData.fractal_dimension_mean} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Texture SE:</label>
          <input type="number" name="texture_se" value={formData.texture_se} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Smoothness SE:</label>
          <input type="number" name="smoothness_se" value={formData.smoothness_se} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Symmetry SE:</label>
          <input type="number" name="symmetry_se" value={formData.symmetry_se} step="0.1" onChange={handleInputChange} />
        </div>
        <div>
          <label>Symmetry Worst:</label>
          <input type="number" name="symmetry_worst" value={formData.symmetry_worst} step="0.1" onChange={handleInputChange} />
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

export default Cancer