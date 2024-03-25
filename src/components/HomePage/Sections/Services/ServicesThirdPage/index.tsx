import Image from "next/image";
import KoImage from "/public/images/ko-services-mobile.webp";
import { TbArrowUpRight } from "react-icons/tb";

let KoTitle: string = "Mobile Application Design and Development";
const KoDescription: JSX.Element = (
  <h5>
    We develop modern, high-speed{" "}
    <span className="font-semibold">mobile applications</span> for iOS and
    Android using React Native and Expo, ensuring they are built with a strong
    emphasis on security, scalability, and performance.
  </h5>
);

export default function ServicesThirdPage() {
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
