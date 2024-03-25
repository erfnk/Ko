import Image from "next/image";
import KoImage from "/public/images/ko-services-design.webp";
import { TbArrowUpRight } from "react-icons/tb";

let KoTitle: string = "Digital Design and Branding";
const KoDescription: JSX.Element = (
  <h5>
    While we develop your app, we will simultaneously manage your{" "}
    <span className="font-semibold">brand identities</span> and design system.
    Additionally, we will create static, interactive, or animated brand assets
    and content.
  </h5>
);

export default function ServicesFourthPage() {
  return (
    <div className="w-svw">
      <div className="ko-container-services">
        <div className="grid gap-2 md:gap-4 md:p-8">
          <p className="font-semibold md:font-medium">{KoTitle}</p>
          {KoDescription}
          <div className="inline-flex mt-2">
            <button className="ko-button">
              Discover More
              <TbArrowUpRight className="size-6" />
            </button>
          </div>
        </div>
        <div className="order-first md:-order-none">
          <Image src={KoImage} alt={KoTitle} />
        </div>
      </div>
    </div>
  );
}
