import { Icon } from "@iconify/react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function CardHero({ title, descrizione, icon }) {
  return (
    <Card className="mt-6 lg:w-full !bg-transparent mx-auto ">
      <CardBody className="!flex flex-col xl:!justify-center xl:!items-center xl:!text-center !p-0">
        <Icon
          icon={icon}
          className="w-8 h-8 mb-4 text-white 2xl:w-12 2xl:h-12 3xl:w-16 3xl:h-16"
        />

        <Typography
          variant="h2"
          color="white"
          className="mb-2 text-2xl font-bold lg:mb-2 md:text-3xl lg:text-4xl xl:text-lg 2xl:text-2xl 3xl:text-3xl"
        >
          {title}
        </Typography>
        <Typography
          color="white"
          className="text-base font-regular md:text-2xl lg:text-3xl xl:text-sm 2xl:text-lg 3xl:text-2xl"
        >
          {descrizione}
        </Typography>
      </CardBody>
    </Card>
  );
}
