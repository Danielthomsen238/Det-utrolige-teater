import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorite, FavoriteState } from "../helpers/useFavorite";
import { useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

//favorite component
const Favorite = (props: any) => {
  //useSession to check if user is logged in
  const { data: session, status } = useSession();
  //use the zustand useFavorites to get, post, and delete favorites
  const { favorites, setFavorites, deleteFavorites, getFavorites } = useFavorite() as FavoriteState;

  //useeffect to get favorites before render component
  useEffect(() => {
    if (session) {
      getFavorites(session?.user.token);
    }
  }, [getFavorites, session]);

  //useMemo to check if the show is allready a favorite
  // returns the show if it is
  const isFavorite = useMemo(() => {
    return favorites?.find((item: any) => item.event_id === props.event_id);
  }, [favorites, props]);
  //if not logged in then you cant see favorite icon set or remove it
  if (!session) {
    return null; // Return null if session is undefined
  }
  //if logged in then check if the show is a favorite or not and render the icon
  return isFavorite ? (
    <FavoriteIcon onClick={() => deleteFavorites(props.event_id, session?.user.token)} />
  ) : (
    <FavoriteBorderIcon onClick={() => setFavorites(props.event_id, session?.user.token)} />
  );
};

export default Favorite;
