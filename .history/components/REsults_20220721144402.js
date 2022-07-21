import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  return (
    <div className="px-5">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
