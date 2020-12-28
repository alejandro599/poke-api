import React, { useState } from "react";
//import { searchPokemon } from "../api";
import '../style/SearchBar.scss';
function SearchBar(props) {
  const {onSearch} = props;
  const [search, setSearch] = useState("");
  //const [pokemon, setPokemon] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length === 0){
      onSearch (null);
    }
  };
  const onClick = async (e) => {
    onSearch(search);
    //setPokemon(data);
  };
  return (
    <>
      <div className="container">
        <input
          onChange={onChange}
          type="text"
          placeholder="Buscar Pokemón..."
        />
        <button className="button" onClick={onClick}>Buscar</button>
      
        
     
      </div>
    </>
  );
}

export default SearchBar;
