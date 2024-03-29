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
const PurpleCard = ({ title, description, cta, link }) => {
  return (
    <Card className="md:w-[100%]  xl:w-[95%] 2xl:w-[70%]  fxl:w-[85%] text-white flex flex-col justify-center items-center text-center mx-auto bg-purple p-4 md:p-10 xl:p-2 2xl:p-[1rem] fxl:p-8 gap-2 fxl:gap-4">
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-1 font-bold text-[1.563rem] md:text-[2.188rem] xl:text-[1.563rem] xl:text-2xl fxl:text-[2rem] fxl:mb-2"
        >
          {title}
        </Typography>
        <Typography className="md:text-xl xl:text-base 2xl:text-[1.125rem]">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="py-4">
        {cta === "vai allo showroom" ? (
          <CtaOutline link={link}>{cta}</CtaOutline>
        ) : (
          <CtaSecondary link={link}>{cta}</CtaSecondary>
        )}
      </CardFooter>
    </Card>
  );
};

export default PurpleCard;
