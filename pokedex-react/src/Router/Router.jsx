import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PokemonListPage />} />
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="pokemon-detail" element={<PokemonDetailPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
