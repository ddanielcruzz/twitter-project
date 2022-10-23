import React from "react";
import { ProfileToFollow } from "../components/ProfileToFollow";

const AsideRightCard = ({ children }) => {
  <article></article>;
};

export const AppLayout = () => {
  return (
    <section className="grid grid-cols-[1fr_1.5fr_1fr]">
      <aside></aside>
      <main></main>
      <aside>
        <ProfileToFollow
          profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
          name="Rodrigo Medina"
          username="@roeeyn"
        />
      </aside>
    </section>
  );
};
