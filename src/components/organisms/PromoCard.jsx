import React from "react";
import { useState } from "react";
const PromoCard = (props) => {
  const [promo, setPromo] = useState(null);
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-lg h-fit">
      <p className="flex justify-between my-2 text-primaryColor font-semibold">
        Promotion Code
        {promo !== null ? (
          <span className="text-red-700 font-normal cursor-pointer">Remove</span>
        ) : (
          <button
            className="bg-primaryColor hover:bg-primaryColor text-white font-normal py-1 px-4 rounded ml-3"
            onClick={props.onClickAddPromo}
          >
            Add
          </button>
        )}
      </p>
      {promo !== null ? (
        <>
          <p className="text-black my-2 font-semibold">Presale Disc 20%</p>
          <p className="flex justify-between">
            1 Sept 2023 - 3 Sept 2023
            <span>Quota: 40/50</span>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default PromoCard;
