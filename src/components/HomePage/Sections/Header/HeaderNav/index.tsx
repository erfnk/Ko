import Image from "next/image";
import KoLogo from "/public/images/ko-mono.svg";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

export default function HeaderNav() {
  return (
    <div className="ko-container">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <Image src={KoLogo} alt={"Lynxko"} className="size-12" />
        </div>
        <div className="justify-self-end">
          <button className="ko-button">
            <Bars3BottomLeftIcon className="size-5" />
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}
