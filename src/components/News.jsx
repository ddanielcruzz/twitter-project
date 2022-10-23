import React from "react";

export const News = ({ category, title, tweets, imageURL }) => {
  return (
    <article className="flex p-4 justify-between">
      <section>
        <p className="opacity-60">{category}</p>
        <p className="font-bold text-lg">{title}</p>
        <p className="opacity-60">{tweets} Tweets</p>
      </section>
      <img className="h-16 w-16 rounded-lg" src={imageURL} alt="" />
    </article>
  );
};
