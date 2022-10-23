import React from "react";

export const TwitterLink = ({ Icon, title }) => {
  return (
    <button className="flex space-x-2">
      <Icon className="h-6 w-6 fill-white" />
      <span>{title}</span>
    </button>
  );
};
