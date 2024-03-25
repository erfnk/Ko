import { TbArrowRight } from "react-icons/tb";

export default function ServicesFirstPage() {
  return (
    <div className="flex items-center h-svh w-svw">
      <div className="ko-container grid gap-6 content-evenly h-svh w-svw">
        <div></div>
        <div>
          <h1>
            We create <span className="font-semibold">bespoke experiences</span>{" "}
            and <span className="font-semibold">develop products,</span> from{" "}
            <span className="font-semibold">lightning-fast web apps</span> to{" "}
            <span className="font-semibold">innovative mobile apps,</span>{" "}
            designed to <span className="font-semibold">maximize</span> your
            digital impact.
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
