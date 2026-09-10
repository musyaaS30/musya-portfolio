import React from "react";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import CustomCursor from "../components/CustomCursor";

const Resumepage = () => {
  return (
    <div className="resume-page min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--default-color)]">
      <CustomCursor />
      <main className="main flex-grow pt-20 sm:pt-24 pb-16">
        <Resume />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Resumepage;
