import React from "react";
import { HeaderComponent } from "./HeaderStyles";
import logo from "../../Assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname == "/";
  return (
    <>
      <HeaderComponent>
        {isHomePage ? (
          <div />
        ) : (
          <Link to="/">
            <div className="btn-back"> Todos Pokémons </div>
          </Link>
        )}

        <img src={logo} alt="pokeapi-logo" />

        {isHomePage ? (
          <Link to="pokedex">
            <button>Pokédex</button>
          </Link>
        ) : (
          <div />
        )}
      </HeaderComponent>
      <Outlet />
    </>
  );
};
export default Header;
