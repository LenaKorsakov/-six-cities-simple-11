/* eslint-disable react/no-array-index-key */
import type { Offer} from '../../@types/offer-types';

type OfferGalleryProps = {
 offer: Offer;
}

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const {images, title} = offer;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images && images.map((image, index) => (
          <div className="property__image-wrapper" key={`${image}-${index}`}>
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
