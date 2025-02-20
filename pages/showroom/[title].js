import React from "react";
import data from "@/utils/showroom.json";
import HeroSingleCat from "@/components/hero/HeroSingleCat";
import CardCat from "@/components/Showroom/CardCat";
import TabCat from "@/components/Showroom/TabCat";
import Head from "next/head";
import { useRouter } from "next/router";

const SingleCat = ({ category }) => {
  const router = useRouter();
  const { asPath } = router; // Ottieni il percorso corrente
  const anchor = asPath.split("#")[1]; // Ottieni l'ancora dal percorso
  // Determina quale set di dati della Hero utilizzare in base all'ancora
  console.log(category);
  return (
    <div>
      <Head>
        <title>{category.seoTitle}</title>
        <meta name="description" content={category.seoDescription} />
        <meta
          property="og:url"
          content={`https://www.tendeclissi.it${category.link}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={category.seoTitle} />
        <meta property="og:description" content={category.seoDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content={`tendeclissi.it${category.link}`}
        />
        <meta
          property="twitter:url"
          content={`tendeclissi.it${category.link}`}
        />
        <meta name="twitter:title" content={category.seoTitle} />
        <meta name="twitter:description" content={category.seoDescription} />
      </Head>
      <HeroSingleCat backgroundImage={category.img}>
        <h1 className="text-[40px] xl:text-[60px] xl:leading-[1.2] fxl:text-[70px] font-bold text-white 3xl:text-[90px]">
          {category.heroTitle}
        </h1>
        <p
          className="max-w-7xl text-xl xl:text-2xl fxl:text-[25px] font-regular text-white 3xl:text-[30px]"
          dangerouslySetInnerHTML={{ __html: category.heroParagraph }}
        ></p>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 2xl:gap-8">
          {category.cards.map((el, i) => (
            <CardCat key={i} title={el.title} description={el.descrizione} />
          ))}
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
