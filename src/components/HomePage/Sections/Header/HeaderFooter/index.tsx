import { TbArrowDown } from "react-icons/tb";

export default function HeaderFooter() {
  return (
    <div className="ko-container grid">
      <div className="mx-auto pb-4">
        <button className="ko-button">
          Get Started <TbArrowDown className="size-6" />
        </button>
      </div>
    </div>
  );
}
