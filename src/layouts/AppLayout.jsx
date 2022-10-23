import React from "react";
import { AsideRightCard, ProfileToFollow } from "../components";

export const AppLayout = () => {
  return (
    <section className="grid grid-cols-[1fr_1.5fr_1fr]">
      <aside></aside>
      <main></main>
      <aside className="w-[350px]">
        <AsideRightCard title="What's Happening"></AsideRightCard>
        <AsideRightCard title="Who to follow">
          <ProfileToFollow
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username="@roeeyn"
          />
          <ProfileToFollow
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username="@roeeyn"
          />
          <ProfileToFollow
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username="@roeeyn"
          />
        </AsideRightCard>
      </aside>
    </section>
  );
};
