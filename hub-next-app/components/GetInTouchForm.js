import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import {
  Form,
  Row,
  Col,
  Button,
  Alert
} from 'react-bootstrap';
import {getStrapiURL } from '../lib/api';

const inquirySchema = yup.object().shape({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup.string().email().required('Please enter your email address'),
  subject: yup.string().required('Please enter a subject'),
  message: yup.string().required('Please enter a message')
});

const GetInTouchForm = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendInquiry = (inquiry) => {
    const requestURL = getStrapiURL('/api/inquiries');
    fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inquiry)
    })
    .then(res => {
      if (!res.ok) {
        setShowError(true);
        return;
      }
      return res.json();
    })
    .then(json => {
      if (json) {
        setShowSuccess(true);
        //console.log(json.data);
      }
    })
    .catch(err => {
      setShowError(true);
      console.log(err);
    });
  }

  return (
    <div className='form-container'>
      <Alert variant='success' className='fixed-top text-center shadow-sm' show={showSuccess} onClose={() => setShowSuccess(false)} dismissible>
        Thank you! Your message was successfully sent.
      </Alert>
      <Alert variant='danger' className='fixed-top text-center shadow-sm' show={showError} onClose={() => setShowError(false)} dismissible>
        Failed to send message. Please try again later.
      </Alert>
      <Formik
        validationSchema={inquirySchema}
        onSubmit={(values, { resetForm }) => {
          const inquiryObj = {
            'data': {
              'first_name': values.firstName,
              'last_name': values.lastName,
              'email': values.email,
              'subject': values.subject,
              'message': values.message
            }
          };
          sendInquiry(inquiryObj);
          resetForm();
        }}
        initialValues={
          {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
          }
        }
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control
                  type='text'
                  name='firstName'
                  placeholder='First name'
                  className='shadow-sm'
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                  className='shadow-sm'
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='shadow-sm'
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formGridSubject">
                <Form.Control
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  className='shadow-sm'
                  value={values.subject}
                  onChange={handleChange}
                  isInvalid={!!errors.subject}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId="formGridMessage">
                <Form.Control
                  as="textarea"
                  name='message'
                  placeholder='Message'
                  rows={4}
                  className='shadow-sm'
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className='d-grid mt-4'>
              <Button type='submit' variant='dark' size='lg'>Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
 
export default GetInTouchForm;