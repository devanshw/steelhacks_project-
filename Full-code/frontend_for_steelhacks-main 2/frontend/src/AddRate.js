import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRating = () => {
  const navigate = useNavigate();
  const [knowledge, setKnowledge] = useState(0);
  const [taName, setTaName] = useState(''); // Direct TA name input
  const [isInPerson, setIsInPerson] = useState(false);
  const [isZoom, setIsZoom] = useState(false);
  const [availability, setAvailability] = useState(0);
  const [preparedness, setPreparedness] = useState(0);
  const [approachability, setApproachability] = useState(0);
  const [comments, setComments] = useState('');

  // Submit form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the API
    const data = {
      firstName: taName, // Directly use the entered TA name
      KnowledgeOfSubject: knowledge,
      Approachability: approachability,
      Preparedness: preparedness,
      Availability: availability,
      reviewComment: comments,
    };

    try {
      // Send a POST request to your backend API
      await axios.post('http://localhost:3000/api/rate', data);
      console.log('Rating submitted successfully');

      // Reset form fields
      setKnowledge(0);
      setPreparedness(0);
      setAvailability(0);
      setComments('');
      setTaName('');
      setIsInPerson(false);
      setIsZoom(false);
      alert('Rating submitted successfully!');

      // Navigate to home page after submission
      navigate('/');
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('There was an error submitting the rating. Please try again.');
    }
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{ backgroundColor: '#FF8C00', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: 'white',
        width: '600px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px'
      }}>
        {/* Home Button */}
        <div style={{ position: 'relative', textAlign: 'right' }}>
  <img
    src="https://i.ibb.co/fkw6TMy/Screenshot-2024-09-28-at-4-29-46-PM.png"
    alt="Home"
    style={{ 
      width: '50px', 
      height: '50px', 
      cursor: 'pointer', 
      position: 'absolute', // Use absolute positioning
      top: '10px', // Adjust this to move it lower
      right: '50px' // Adjust this to move it more to the left
    }}
    onClick={handleHomeClick}
  />
</div>

        <h2>Add Rating</h2>

        {/* TA Name Input */}
        <div style={{ marginTop: '20px', width: '100%' }}>
          <label htmlFor="taName" style={{ marginBottom: '5px', display: 'block' }}>Teaching Assistant's Name:</label>
          <input
            type="text"
            id="taName"
            value={taName}
            onChange={(e) => setTaName(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Rating and Comments Sections */}
        <div className="user-details">
          {/* Knowledge Input */}
          <label htmlFor="knowledge">Knowledge:</label>
          <input
            type="range"
            id="knowledge"
            min="0"
            max="10"
            value={knowledge}
            onChange={(e) => setKnowledge(Number(e.target.value))}
          />
          <span>{knowledge}/10</span>

          {/* Preparedness Input */}
          <label htmlFor="preparedness">Preparedness:</label>
          <input
            type="range"
            id="preparedness"
            min="0"
            max="10"
            value={preparedness}
            onChange={(e) => setPreparedness(Number(e.target.value))}
          />
          <span>{preparedness}/10</span>

          {/* Approachability Input */}
          <label htmlFor="approachability">Approachability:</label>
          <input
            type="range"
            id="approachability"
            min="0"
            max="10"
            value={approachability}
            onChange={(e) => setApproachability(Number(e.target.value))}
          />
          <span>{approachability}/10</span>

          {/* Availability Input */}
          <label htmlFor="availability">Availability:</label>
          <input
            type="range"
            id="availability"
            min="0"
            max="10"
            value={availability}
            onChange={(e) => setAvailability(Number(e.target.value))}
          />
          <span>{availability}/10</span>

          {/* Comments Section */}
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Add your comments here"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          ></textarea>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#FF8C00', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRating;
