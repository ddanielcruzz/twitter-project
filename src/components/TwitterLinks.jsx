import React from "react";
import { TwitterLink } from "./TwitterLink";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ExploreIcon } from "../assets/explore.svg";
import { ReactComponent as NotificationsIcon } from "../assets/notifications.svg";
import { ReactComponent as MessagesIcon } from "../assets/messages.svg";
import { ReactComponent as BookmarksIcon } from "../assets/bookmarks.svg";
import { ReactComponent as ListsIcon } from "../assets/lists.svg";

const links = [
  {
    icon: HomeIcon,
    title: "Home",
  },
  {
    icon: ExploreIcon,
    title: "Explore",
  },
  {
    icon: NotificationsIcon,
    title: "Notifications",
  },
  {
    icon: MessagesIcon,
    title: "Messages",
  },
  {
    icon: BookmarksIcon,
    title: "Bookmarks",
  },
  {
    icon: ListsIcon,
    title: "Lists",
  },
];

export const TwitterLinks = () => {
  return (
    <ul className="flex flex-col space-y-4">
      {/* <TwitterLink
	icon={<HomeIcon className="h-5 w-5 fill-white" />}
	title="Home"
  />
  <TwitterLink
	icon={<ExploreIcon className="h-6 w-6 fill-white" />}
	title="Explore"
  /> */}
      {links.map((link) => (
        <li key={link.title}>
          <TwitterLink Icon={link.icon} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
