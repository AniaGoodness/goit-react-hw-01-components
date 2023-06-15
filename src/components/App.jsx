import { Fragment } from "react";
import Profile from '../components/Profile/Profile';
import user from '../data/user.json';
import Statistics from "../components/Statistics/Statistics";
import data from "../data/data.json";
import { FriendListItem } from "./FriendList/FriendList";
import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";


export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </FriendList>
    </Fragment>
  );
};
