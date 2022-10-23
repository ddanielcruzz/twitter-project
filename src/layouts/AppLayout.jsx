import React from "react";
import {
  AsideRightCard,
  ProfileToFollow,
  News,
  TwitterLinks,
} from "../components";

// const TwitterLink = ({ Icon, title }) => {
//   return (
//     <button className="flex space-x-2">
//       {/* callback() */}
//       <Icon className="fill-white h-6 w-6" />
//       <span>{title}</span>
//     </button>
//   );
// };

export const AppLayout = () => {
  return (
    <section className="grid grid-cols-[1fr_1.5fr_1fr] pt-10">
      <aside className="w-[250px] justify-self-end">
        <TwitterLinks />
      </aside>
      <main></main>
      <aside className="w-[350px] flex flex-col space-y-5">
        <AsideRightCard title="What's Happening">
          <News
            category="Trending in Mexico"
            title="AIFA"
            tweets="2.5k"
            imageURL="https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=360x360"
          />
          <News
            category="Trending in Mexico"
            title="AIFA"
            tweets="2.5k"
            imageURL="https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=360x360"
          />
          <News
            category="Trending in Mexico"
            title="AIFA"
            tweets="2.5k"
            imageURL="https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=360x360"
          />
        </AsideRightCard>
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
