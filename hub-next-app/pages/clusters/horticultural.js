import Head from 'next/head';

import HubNavBar from '../../components/HubNavBar';
import ImageHeader from '../../components/ImageHeader';
import PersonOrBusinessCardGrid from '../../components/PersonOrBusinessCardGrid';
import Footer from '../../components/Footer';
import { fetchAPI, getStrapiURL } from '../../lib/api';
const qs = require('qs');

// Import react-bootstrap components
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';

const HorticulturalCluster = ({ global, partners }) => {
  return (
    <>
      <Head>
        <title>Horticultural Cluster - Smart Focus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HubNavBar logo={getStrapiURL(global.attributes.site_logo.data.attributes.url)}/>
      <ImageHeader size="sm" src="/images/banners/banner-horticultural-cluster.jpg">
        <div className='d-flex justify-content-center align-items-center w-100' style={{height: '85%'}}>
          <h1 className='text-white text-center intro-heading d-block'>Horticultural Cluster</h1>
        </div>
      </ImageHeader>
      <Container>
        <section className='mt-5 mb-5'>
          <img src={"/images/clusters/earth-with-plants.png"} className='img-fluid float-md-end' width={500} height={500} alt="earth with plants"/>
          <p>
            We want to produce the best horticultural outcomes with minimal impact on the planet – holistic management.
          </p>
          <p>
            We want everyone to enjoy and have confidence we are focused on sustainable horticulture, environmental management and agriculture, knowing what is produced and delivered to them is using the most sustainable practices along the production chain from bee to plate. 
          </p>
          <p>
            We look for the best ways to manage orchards, so each tree produces the best fruit possible. Using applied science, producers know the right time to harvest and the right way to store and transport their crop so that every consumer receives produce that tastes as if it was picked yesterday, with minimal chemicals and holds a badge of environmentally sustainable practices.
          </p>
          <p>
            Whether it be on a slice of toast or in a salad, avocado, with its healthy oils and smooth, buttery texture, is a versatile fruit that is more popular than ever. We want everyone to enjoy the best from each avocado they buy – perfectly ripe with no surprises once you slice it open. Our research makes sure avocados stay free from pest and disease and orchards are managed to minimise impact on the planet and maximise the potential of each tree. Our science also makes sure avocado fruit is stored so they can be delivered to consumers in the best condition.
          </p>
          <div style={{clear: 'both'}}></div>
        </section>
        <section>
          <h2 className='text-center mt-5 mb-3 heading-lg'>What is holistic management?</h2>
          <p>
            Holistic Management gives us the power to regenerate soils from an ecological, economic, and social perspective, and while regenerating ecosystems is our mission. We are focused on sustainable horticulture through holistic horticultural and environmental management practices.
          </p>
          <h2 className='text-center mt-5 mb-3 heading-sm'>Holistic management is about managing complexity</h2>
          <p>
            The natural world is comprised of beautifully and infinitely-complex adaptive living systems – land, animals, people, plants, fungi, and more all interconnected and in relationship – and the way we manage decisions amidst these complex living systems, matters.
          </p>
          <p>
            In this modern, industrial era, we have all been taught from an early age to reduce a problem down to its simplest components. This works for machines and other “complicated” systems whose individual parts can be fully defined, but when biology enters the picture, so too must humility and a shift from “control” to “cooperation”.
          </p>
          <p>
            Holistic managment provides a framework for decision making – rooted in the fundementals of ecosystem processes – and with a suite of planning procedures that include planned grazing, land planning, financial planning, and ecological monitoring.
          </p>
        </section>
        <section className='mt-5 mb-5'>
            <img src={"/images/clusters/holistic-management.png"} className='img-fluid float-md-end' width={500} height={500} alt="holistic management"/>
            <p>
              All together, Holistic Management equips us to understand the “whole” we are managing (not controlling) and make decisions that bring forth abundant outcomes, regenerating life for all involved.
            </p>
            <div style={{clear: 'both'}}></div>
        </section>
        <section>
          <h2 className='text-center mt-5 mb-3 heading-lg'>People and businesses in this cluster</h2>
          <PersonOrBusinessCardGrid entries={partners}/>
        </section>
      </Container>
      <Footer logoSrc={getStrapiURL(global.attributes.site_logo.data.attributes.url)} email={global.attributes.contact_email} phone={global.attributes.phone} address={global.attributes.address}/>
    </>
  );
}
 
export default HorticulturalCluster;

export async function getStaticProps() {
  const query_global = qs.stringify({
    populate: '*'
  }, {
    encodeValuesOnly: true,
  });
  const global = await fetchAPI(`/global?${query_global}`);

  const query_partners = qs.stringify({
    populate: {
      clusters: {
        fields: ['name']
      },
      image: {
        fields: ['url']
      }
    },
    filters: {
      clusters: {
        name: {
          $eq: 'Horticulture'
        }
      },
    },
  }, {
    encodeValuesOnly: true,
  });
  const request = `/partners?${query_partners}`;
  console.log(request)
  const partners = await fetchAPI(request);

  return {
    props: {
      global,
      partners
    }
  }
}