import { Logo } from "./Logo";
import { Searchbar } from "./Searchbar";

export function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Searchbar />
      {children}
    </nav>
  );
}
