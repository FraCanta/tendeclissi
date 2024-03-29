import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CtaPrimary from "./CtaPrimary";
const SimpleCard = ({ title, description, cta }) => {
  return (
    <Card className="md:w-[100%] lg:w-[65%] xl:w-[95%] 2xl:w-[70%]  fxl:w-[85%] flex flex-col mx-auto shadow-lg p-0 sm:p-4 md:p-10 xl:p-6 2xl:p-4 fxl:p-8 gap-2 fxl:gap-4">
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-1 font-bold text-[1.563rem] md:text-[2.188rem] lg:text-[1.563rem] xl:text-2xl fxl:text-[2rem] fxl:mb-2"
        >
          {title}
        </Typography>
        <Typography className="md:text-xl xl:text-base 2xl:text-[1.125rem]">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="py-6">
        <CtaPrimary link="/">{cta} </CtaPrimary>
      </CardFooter>
    </Card>
  );
};

export default SimpleCard;
