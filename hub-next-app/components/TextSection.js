import { processMarkdown } from "../lib/helpers";
import { getStrapiURL } from "../lib/api";

const TextSection = ({ heading, text, image }) => {
  return (
    <>
      {heading && <h2 className='text-center mt-5 mb-4 heading-lg'>{heading}</h2>}
      {image && <img src={getStrapiURL(image.data.attributes.url)} className='img-fluid float-md-end' width={500} height={500} alt={image.data.attributes.alternativeText}/>}
      <section className={heading ? '' : 'mt-5'} dangerouslySetInnerHTML={{ __html: processMarkdown(text) }}></section>
      {image && <div style={{clear: 'both'}}></div>}
    </>
  );
}
 
export default TextSection;