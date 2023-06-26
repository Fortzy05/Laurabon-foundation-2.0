import HeaderCenter from "./HeaderCenter";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 shadow-lg overflow-hidden mx-auto">
      <HeaderTop />
      <HeaderCenter />
    </nav>
  );
}
