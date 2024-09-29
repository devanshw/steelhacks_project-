import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './NewUserPage.css'; // Make sure to import the CSS file

const NewUserPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    courseName: '',
    departmentName: '',
    prevCourses: '',
    professorName: '',
    email: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      courseName: formData.courseName,
      departmentName: formData.departmentName,
      prevCourses: formData.prevCourses.split(',').map(course => course.trim()),
      professorName: formData.professorName,
      email: formData.email,
    };

    try {
      const response = await fetch('http://localhost:3000/api/newuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const result = await response.json();
   //   console.log('User created successfully:', result);
      setSubmitStatus({ success: true, error: null });
      setFormData({
        firstName: '',
        lastName: '',
        courseName: '',
        departmentName: '',
        prevCourses: '',
        professorName: '',
        email: '',
      });

      // Show the popup and navigate back after 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/'); // Redirect to homepage
      }, 2000);
    } catch (error) {
      console.error('Error creating user:', error);
      setSubmitStatus({ success: false, error: error.message });
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Course Name:
          <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required />
        </label>
        <label>
          Department:
          <input type="text" name="departmentName" value={formData.departmentName} onChange={handleChange} required />
        </label>
        <label>
          Previous Courses:
          <input type="text" name="prevCourses" value={formData.prevCourses} onChange={handleChange} placeholder="Separate with commas" />
        </label>
        <label>
          Professor Name:
          <input type="text" name="professorName" value={formData.professorName} onChange={handleChange} required />
        </label>
        <label>
          TA Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submitStatus.success && <p></p>}
      {submitStatus.error && <p style={{ color: 'red' }}>Error: {submitStatus.error}</p>}

      {/* Popup for successful user creation */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          zIndex: 1000,
        }}>
          User created successfully
        </div>
      )}
    </div>
  );
};

export default NewUserPage;
