import React from "react";

const ModalPromo = (props) => {
  return (
    <div className="fixed flex justify-center items-center w-full h-full top-0 left-0 bg-black bg-opacity-25 z-50">
      <form>
        <div className="w-screen max-w-md flex flex-col bg-white rounded-xl gap-4 p-8 min-w-fit box max-sm:w-[100%]">
          <h2 className="font-semibold text-primaryColor text-2xl">Promotion</h2>
          <label className="p-0 m-0 flex flex-col">
            Promotion Code
            <input className="rounded p-2 border w-full" type="input"></input>
          </label>
          <label className="p-0 m-0 flex flex-col">
            Start Date
            <input className="rounded p-2 border" type="date"></input>
          </label>
          <label className="p-0 m-0 flex flex-col">
            End Date
            <input className="rounded p-2 border" type="date"></input>
          </label>
          <label className="p-0 m-0 flex flex-col">
            Discount
            <input className="rounded p-2 border" type="number"></input>
          </label>
          <label className="p-0 m-0 flex flex-col">
            Quota
            <input className="rounded p-2 border" type="number"></input>
          </label>
          <div className='flex w-full justify-end gap-x-3'>
          <button className="bg-transparent hover:bg-primaryColor text-primaryColor font-normal hover:text-white py-1 px-4 border border-primaryColor hover:border-transparent rounded">
              Add
            </button>
            <button className="bg-primaryColor hover:bg-primaryColor text-white font-normal py-1 px-4 rounded" onClick={props.onClickCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalPromo;
