import Image from "next/image";
import React from "react";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt="content image"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
