import { TbArrowRight } from "react-icons/tb";

export default function ShowcaseFirstPage() {
  return (
    <div className="flex items-center h-svh w-svw">
      <div className="ko-container grid gap-8 content-evenly h-svh w-svw">
        <div></div>
        <div>
          <h1>
            Explore our featured{" "}
            <span className="font-semibold">case studies</span> and{" "}
            <span className="font-semibold">recent projects</span> to discover
            the <span className="font-semibold">innovative solutions</span> and{" "}
            <span className="font-semibold">outstanding results</span> we have{" "}
            <span className="font-semibold">delivered</span> for our clients.
          </h1>
        </div>

        <div className="justify-self-end">
          <button className="ko-button">
            Continue Your Journey
            <TbArrowRight className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
