import HeaderCenter from "./HeaderCenter";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 shadow-lg overflow-hidden">
      <HeaderTop />
      <HeaderCenter />
    </nav>
  );
}
