import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandSupabase,
  TbShoppingBag,
} from "react-icons/tb";

export default function HeaderContent() {
  return (
    <div className="ko-container">
      <div className="mx-auto max-w-5xl grid-4">
        <div>
          <h1 className="tracking-[-0.07em] text-center">
            The <span className="font-semibold">Premier</span> Design and
            Development Studio
          </h1>
        </div>
        {/*
        <div className="p-4 md:p-0">
          <p className="leading-relaxed">
            We specialize in{" "}
            <span className="ko-paragraph-span">
              full-stack web and mobile app development
            </span>
            , user interface <span className="ko-paragraph-span">(UI)</span> and
            user experience <span className="ko-paragraph-span">(UX)</span>{" "}
            design, boasting extensive experience in{" "}
            <span className="ko-paragraph-span">
              <TbBrandReact className="ko-paragraph-span-icon" />
              React development
            </span>
            ,{" "}
            <span className="ko-paragraph-span">
              <TbBrandNodejs className="ko-paragraph-span-icon" />
              Node.js development
            </span>
            ,{" "}
            <span className="ko-paragraph-span">
              <TbBrandNextjs className="ko-paragraph-span-icon" />
              Next.js development
            </span>
            ,{" "}
            <span className="ko-paragraph-span">
              <TbBrandSupabase className="ko-paragraph-span-icon" />
              Headless CMS
            </span>
            , and{" "}
            <span className="ko-paragraph-span">
              <TbShoppingBag className="ko-paragraph-span-icon" />
              Headless E-commerce
            </span>
            .
          </p>
        </div>*/}
      </div>
    </div>
  );
}
