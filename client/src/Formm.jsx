import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formm.css'; 

const Formm = () => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [BloodGroup, setBloodGroup] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');

  const [emailErr, setEmailErr] = useState('');

  const isValidEmail = (Email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(Email);
  }

  const postData = async () => {

    if(!isValidEmail(Email)){
      setEmailErr("Invalid Email format");
      return;
    }


    const details = { Name, Age, Gender, BloodGroup, Mobile, Email, Address };
    try {
      const response = await axios.post('http://localhost:4000', details);
      console.log(response.data);
    } catch (error) {
      console.log('Error while posting data', error);
    }
  };

  return (
    <div>
      <Form className="form-container" onSubmit={postData}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Full Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label className="form-label">Age</Form.Label>
          <Form.Control
            className="form-input"
            type="number"
            placeholder="Age"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="gender">
          <Form.Label className="form-label">Gender</Form.Label>
          <Form.Check
            className="radio-label"
            type="radio"
            label="Male"
            value="male"
            checked={Gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          <Form.Check
            className="radio-label"
            type="radio"
            label="Female"
            value="female"
            checked={Gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Select className="form-input" value={BloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option>Blood Group</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label className="form-label">Mobile</Form.Label>
          <Form.Control
            className="form-input"
            type="number"
            placeholder="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {emailErr}
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            className="form-input"
            type="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label className="form-label">Address</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formm;























