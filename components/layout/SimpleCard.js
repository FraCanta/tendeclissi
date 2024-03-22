import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CtaPrimary from "./CtaPrimary";
const SimpleCard = () => {
  return (
    <Card className="lg:w-[65%] flex flex-col gap-2 shadow-lg p-3 sm:p-6 ">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Cappottine
        </Typography>
        <Typography>Descrizione brevissima max due righe non di più</Typography>
      </CardBody>
      <CardFooter className="pt-4">
        <CtaPrimary link="/"> scorpi le cappottine </CtaPrimary>
      </CardFooter>
    </Card>
  );
};

export default SimpleCard;
