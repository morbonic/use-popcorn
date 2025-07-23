import { Logo } from "./Logo";
import { Searchbar } from "./Searchbar";
import { CountResult } from "./CountResult";

export function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Searchbar />
      <CountResult movies={movies} />
    </nav>
  );
}
