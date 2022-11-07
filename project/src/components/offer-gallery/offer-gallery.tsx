import type { Offer} from '../../@types/offer-types';

type OfferGalleryProps = {
 offer: Offer;
}

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const {images, title} = offer;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images && images.map((image) => (
          <div className="property__image-wrapper" key={image}>
            <img
              className="property__image"
              src={image}
              alt={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
