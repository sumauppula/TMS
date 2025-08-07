import React, { useEffect, useState } from 'react';
import API from '../api';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get('users/profile/');
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch profile. You may need to login again.');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
      {/* Add more fields if needed */}
    </div>
  );
}

export default Profile;
