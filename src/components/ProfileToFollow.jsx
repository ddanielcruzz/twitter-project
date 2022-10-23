import React from "react";

export const ProfileToFollow = ({ profileAvatarURL, name, username }) => {
  return (
    <article className="flex">
      <img className="h-12 w-12 rounded-full" src={profileAvatarURL} alt="" />
      <section className="text-left">
        <p className="font-bold">{name}</p>
        <p>{username}</p>
      </section>
      <button>Follow</button>
    </article>
  );
};
