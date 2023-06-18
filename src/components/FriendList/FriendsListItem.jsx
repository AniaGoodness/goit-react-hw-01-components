import React from "react";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        {isOnline ? (<span className={css.isOnline}>{isOnline}</span>)
        :(<span className={css.status}>{isOnline}</span>)}
        
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem