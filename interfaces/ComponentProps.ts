//data structure for components

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

export interface CardProps {
  data: {
    id: string;
    title: string;
    description: string;
    genre: string;
    stage_name: string;
    image_large: string;
    startdate: string;
    stopdate: string;
  };
}

export interface Actor {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface ActorItemProps {
  data: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

export interface EventDetail {
  actors: Actor[];
  id: string;
  title: string;
  description: string;
  genre: string;
  genre_id: string;
  image: string;
  image_large: string;
  image_medium: string;
  image_small: string;
  stage_id: string;
  stage_name: string;
  duration_minutes: string;
  price: string;
  startdate: string;
  starttime: string;
  stopdate: string;
}

export interface Reviews {
  event_id: string;
  event_title: string;
  stage_name: string;
  subject: string;
  num_stars: string;
  id: string;
  user: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  };
  comment: string;
  user_id: string;
  created: string;
}

export interface ReviewProps {
  data: Reviews;
}

export interface ReviewForm {
  comment: string;
  subject: string;
}
