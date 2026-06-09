export type Destination = {
  id: string;
  name: string;
  country: string;
  region: string;
  nights: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  tags: string[];
  description: string;
  includes: string[];
  itinerary: string[];
};
