import React from "react";
import Services from "./Services";
import Top from "./Top";
import Filteroptions from "./Filteroptions";
export default function dashboard({ name }) {
  return (
    <div>
      <Top name={name} />
      <Services />
      <Filteroptions />
    </div>
  );
}
