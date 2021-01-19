import React from "react";
import Certificate from "./Certificate";
import Form from "./Form";

const Page = () => {
  return (
    <div className="container">
      <div className="main-info">
        <Certificate />
        <Form />
      </div>
    </div>
  );
};

export default Page;
