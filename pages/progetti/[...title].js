import React from "react";
import data from "@/utils/progetti.json";
import HeroProject from "@/components/hero/HeroProject";
import Image from "next/image";
import Banner from "@/components/layout/Banner";
import SoluzioneBanner from "@/components/ProjectUI/SoluzioneBanner";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Gallery3d from "@/components/ProjectUI/Gallery3d";
import ProjectCard from "@/components/ProjectUI/ProjectCard";

const SingleProject = ({ project }) => {
  console.log(project);
  return (
    <>
      <HeroProject backgroundImage="/assets/progetti/img1.jpg">
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white xl:max-w-3xl">
          Titolo
        </h1>
        <p className="max-w-5xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white">
          Sottotitolo che descriva il progetto e la sfida da affrontare - Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. - tipo fino qua
        </p>
      </HeroProject>
      <div className="w-[90%] mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:py-0 lg:pb-20 py-20">
        <div className="lg:w-[90%] flex  flex-col h-full justify-center lg:justify-self-end gap-10">
          <h2 className="text-5xl lg:text-4xl 2xl:text-6xl font-bold">
            Analisi della problematica
          </h2>
          <p className="text-xl 2xl:text-2xl">
            Seguiamo tutta la vita della tua tenda ...- Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.- tipo fino qua
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 ">
            <div className="aspect-square bg-purple w-full flex  h-full  relative items-center ">
              <div className="-top-10 lg:-top-10 2xl:-top-20  -left-10 absolute w-full flex justify-center self-stretch">
                <p className="text-primary/70 font-regular text-[200px] xl:text-[150px] 2xl:text-[200px]">
                  1
                </p>
              </div>
              <div className="w-[90%] mx-auto">
                <Card className="mt-6 lg:w-full !bg-transparent mx-auto ">
                  <CardBody className="!flex flex-col xl:!justify-center  !p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mb-4 h-12 w-12 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                    <Typography
                      variant="h4"
                      color="white"
                      className="mb-2 font-bold lg:mb-6 md:text-3xl lg:text-4xl xl:text-xl 2xl:text-2xl"
                    >
                      Problema 1
                    </Typography>
                    <Typography
                      color="white"
                      className="font-regular md:text-2xl lg:text-base 2xl:text-2xl"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="aspect-square bg-purple w-full flex  h-full items-center relative">
              <div className="-top-10 lg:-top-10 2xl:-top-20  -left-10 absolute w-full flex justify-center self-stretch">
                <p className="text-primary/70 font-regular text-[200px] xl:text-[150px] 2xl:text-[200px]">
                  2
                </p>
              </div>
              <div className="w-[90%] mx-auto">
                <Card className="mt-6 lg:w-full !bg-transparent mx-auto ">
                  <CardBody className="!flex flex-col xl:!justify-center  !p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mb-4 h-12 w-12 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                    <Typography
                      variant="h4"
                      color="white"
                      className="mb-2 font-bold lg:mb-6 md:text-3xl lg:text-4xl xl:text-xl 2xl:text-2xl"
                    >
                      Problema 2
                    </Typography>
                    <Typography
                      color="white"
                      className="font-regular md:text-2xl lg:text-base 2xl:text-2xl"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image src="https://placehold.jp/500x500.png" alt="" fill />
        </div>
      </div>
      <div>
        <SoluzioneBanner />
      </div>
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto gap-10 py-20">
        <Gallery3d />
      </div>

      <Banner />
      <div className="w-[90%] mx-auto py-20 flex flex-col gap-10">
        <h3 className="text-3xl lg:text-5xl font-bold">Progetti correlati</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <ProjectCard
            link="/"
            img="/assets/progetti/img2.jpg"
            title="Titolo progetto"
            desctiption="Breve descrizione del progetto in questione e della problematica - max due righe poi tagliato"
          />
          <ProjectCard
            link="/"
            img="/assets/progetti/img3.jpg"
            title="Titolo progetto"
            desctiption="Breve descrizione del progetto in questione e della problematica - max due righe poi tagliato"
          />
          <ProjectCard
            link="/"
            img="/assets/progetti/img4.jpg"
            title="Titolo progetto"
            desctiption="Breve descrizione del progetto in questione e della problematica - max due righe poi tagliato"
          />
          <ProjectCard
            link="/"
            img="/assets/progetti/img5.jpg"
            title="Titolo progetto"
            desctiption="Breve descrizione del progetto in questione e della problematica - max due righe poi tagliato"
          />
        </div>
      </div>
    </>
  );
};

export default SingleProject;

// export async function getStaticProps(context) {
//   const { params } = context;

//   let targetObj = data?.singleProject?.[params?.title[1]];
//   console.log("targetObject", targetObj);
//   const arr = Object.keys(data?.singleWine);
//   const filteredOthers = arr
//     .filter(
//       (el) =>
//         el !== params.title[1] && data?.singleProject?.cat == params.title[0]
//     )
//     .map((el) => {
//       return {
//         name: data?.singleProject?.[el]?.name,
//         img: data?.singleProject?.[el]?.img,
//         link: data?.singleProject?.[el]?.link,
//       };
//     });
//   return {
//     props: {
//       project: targetObj,
//       others: filteredOthers,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const projects = Object.keys(data?.singleProject).map(
//     (el) => data?.singleProject[el]
//   );
//   const paths = projects.map((el) => {
//     return {
//       params: {
//         title: [el?.cat, el?.title],
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
