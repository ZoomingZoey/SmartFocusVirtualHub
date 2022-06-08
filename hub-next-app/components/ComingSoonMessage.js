import Link from 'next/link';

import {
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';

const ComingSoonMessage = () => {
  return (
    <div className='coming-soon-container'>
      <h2 className='heading-sm mb-5 text-center'>This Page is Coming Soon!</h2>
      <p className='text-center'>Enter your email address below to be notified when this page becomes available!</p>
      <Form>
        <Row className="align-items-space">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              type='email'
              className="mb-2"
              id="inlineFormInput"
              placeholder="name@example.com"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <p className='text-center'>Or click the button below to return to the Home page</p>
      <Link href='/' passHref>
        <Button variant='dark'>Back to Home page</Button>
      </Link>
    </div>
  );
}

export default ComingSoonMessage;