import React from "react";
import data from "@/utils/showroom.json";
import HeroSingleCat from "@/components/hero/HeroSingleCat";
import CardCat from "@/components/Showroom/CardCat";
import TabCat from "@/components/Showroom/TabCat";

const SingleCat = ({ category }) => {
  return (
    <div>
      <HeroSingleCat backgroundImage={category.img}>
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white ">
          {category.title}
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white"
          // dangerouslySetInnerHTML={{ __html: data.hero.paragrafo }}
        >
          Spiegazione di cosa sono - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore - fino
          qua, due righe ok
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3   gap-6 2xl:gap-8">
          {category.cards.map((el, i) => {
            return (
              <CardCat key={i} title={el.title} description={el.descrizione} />
            );
          })}
        </div>
      </HeroSingleCat>
      <div className="pt-20 w-[90%] mx-auto">
        <TabCat category={category} />
      </div>
    </div>
  );
};

export default SingleCat;

export async function getStaticProps(context) {
  const { params } = context;

  let targetObj = data?.singleCat?.[params?.title];

  return {
    props: {
      category: targetObj,
    },
  };
}

export async function getStaticPaths() {
  const cat = Object.keys(data?.singleCat);
  const paths = cat.map((el) => {
    return {
      params: {
        title: el,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
