type RoomCardProps = {
  src: string;
  premium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
}
function RoomCard({src, premium, price, title, type, rating}: RoomCardProps): JSX.Element{
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={src}
            width={260}
            height={200}
            alt="Place to live"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€
              {price}
            </b>{' '}
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default RoomCard;
export type {RoomCardProps};
