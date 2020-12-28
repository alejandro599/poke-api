import React,{useContext} from "react";
import FavouriteContext from "../contexts/FavouriteContext";
import '../style/NavBar.scss';
function NavBar() {
  const {favoritePokemons} = useContext(FavouriteContext);
  const logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="poke-logo" />
        <div>&#10084;&#65039;{favoritePokemons.length} </div>
      </nav>
    </>
  );
}

export default NavBar;
