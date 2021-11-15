import React from "react";

const Content = (props) => {
  return (
    <section style={{backgroundColor: "aqua"}}>
      <h1>Content web</h1>
      {props.children}
    </section>
  );
};

export default Content;