import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import Header from './Header';
import Services from './Services';
import Showcase from './Showcase';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Sections() {
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector('.main'), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
    ScrollTrigger.defaults({
      scroller: '.main',
    });
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: '.main',
        start: 'top 50%',
        onEnter: () =>
          gsap.to('.main', {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to('.main', {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => {};
  }, []);

  return (
    <div className="main h-screen w-screen flex flex-col overflow-x-hidden">
      <section
        className="min-h-[calc(100dvh)] w-screen relative"
        data-bgcolor="#b7c0be"
        data-textcolor="#17332D"
      >
        <Header />
      </section>
      <section
        className="min-h-[calc(100dvh)] w-screen relative"
        data-bgcolor="#F7F7F5"
        data-textcolor="#17332D"
      >
        <Services />
      </section>
      <section
        className="min-h-[calc(100dvh)] w-screen relative"
        data-bgcolor="#F7F7F5"
        data-textcolor="#17332D"
      >
        <Showcase />
      </section>
      <section
        className="min-h-[calc(100dvh)] w-screen relative"
        data-bgcolor="#b7c0be"
        data-textcolor="#17332D"
      >
        <Footer />
      </section>
    </div>
  );
}