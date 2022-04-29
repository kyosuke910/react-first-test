import React from "react";

export const ColofulMessage = (props) => {
  const { color, fontSize, children } = props;
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};
