import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const BackButton = (props) => {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex', alignItems:'center', fontSize:'1.5em', fontWeight:'700', margin:'1em 0'}}>
        <MdArrowBackIosNew style={{marginRight:'1em', cursor:'pointer'}} onClick={()=>navigate(-1)}/>
      {props.children}
    </div>
  );
};
