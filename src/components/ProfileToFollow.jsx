import React from "react";

export const ProfileToFollow = ({ profileAvatarURL, name, username }) => {
  return (
    <article className="flex text-sm ">
      <img className="h-12 w-12 rounded-full" src={profileAvatarURL} alt="" />
      <section className="text-left">
        <p className="font-bold">{name}</p>
        <p className="opacity-60">{username}</p>
      </section>
      <button className="bg-white text-black font-semibold rounded-full px-4 py-1.5">
        Follow
      </button>
    </article>
  );
};
