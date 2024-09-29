import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize navigate for routing
  const navigate = useNavigate();

  // Extract the firstName from the URL query string
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');

  useEffect(() => {
    if (firstName) {
      handleFetchUser();
    }
  }, [firstName]);

  const handleFetchUser = async () => {
    if (!firstName) return;

    setLoading(true);
    setError(null);
    setUser(null);

    /* Don't Touch this import statement */
    try {
      const response = await fetch('http://localhost:3000/api/getuserdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'User not found');
      }

      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Grading function to convert average score to a letter grade
  const getLetterGrade = (averageScore) => {
    if (averageScore >= 9.8) return 'A+';
    if (averageScore >= 9.3) return 'A';
    if (averageScore >= 9.0) return 'A-';
    if (averageScore >= 8.7) return 'B+';
    if (averageScore >= 8.3) return 'B';
    if (averageScore >= 8.0) return 'B-';
    if (averageScore >= 7.7) return 'C+';
    if (averageScore >= 7.3) return 'C';
    if (averageScore >= 7.0) return 'C-';
    if (averageScore >= 6.7) return 'D+';
    if (averageScore >= 6.3) return 'D';
    if (averageScore >= 6.0) return 'D-';
    return 'F';
  };

  const getGradeColorClass = (letterGrade) => {
    if (letterGrade === 'A+' || letterGrade === 'A' || letterGrade === 'A-') return 'grade-green';
    if (letterGrade === 'B+' || letterGrade === 'B' || letterGrade === 'B-') return 'grade-blue';
    if (letterGrade === 'C+' || letterGrade === 'C' || letterGrade === 'C-') return 'grade-yellow';
    if (letterGrade === 'D+' || letterGrade === 'D' || letterGrade === 'D-') return 'grade-orange';
    return 'grade-red'; // For 'F'
  };

  // Function to handle home click
  const handleHomeClick = () => {
    navigate('/homepage'); // Adjust the path as necessary
  };

  return (
    <div className="user-details-container">
      {/* Home Image */}
      <img
        src="https://i.ibb.co/fkw6TMy/Screenshot-2024-09-28-at-4-29-46-PM.png"
        alt="Home"
        style={{ 
          width: '120px', 
          height: '120px', 
          cursor: 'pointer', 
          position: 'absolute', // Use absolute positioning
          top: '30px', // Adjust this to move it lower
          right: '70px' // Adjust this to move it more to the left
        }}
        onClick={handleHomeClick}
      />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-info">
          <div className="user-profile">
            <h2>{user.firstName} {user.lastName}</h2>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          
          <div className="user-details">
            <p><strong>Course Name:</strong> {user.courseName}</p>
            <p><strong>Department:</strong> {user.departmentName.toUpperCase()}</p>

            <div className="side-by-side">
              <p><strong>Knowledge of Subject:</strong> </p>
              <p><strong>Approachability:</strong> </p>
              <p><strong>Preparedness:</strong></p>
              <p><strong>Availability:</strong></p>
            </div>
            <div className="circle-side-by-side">
              <p className="circle">{user.averageKnowledgeOfSubject}/10</p>
              <p className="circle">{user.averageApproachability}/10</p>
              <p className="circle">{user.averagePreparedness}/10</p>
              <p className="circle">{user.averageAvailability}/10</p>
            </div>

            <div className="data-entry-container">
              {/* Calculate the average score */}
              <textarea className="text-box" placeholder="Grade: ">
                {getLetterGrade(
                  (user.averageKnowledgeOfSubject
                  +user.averageApproachability
                  +user.averagePreparedness
                  +user.averageAvailability) / 4
                )}
              </textarea>
            </div>  

            <p><strong>Virtual:</strong> {user.virtual ? 'Yes' : 'No'}</p>
            <p><strong>In Person:</strong> {user.inPerson ? 'Yes' : 'No'}</p>
          </div>

          <div className="user-reviews">
            <h3>Reviews:</h3>
            <ul>
              {user.reviews.length > 0 ? (
                user.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.reviewerName}:</strong> {review.comment} <em>({new Date(review.ratingDate).toLocaleDateString()})</em>
                  </li>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
