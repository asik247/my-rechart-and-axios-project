import React, { use } from "react";
import Priching from "./Priching";

const PrichingCard = ({ prichingData }) => {
  const prichingAll = use(prichingData);
  return (
    <div>
     
     <div className="md:grid grid-cols-3 gap-5 mb-10">
        {
            prichingAll.map(element=> <Priching key={element.id} element={element}></Priching> )
        }
     </div>
    </div>
  );
};

export default PrichingCard;
