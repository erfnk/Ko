import Image from "next/image";
import KoLogo from "/public/images/ko-mono.svg";
import {
  TbArrowUp,
  TbBrandWhatsapp,
  TbMessage,
  TbNote,
  TbSettingsHeart,
  TbShieldLock,
} from "react-icons/tb";

export default function Footer() {
  return (
    <div className="grid content-between min-h-[calc(100dvh)]">
      <div className="h-[100px]"></div>
      {/* Content */}
      <div className="ko-container">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
          {/* Col-1 */}
          <div className="self-end">
            <Image src={KoLogo} alt={"Lynxko"} className="size-12" />
          </div>
          {/* Col-2 */}
          <div className="grid gap-2">
            <p className="font-medium">Links</p>
            <div className="inline-flex flex-wrap gap-4 mt-2">
              <button className="ko-button">
                <TbNote className="size-6" />
                Blog
              </button>
              <button className="ko-button">
                <TbSettingsHeart className="size-6" />
                Serives
              </button>
              <button className="ko-button">
                <TbShieldLock className="size-6" />
                Privacy Policy
              </button>
            </div>
          </div>
          {/* Col-3 */}
          <div className="grid gap-2">
            <p className="font-medium">Get in Touch</p>
            <h5>
              Tell us about your project. Let’s collaborate and make great
              stuff.
            </h5>
            <div className="inline-flex gap-4 mt-2">
              <button className="ko-button">
                <TbMessage className="size-6" />
                Write Us
              </button>
              <button className="ko-button">
                <TbBrandWhatsapp className="size-6" />
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="h-[100px]">
        <div className="container p-4 grid grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-base font-medium">© 2024 Lynxko.</p>
          </div>
          <div className="justify-self-end">
            <button className="ko-button">
              Skyward
              <TbArrowUp className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
