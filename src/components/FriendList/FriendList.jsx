import React from "react";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";


export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className="item">
        <span className={css.status}></span>
        <img className="avatar" src="" alt="User avatar" width="48" />
        <p className="name"></p>
    </li>
);
    


const FriendList = ({ children }) => (
    <ul className="friend-list">
        {children}
    </ul>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,



}

export default FriendList
