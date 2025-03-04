import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ img, title, description, link }) => {
  console.log(link);
  return (
    <Link href={`${link}`}>
      <div className="w-full p-4 shadow-lg">
        <div
          color="blue-gray"
          className="relative w-full aspect-square 2xl:h-96"
        >
          <Image src={img} alt="" fill className="!object-cover !h-full" />
        </div>
        <div className="!p-0 !pt-3 ">
          <h5 className="font-bold text-black">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
