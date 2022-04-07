import Head from 'next/head';
import Image from 'next/image';

import HubNavBar from '../components/HubNavBar';
import ImageHeader from '../components/ImageHeader';

// Import react-bootstrap components
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Head>
        <title>Smart Focus - Finding smarter, sustainable solutions today</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HubNavBar/>
      <ImageHeader size="lg" url="/images/banners/banner-home.jpg" imgFade>
        <div className='d-flex justify-content-center align-items-center w-100' style={{height: '85%'}}>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-white text-center intro-heading d-block mb-3'>Finding smarter, sustainable solutions today.</h1>
            <div className='d-flex justify-content-around' style={{maxWidth: '250px', width: '100%'}}>
              <Button variant='primary' className='px-4' size='lg'>Login</Button>
              <Button variant='warning' className='px-4' size='lg'>Sign up</Button>
            </div>
          </div>
        </div>
      </ImageHeader>
      <Container fluid>

      </Container>
    </>
  )
}

export default Home;