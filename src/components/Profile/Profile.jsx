/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import css from "../Profile/Profile.module.css";

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt={username} className={css.avatar}/>
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}></span>
                    <span className={css.quantity}></span>
                </li>
                <li>
                    <span className={css.label}></span>
                    <span className={css.quantity}></span>
                </li>
                <li>
                    <span className={css.label}></span>
                    <span className={css.quantity}></span>
                </li>
            </ul>
        </div>

    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}
export default Profile