import React from "react";
import "./Container.css";
import { BsFillSendCheckFill } from "react-icons/bs";
import { BsSendArrowDownFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
export default function Services() {
  return (
    <div className="flex justify-center mt-10 ">
      <div className=" mr-7 p-8 bg-white rounded-full w-3/12 h-28 border-2 border-green-500 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span style={{ fontSize: "19px" }}>Todays Withdrawal </span>
          <div className="flex items-center">
            <BsSendArrowDownFill style={{ fontSize: "28px" }} />
          </div>
        </div>

        <div className="relative border-2 border-green-500 rounded-full w-7 h-7 flex items-center justify-content-center">
          <span className="text-xl mx-auto">4</span>
        </div>
      </div>

      <div className=" mr-7 p-8 bg-white rounded-full w-3/12 h-28 border-2 border-green-500 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span style={{ fontSize: "19px" }}>Total Withdrawal </span>
          <div className="flex items-center">
            <BsSendFill style={{ fontSize: "28px" }} />
          </div>
        </div>

        <div className=" text-xl relative border-2 border-green-500 rounded-full w-7 h-7 flex items-center justify-content-center">
          <span className="mx-auto">4</span>
        </div>
      </div>

      <div className=" mr-7 p-8 bg-white rounded-full w-3/12 h-28 border-2 border-green-500 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span style={{ fontSize: "19px" }}>Total Disbussed</span>
          <div className="flex items-center">
            <BsFillSendCheckFill style={{ fontSize: "28px" }} />
          </div>
        </div>

        <div className=" text-xl relative border-2 border-green-500 rounded-full w-7 h-7 flex items-center justify-content-center">
          <span className="mx-auto">4</span>
        </div>
      </div>
    </div>
  );
}
