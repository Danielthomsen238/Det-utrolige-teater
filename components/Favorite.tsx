import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorite, FavoriteState } from "../helpers/useFavorite";
import { useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

const Favorite = (props: any) => {
  const { data: session, status } = useSession();
  const { favorites, setFavorites, deleteFavorites, getFavorites } = useFavorite() as FavoriteState;

  useEffect(() => {
    if (session) {
      getFavorites(session?.user.token);
    }
  }, [getFavorites, session]);

  const isFavorite = useMemo(() => {
    return favorites?.find((item: any) => item.event_id === props.event_id);
  }, [favorites, props]);
  console.log("Favorite", isFavorite);

  if (!session) {
    return null; // Return null if session is undefined
  }

  return isFavorite ? (
    <FavoriteIcon onClick={() => deleteFavorites(props.event_id, session?.user.token)} />
  ) : (
    <FavoriteBorderIcon onClick={() => setFavorites(props.event_id, session?.user.token)} />
  );
};

export default Favorite;
