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
    <Card className="md:w-[100%] lg:w-[65%] 2xl:w-[70%]  fxl:w-[85%] flex flex-col mx-auto shadow-lg p-4 sm:p-4 md:p-10 2xl:p-4 fxl:p-8 gap-2 fxl:gap-4">
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-1 font-bold md:text-[35px] lg:text-[22px] 2xla:text-[25px] fxl:text-[32px] fxl:mb-2"
        >
          {title}
        </Typography>
        <Typography className="md:text-xl 2xl:text-[18px]">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="py-6 ">
        <CtaPrimary link="/">{cta} </CtaPrimary>
      </CardFooter>
    </Card>
  );
};

export default SimpleCard;
