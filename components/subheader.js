//create a sub header component to maintain consistency across the app
//reuse paragraph component with font family, weight ryv
//pass in text as prop
//import Paragraph
//replace in index.js

import React from "react";
import Paragraph from "./paragraph";

const SubHeader = ({ text }) => {
  return (
    <div>
      <Paragraph fontSize={"3em"} text={text} fontWeight={"extrabold"} />
    </div>
  );
};

export default SubHeader;
