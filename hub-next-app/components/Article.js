import Image from 'next/image';
import { getStrapiURL } from "../lib/api";
import { capitaliseString, getArticleDate, processMarkdown, getArticleHeaderImage } from '../lib/helpers';
import ImageHeader from './ImageHeader';
import PodcastMediaController from './PodcastMediaController';
import EventDetails from './EventDetails';
import { format } from 'date-fns';

// Import react-bootstrap components
import {
  Container,
  Button
 } from 'react-bootstrap';

const Article = ({ article }) => {
  return (
    <>
      <ImageHeader size="md" src={getStrapiURL(getArticleHeaderImage(article).data.attributes.url)} imgFade>
        <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height: '85%'}}>
          <h1 className='text-white text-center intro-heading d-block'>{capitaliseString(article.attributes.content_type, '-')}</h1>
          <h1 className='text-white text-center intro-heading d-block'>{article.attributes.title}</h1>
          <h3 className='text-white text-center date d-block'>Published: {format(getArticleDate(article), 'do MMMM yyyy')}</h3>
          {article.attributes.content_type === 'podcast' &&
            <div className='podcast-media-controller-container'>
              <PodcastMediaController media={article.attributes.podcast_audio}/>
            </div>
          }
        </div>
      </ImageHeader>
      <Container>
        <h4 className='mt-4 mt-lg-5'>{article.attributes.description}</h4>
        {article.attributes.content_type === 'event' &&
          <EventDetails
            startDate={article.attributes.start_date}
            endDate={article.attributes.end_date ? article.attributes.end_date : article.attributes.start_date}
            location={article.attributes.location}
            organiser={article.attributes.organiser}
            websiteLink={article.attributes.event_website}
          />
        }
        {
          article.attributes.content.map((content, index) => {
            if (content.__component === "article-contents.article-image") {
              return (
                <section key={index}>
                  <figure>
                    <div className='next-image-wrapper mt-3 mt-lg-4'>
                      <Image
                        src={getStrapiURL(content.image.data.attributes.url)}
                        width={content.image.data.attributes.width}
                        height={content.image.data.attributes.height}
                        alt={content.image.data.attributes.alternativeText}
                        className="img-fluid"
                        priority
                      />
                    </div>
                    <figcaption
                      className='text-center px-2'
                      style={{maxWidth: `${content.image.data.attributes.width}px`}}
                    >
                      {content.image.data.attributes.caption}
                    </figcaption>
                  </figure>
                </section>
              );
            }
            if (content.__component === "article-contents.article-text") {
              return (
                <section key={index} className='mt-3 mt-lg-4' dangerouslySetInnerHTML={{ __html: processMarkdown(content.text_content) }}></section>
              );
            }
            return null;
          })
        }
      </Container>
    </>
  );
}
 
export default Article;