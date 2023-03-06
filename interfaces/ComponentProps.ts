export interface HtmlHeadProps {
  title: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  genre: string;
  genre_id: string;
  stage_id: string;
  stage_name: string;
  image: string;
  image_small: string;
  image_medium: string;
  image_large: string;
  startdate: string;
  starttime: string;
  stopdate: string;
  duration_minutes: string;
  price: string;
}
