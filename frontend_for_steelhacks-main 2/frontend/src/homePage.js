import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterTA = () => {
  const navigate = useNavigate();
  const imageUrl = "https://i.ibb.co/fkw6TMy/Screenshot-2024-09-28-at-4-29-46-PM.png";
  const secondim = "https://i.ibb.co/tPLS7pn/Screenshot-2024-09-28-at-5-11-12-PM.png";
  const [isHoveredAddRegister, setIsHoveredAddRegister] = useState(false);
  const [isHoveredAddRating, setIsHoveredAddRating] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // To capture search input

  // Function to handle search and navigate to /userFound
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Navigate to /userFound with firstName as a query parameter
      navigate(`/userFound?firstName=${searchTerm}`);
    }
  };

  // Function to detect 'Enter' key press for search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFDFD', height: '100vh', position: 'relative' }}>
      {/* Add Rating Button */}
      <button
        style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          backgroundColor: isHoveredAddRating ? 'darkorange' : 'orange',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          padding: '25px 30px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHoveredAddRating(true)}
        onMouseLeave={() => setIsHoveredAddRating(false)}
        onClick={() => navigate('/addRating')}
      >
        Add Rating
      </button>

      {/* Register as a TA Button */}
      <button
        style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          backgroundColor: isHoveredAddRegister ? 'darkorange' : 'orange',
          color: 'white',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          padding: '25px 30px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHoveredAddRegister(true)}
        onMouseLeave={() => setIsHoveredAddRegister(false)}
        onClick={() => navigate('/newUser')}
      >
        Register as a TA
      </button>

      {/* Main content with search input */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src={imageUrl} 
            alt="Teaching Assistant 1" 
            style={{ width: '250px', marginBottom: '10px' }} 
          />
        </div>

        <img 
          src={secondim} 
          alt="Teaching Assistant Additional" 
          style={{ width: '500px' }} 
        />

        {/* Search Input for Teaching Assistant */}
        <input
          type="text"
          placeholder="Search for Teaching Assistant"
          value={searchTerm} // Bind value to state
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
          onKeyPress={handleKeyPress} // Listen for 'Enter' key press
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '16px',
            marginBottom: '10px'
          }}
        />
        <button
          onClick={handleSearch} // Trigger search on button click
          style={{
            padding: '10px 20px',
            backgroundColor: 'orange',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default RegisterTA;