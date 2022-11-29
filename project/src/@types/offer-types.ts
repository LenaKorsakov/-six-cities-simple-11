export type Offer = {
    bedrooms: number;
    city: City;
    description: string;
    goods: string[];
    host: Host;
    id: number;
    images: string[];
    isPremium: boolean;
    location: Location;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
}

export type OfferPreview = Pick<Offer, 'id'|'isPremium'|'previewImage'|'price'|'rating'|'title'|'type'>

export type City = {
  location: Location;
name: string;
}

export type CityName = string;

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}
