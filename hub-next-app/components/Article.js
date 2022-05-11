import MarkdownIt from 'markdown-it';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiURL } from "../lib/api";
import { capitalizeString, getArticleDate } from '../lib/helpers';
import ImageHeader from '../components/ImageHeader';
import PodcastMediaController from './PodcastMediaController';
import { format } from 'date-fns';

// Import react-bootstrap components
import {
  Container,
  Button
 } from 'react-bootstrap';

const Article = ({ article }) => {
  const md = new MarkdownIt();

  return (
    <>
      <ImageHeader size="md" url={getStrapiURL(article.attributes.thumbnail_image.data.attributes.url)} imgFade>
        <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{height: '85%'}}>
          <h1 className='text-white text-center intro-heading d-block'>{capitalizeString(article.attributes.content_type)}</h1>
          <h1 className='text-white text-center intro-heading d-block'>{article.attributes.title}</h1>
          {article.attributes.content_type !== 'event' ?
            <h3 className='text-white text-center date d-block'>Published: {format(getArticleDate(article), 'do MMMM yyyy')}</h3>
            : (
              <>
                <h3 className='text-white text-center date d-block'>Start date: {format(new Date(article.attributes.start_date), 'do MMMM yyyy')}</h3>
                <h3 className='text-white text-center date d-block'>End date: {format(new Date(article.attributes.end_date ? article.attributes.end_date : article.attributes.start_date), 'do MMMM yyyy')}</h3>
                <h3 className='text-white text-center date d-block'>Location: {article.attributes.location}</h3>
                {article.attributes.organiser && <h3 className='text-white text-center date d-block'>Organiser: {article.attributes.organiser}</h3>}
                <Link href={article.attributes.event_website} passHref>
                  <Button variant='outline-light'>Visit Organiser's Website</Button>
                </Link>
              </>
            )
          }
          {article.attributes.content_type === 'podcast' &&
            <div className='podcast-media-controller-container'>
              <PodcastMediaController media={article.attributes.podcast_audio}/>
            </div>
          }
        </div>
      </ImageHeader>
      <Container>
      <h4 className='mt-4 mt-lg-5'>{article.attributes.description}</h4>
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
                        title={content.title ? content.title : ""}
                        alt={content.alt_text}
                        className="img-fluid"
                        priority
                      />
                    </div>
                    <figcaption
                      className='text-center px-2'
                      style={{maxWidth: `${content.image.data.attributes.width}px`}}
                    >
                      {content.caption}
                    </figcaption>
                  </figure>
                </section>
              );
            }
            if (content.__component === "article-contents.article-text") {
              return (
                <section key={index} className='mt-3 mt-lg-4' dangerouslySetInnerHTML={{ __html: md.render(content.text_content) }}></section>
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