import React from "react";
import Thumbnail from "./Thumbnail";

const Results = ({ requests }) => {
  return (
    <div>
      {requests.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
