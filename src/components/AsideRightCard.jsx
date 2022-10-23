import React from "react";

export const AsideRightCard = ({ title, children }) => {
  return (
    <article className="bg-twitter-gray rounded-lg">
      <p className="text-lg font-bold p-4">{title}</p>
      {children}
    </article>
  );
};
