import type { Host } from '../../@types/offer-types';

type HostProps = {
  host: Host;
  description: string;
}

function OfferHost({host, description}: HostProps): JSX.Element {
  const {avatarUrl, name, isPro} = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="property__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{name}</span>
        <span className="property__user-status">{isPro}</span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OfferHost;
