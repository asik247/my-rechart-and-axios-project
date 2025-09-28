import React from "react";


const Priching = ({ element }) => {
  //  const [planName,price,buttonText] = element;
  return (
    <div>
       
      <div className="card my-10  bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{element.planName}</h2>
            <span className="text-xl">{element.price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs ">
          
             {
                element.features.map((el,index)=>{
                    return <li key={index}>{`✔${el}`} </li>;
                })
            }
      
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">
              {element.buttonText}
            </button>
          </div>
        </div>
      </div>
 

    </div>
  );
};

export default Priching;
