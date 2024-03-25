import Image from "next/image";
import placeholder from "/public/images/ko-showcase-nk.webp";
import { TbArrowUpRight, TbBrandNextjs, TbBrandReact } from "react-icons/tb";

let KoTitle: string = "Naoki Katori";
const KoDescription: JSX.Element = (
  <h5>
    We created a personal website for Chef Naoki Katori, utilizing the latest
    web design technologies such as Next.js, and incorporating Sanity as the
    headless CMS.
  </h5>
);

export default function ShowcaseThirdPage() {
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
