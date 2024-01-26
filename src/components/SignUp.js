import React, { useState } from 'react';
import './style/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    speciality: '',
    about: '',
    practiceArea: '',
    spokenLanguages: [],
    city: '',
    wilaya: '',
    licenseYears: '',
    profileImage: null,
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      const updatedLanguages = checked
        ? [...formData.spokenLanguages, value]
        : formData.spokenLanguages.filter((lang) => lang !== value);

      setFormData({
        ...formData,
        spokenLanguages: updatedLanguages,
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        profileImage: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-container">
  <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
          <p><input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} /></p>
          <p><input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} /></p>
          <p><input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} /></p>
          <p><input type="text" name="speciality" placeholder="Speciality" value={formData.speciality} onChange={handleInputChange} /></p>
          <textarea
            name="about"
            placeholder="About"
            value={formData.about}
            onChange={handleInputChange}
          />
          <p><input type="text" name="practiceArea" placeholder="Practice Areas(separate them with a coma please!)" value={formData.practiceArea} onChange={handleInputChange} /></p>


          <label>
          <span>Spoken Languages:</span>
          <div className="spoken-languages">
            {["Arabic", "French", "English", "Spanish", "Italian"].map((language) => (
              <label key={language}>
                <input
                  type="checkbox"
                  name="spokenLanguages"
                  value={language}
                  onChange={handleInputChange}
                />
                {language}
              </label>
            ))}
          </div>
        </label>
        <p><input type="text" name="city" placeholder="Adress(city)" value={formData.city} onChange={handleInputChange} /></p>
        <p><input type="text" name="wilaya" placeholder="Wilaya" value={formData.wilaya} onChange={handleInputChange} /></p>
        <p><input type="text" name="licenseYears" placeholder="Licensed For/ per years" value={formData.licenseYears} onChange={handleInputChange} /></p>
        <label>
          <span>Add your PHOTO:</span>
          <input type="file" name="profileImage" onChange={handleInputChange} />
          <div className="file-upload-icon">+</div>
        </label>
        <p><input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} /></p>
        <p><input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} /></p>
        

        <button className='button1' type="submit">Sign Up</button>
        <div className="terms-of-use">
            By signing up, you agree to our <a href="#">Terms of Use</a>, <a href="#">Community Guidelines</a>, and <a href="#">Privacy Policy</a>.
          </div>
      </form>
      <div className="sign-in-section">
        <p>Already have an account? <span className="sign-in-link">Sign In</span></p>
      </div>
      </div>
</div>
  );
};

export default SignUp;
