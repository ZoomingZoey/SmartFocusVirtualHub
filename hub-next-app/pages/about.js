import Head from 'next/head';

import HubNavBar from '../components/HubNavBar';
import ImageHeader from '../components/ImageHeader';
import TextSection from '../components/TextSection';
import Service from '../components/Service';
import TeamMemberCard from '../components/TeamMemberCard';
import GetInTouchForm from '../components/GetInTouchForm';
import Footer from '../components/Footer';
import { fetchAPI, getStrapiURL } from '../lib/api';
const qs = require('qs');

// Import react-bootstrap components
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const About = ({ about_content, team_members, global }) => {
  return (
    <>
      <Head>
        <title>About Us - Smart Focus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HubNavBar logo={getStrapiURL(global.attributes.site_logo.data.attributes.url)}/>
      <ImageHeader size="sm" src={getStrapiURL(about_content.attributes.header_image.data.attributes.url)}>
        <div className='d-flex justify-content-center align-items-center w-100' style={{height: '85%'}}>
          <h1 className='text-white text-center intro-heading d-block'>About us</h1>
        </div>
      </ImageHeader>
      <Container>
        {
          about_content.attributes.content.map((content) => (
            <TextSection key={content.id} heading={content.heading} text={content.text_content}/>
          ))
        }
        <h2 className='text-center mt-5 mb-4 mb-md-5 heading-lg'>Services</h2>
        {
          about_content.attributes.services.map((service, index) => (
            <Service
              key={service.id}
              name={service.name}
              description={service.description}
              imageSrc={getStrapiURL(service.image.data.attributes.url)}
              imageOnLeft={index % 2 === 0 ? false : true}
            />
          ))
        }
        <section>
          <h2 className='text-center mt-5 mb-4 mb-md-5 heading-lg'>The Team</h2>
          <div className='d-flex flex-wrap justify-content-evenly'>
            {team_members.map(team_member => {
              return (
                <TeamMemberCard
                  key={team_member.id}
                  id={team_member.id}
                  fullName={team_member.attributes.fullname}
                  occupation={team_member.attributes.occupation}
                  imageSrc={team_member.attributes.image.data ? getStrapiURL(team_member.attributes.image.data.attributes.url) : '/images/icons/profile-blank.png'}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className='text-center mt-5 mb-4 mb-md-5 heading-lg'>Come see us</h2>
          <Row>
            <Col xs={12} md={6}>
            <h3 className='heading-sm'>Smart Focus</h3>
            <p className='lead'><strong>Email:</strong> {global.attributes.contact_email}</p>
            <p className='lead'><strong>Ph:</strong> {global.attributes.phone}</p>
            </Col>
            <Col xs={12} md={6}>
              <img src={getStrapiURL(global.attributes.address_image.data.attributes.url)} className='img-fluid rounded text-end'/>
              <p className='lead mt-3'>{global.attributes.address}</p>
            </Col>
          </Row>
        </section>
      </Container>
      <Container fluid className='form-section pb-5'>
        <h2 className='text-center pt-4 mb-3 mb-md-4 heading-lg'>Get in Touch</h2>
        <GetInTouchForm/>
      </Container>
      <Footer logoSrc={getStrapiURL(global.attributes.site_logo.data.attributes.url)} email={global.attributes.contact_email} phone={global.attributes.phone} address={global.attributes.address}/>
    </>
  );
}
 
export default About;

export async function getStaticProps() {
  const query_global = qs.stringify({
    populate: '*'
  }, {
    encodeValuesOnly: true,
  });
  const global = await fetchAPI(`/global?${query_global}`);

  const query_about = qs.stringify({
    populate: {
      header_image: {
        populate: '*'
      },
      content: {
        populate: '*'
      },
      services: {
        populate: '*'
      },
    }
  }, {
    encodeValuesOnly: true,
  });
  console.log(`/about?${query_about}`)
  const about_content = await fetchAPI(`/about?${query_about}`);

  const query_team_members = qs.stringify({
    populate: {
      image: {
        fields: ['url']
      }
    }
  }, {
    encodeValuesOnly: true,
  });
  const team_members = await fetchAPI(`/team-members?${query_team_members}`);

  return {
    props: {
      global,
      about_content,
      team_members
    }
  }
}