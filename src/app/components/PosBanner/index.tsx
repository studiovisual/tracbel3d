"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ThreeScene from "../../components/Obj3d/ThreeScene";

import { useGSAP } from "@gsap/react";
import gsap, { Back, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PosBanner = () => {
  const elementRef = useRef(null);
  const containerAnimation = useRef<HTMLDivElement>(null);
  const [control3dactive, setControl3dactive] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      //seta elementos
      setTimeout(() => {
        gsap.set(".imgPosBannerRotate", { scale: 1.5, opacity: 0 });
        // gsap.set(".imgPosBannerArrow1", { x: -100, opacity: 0 });
        gsap.set(".imgPosBannerArrow2", { y: -300, opacity: 0 });
        gsap.set(".imgBtnAtivar", { opacity: 0 });
        gsap.set(".imgBtnDesativar", { opacity: 0 });
        gsap.set(".imgRetroescavadeira", { x: 300, opacity: 0 });
        gsap.set(".imgPosBannerOrnamento", { x: 150, opacity: 0 });
        gsap.set(".boxPosBannerInterativo", { x: -150, opacity: 0 });
      }, 100);

      setTimeout(() => {
        const tl = gsap
          .timeline()
          .fromTo(
            ".textPosBanner1",
            { y: 100, opacity: 0 },
            { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut }
          );
        gsap.to(".imgPosBannerArrow2", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgPosBannerArrow2",
            start: "top 200px",
            end: "top 100px",
            scrub: true,
          },
        });
        gsap.to(".imgBtnAtivar", {
          opacity: 1,
          // y: 0,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgBtnAtivar",
            start: "top 600px",
            end: "top 100px",
            scrub: true,
          },
        });
        gsap.to(".imgBtnDesativar", {
          opacity: 1,
          // y: 0,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgBtnDesativar",
            start: "top 600px",
            end: "top 100px",
            scrub: true,
          },
        });
        gsap.to(".imgRetroescavadeira", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgRetroescavadeira",
            start: "top 600px",
            end: "top 100px",
            scrub: true,
          },
        });
        gsap.to(".imgPosBannerRotate", {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: Back.easeOut,
          scrollTrigger: {
            trigger: ".imgPosBannerRotate",
            start: "top 500px",
            end: "top 200px",
            scrub: true,
          },
        });
        gsap.to(".imgPosBannerOrnamento", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".imgPosBannerOrnamento",
            start: "top 500px",
            end: "top 200px",
            scrub: true,
          },
        });
        gsap.to(".boxPosBannerInterativo", {
          opacity: 1,
          x: -60,
          duration: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: ".boxPosBannerInterativo",
            start: "top 500px",
            end: "top 200px",
            scrub: true,
          },
        });
        //
        ScrollTrigger.create({
          trigger: ".imgPosBannerArrow1",
          animation: tl,
        });
      }, 200);
    },
    { scope: containerAnimation }
  );
  return (
    <>
      <div className="flex justify-center relative z-[130] ">
        <div className="imgPosBannerRotate opacity-0 rotate relative mt-[100px] max-md:mt-[45px]">
          <div className="img-rotate">
            <Image
              src="images/img-rotate.png"
              alt="Icon"
              className=""
              width={150}
              height={500}
              priority
            />
          </div>
          <Image
            src="images/icon-rotate.svg"
            alt="Icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>

      <div
        id="secao"
        className="relative z-[107]  w-full max-w-[90%] flex flex-row justify-between m-auto max-md:flex-col-reverse"
        ref={containerAnimation}
      >
        <div className="w-[20%]" ref={elementRef}>
          <Image
            src="images/arrow.svg"
            alt="Icon"
            className="imgPosBannerArrow1 opacity-0 max-w-[50%] mt-[160px] max-md:hidden"
            width={50}
            height={500}
            priority
          />
        </div>
        <div className="pt-20 w-[60%] max-md:pt-0 max-md:w-full">
          <p
            className="textPosBanner1 text-[45px] mt-14 font-abeezee leading-[50px] text-black text-center max-md:text-[22px] max-md:mt-3 opacity-0"
            ref={elementRef}
          >
            A força da Índia agora no Brasil
          </p>
        </div>
        <div className="w-[20%] flex justify-end max-md:w-full">
          <Image
            src="images/arrows.svg"
            alt="Icon"
            className="imgPosBannerArrow2 opacity-0 max-w-[50%] max-md:max-w-[10%] max-md:-mt-[150px]"
            width={140}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative z-[104] w-full max-w-[90%] flex justify-between container m-auto mt-10 max-md:flex-col max-md:max-w-[100%]">
        <div className="w-[70%] max-md:w-full cursor-pointer ">
          <div
            className="boxPosBannerInterativo absolute z-[400]  flex justify-center align-items-center"
            onClick={() => setControl3dactive(!control3dactive)}
          >
            {!control3dactive ? (
              <Image
                src="images/bt-ativar.png"
                className="imgBtnAtivar"
                alt={""}
                width={514}
                height={89}
              />
            ) : (
              <Image
                src="images/bt-desativar.png"
                className="imgBtnDesativar"
                alt={""}
                width={504}
                height={89}
              />
            )}
          </div>
          {/* <div className="boxPosBannerInterativo opacity-0 mt-[5%] max-md:hidden ">
            <div className="absolute left-[71px] rotate-[352deg] ">
              <Image
                onClick={() => setControl3dactive(!control3dactive)}
                src="images/text.svg"
                alt="Icon"
                className="max-w-[25%] max-md:max-w-[10%]"
                width={140}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="absolute  w-[180px] h-[180px] bg-[#D9D9D9] rounded-full -left-[5.5rem] pr-7 flex justify-end items-center">
              <Image
                onClick={() => setControl3dactive(!control3dactive)}
                src="images/box.svg"
                alt="Icon"
                className="max-w-[35%] max-md:max-w-[10%]"
                width={140}
                height={500}
                loading="lazy"
              />
            </div>
          </div> */}
        </div>

        {/* <div className="w-[30%] max-md:w-full">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XILgsqVxQcE?si=BBOo_thaYO4L66VR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div> */}
      </div>
      <div className="h-[60vh] z-0 flex justify-center align-items-center">
        {control3dactive ? (
          <ThreeScene control3dactive={control3dactive} />
        ) : (
          <div className="imgRetroescavadeira opacity-0 w-full ">
            <Image
              src="images/retroescavadeira_small.webp"
              alt="Icon"
              className=""
              width={1250}
              height={671}
              priority
            />
          </div>
        )}
      </div>
      <div
        className="relative z-[102] imgPosBannerOrnamento opacity-0 flex justify-end max-md:hidden"
        ref={elementRef}
      >
        <Image
          src="images/ornament.svg"
          alt="Icon"
          className="max-w-[40%] mt-5"
          width={500}
          height={500}
          priority
        />
      </div>
    </>
  );
};

export default PosBanner;
