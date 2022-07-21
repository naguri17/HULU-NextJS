import Image from "next/image";
import React from "react";

const Thumbnail = ({result}) => {
  return (
    console.log(result)
    <div>
      <h1>
        <Image layout="responsive"
        height={1080}
        width={1920}/>
      </h1>
    </div>
  );
};

export default Thumbnail;
