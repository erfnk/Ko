import HeaderNav from "./HeaderNav";
import HeaderFooter from "./HeaderFooter";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <div className="grid content-between min-h-[calc(100dvh)]">
      <HeaderNav />
      <HeaderContent />
      <HeaderFooter />
    </div>
  );
}
