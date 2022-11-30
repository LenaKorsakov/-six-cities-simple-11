import type { Offer} from '../../@types/offer-types';

type OfferGalleryProps = {
 offer: Offer;
}

const GALLERY_MAX_LENGTH = 6;

function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const {images, title} = offer;

  const visibleImages = images?.slice(0, GALLERY_MAX_LENGTH);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {visibleImages.map((image, index) => {
          const keyValue = `${image}-${index}`;
          return (
            <div className="property__image-wrapper" key={keyValue}>
              <img
                className="property__image"
                src={image}
                alt={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfferGallery;
