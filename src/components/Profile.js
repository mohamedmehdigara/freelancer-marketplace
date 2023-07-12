import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    profilePicture: '',
    bio: '',
    contactDetails: '',
  });

  useEffect(() => {
    // Simulating API call to fetch profile data
    setTimeout(() => {
      const fakeProfileData = {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile-picture.jpg',
        bio: 'I am a freelance developer with expertise in React.js.',
        contactDetails: 'john.doe@example.com',
      };
      setProfileData(fakeProfileData);
    }, 1000);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating API call to update profile data
    setTimeout(() => {
      alert('Profile updated successfully!');
    }, 1000);
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Profile Picture:
          <input
            type="text"
            name="profilePicture"
            value={profileData.profilePicture}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Details:
          <input
            type="text"
            name="contactDetails"
            value={profileData.contactDetails}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
