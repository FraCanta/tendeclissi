import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CtaOutline from "./CtaOutline";
import CtaSecondary from "./CtaSecondary";
import Link from "next/link";
import { Icon } from "@iconify/react";
const PurpleCard = ({ title, description, cta, link, icon }) => {
  return (
    <Card className="md:w-[100%]  xl:w-[95%] 2xl:w-[70%]  fxl:w-[85%] text-white flex flex-col justify-center items-center text-center mx-auto bg-purple p-2 sm:p-4 md:p-10 xl:p-2 2xl:p-[1rem] fxl:p-8 gap-2 fxl:gap-4 3xl:gap-6">
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-1 3xl:mb-2 font-bold text-[1.563rem] md:text-[2.188rem] xl:text-[1.563rem] xl:text-2xl fxl:text-[2rem] 3xl:text-[40px] fxl:mb-2"
        >
          {title}
        </Typography>
        <Typography className="md:text-xl xl:text-base 2xl:text-[1.125rem] text-white 3xl:text-2xl">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="!p-2 !pb-6">
        {cta === "vai allo showroom" ? (
          <CtaOutline link={link}>{cta}</CtaOutline>
        ) : (
          <Link
            href={link}
            icon={icon}
            target="_blank"
            className="bg-white flex items-center gap-4  lg:px-[33px] text-primary  py-[15px] px-[20px] xl:px-[33px] 3xl:px-[38px] 3xl:py-[25px]  uppercase text-base md:text-lg xl:text-lg 2xl:text-xl fxl:text-[25px] 3xl:text-[30px] max-w-max"
          >
            {cta}{" "}
            <Icon
              icon={icon}
              className="w-6 h-6 3xl:w-10 3xl:h-10 text-primary"
            />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default PurpleCard;
