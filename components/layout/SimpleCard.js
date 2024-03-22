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
    <Card className="md:w-[100%] lg:w-[65%] 2xl:w-[70%] flex flex-col mx-auto shadow-lg p-4 sm:p-4 md:p-10 2xl:p-2 gap-2">
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-1 font-bold md:text-[35px] lg:text-[22px] 2xla:text-[25px]"
        >
          {title}
        </Typography>
        <Typography className="md:text-xl">{description}</Typography>
      </CardBody>
      <CardFooter className="py-6 ">
        <CtaPrimary link="/">{cta} </CtaPrimary>
      </CardFooter>
    </Card>
  );
};

export default SimpleCard;
