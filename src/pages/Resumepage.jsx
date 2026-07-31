import React from "react";
import Resume from "../components/Resume";
import Header from "../components/Header";

const Resumepage = () => {
  return (
    <>
      <Header />
      <div className="pt-10">
        <Resume />
      </div>
    </>
  );
};

export default Resumepage;
