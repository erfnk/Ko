import Image from "next/image";
import KoImage from "/public/images/ko-services-web.webp";
import { TbArrowUpRight } from "react-icons/tb";

let KoTitle: string = "Web Application Design and Development";
const KoDescription: JSX.Element = (
  <h5>
    We specialize in the design and development of ultra-fast, full-stack modern{" "}
    <span className="font-semibold">web applications</span>, utilizing
    cutting-edge technologies like React and Node JS. We deliver visually
    striking, feature-rich online experiences tailored to your audience.
  </h5>
);

export default function ServicesSecondPage() {
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
