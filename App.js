import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('Information submitted successfully!');
    setFormData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
  });
 
  setTimeout(() => {
    setSubmitMessage('');
  }, 2000); 
};

  const handleCancel = () => {
    setFormData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <div className="App">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-info">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        
        <div className="form-info">
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        
        <div className="form-info">
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
        </div>
        
        <div className="form-info">
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
          />
        </div>
        
        <div className="form-info">
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />
        </div>
        
        <div className="form-submissions">
          <button type="submit" className="submit-button">SUBMIT</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>CANCEL</button>
        </div>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </form>
    </div>
  );
}

export default App;
