'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetRequest() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  // Fetch data on component mount or when dependencies change (empty array [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8025/notprotected/test'); // Replace with your actual API endpoint
        setMessage(response.data); // Assuming the message is in the response data
      } catch (error) {
        setError(error.message); // Handle errors gracefully
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Get Request Example</h1>
      {error && <p className="error">Error: {error}</p>}
      {message && <p>Response Message: {message}</p>}
      {!message && !error && <p>Loading...</p>}
    </div>
  );
}

