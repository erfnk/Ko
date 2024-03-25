import Image from "next/image";
import placeholder from "/public/images/ko-showcase-qnote.webp";
import {
  TbArrowUpRight,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
} from "react-icons/tb";
import { SiSanity } from "react-icons/si";

let KoTitle: string = "Myqnote";
const KoDescription: JSX.Element = (
  <h5>
    We created a super-fast full-stack web application and designed brand
    identities for the Mqynote platform using Next.js and Node.js. Additionally,
    a mobile application is also under construction.
  </h5>
);

export default function ShowcaseSecondPage() {
  return (
    <div className="w-svw">
      <div className="ko-container-services">
        <div>
          <Image src={placeholder} alt={"KoTitle"} />
        </div>
        <div className="grid gap-4 md:p-8">
          <p className="font-semibold md:font-medium">{KoTitle}</p>
          {KoDescription}
          <div className="inline-flex gap-4">
            <button className="ko-button">
              <TbBrandReact className="size-6" />
              <TbBrandNextjs className="size-6" />
              <TbBrandNodejs className="size-6" />
              <SiSanity className="size-5" />
            </button>
            <button className="ko-button">
              Visit Website
              <TbArrowUpRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
