import React from "react";
import PropTypes from "prop-types";

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => (
    <div>
        <div>
            <img src={avatar} alt={username} />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
        <ul>
            <li>
                <span></span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
            </li>
            <li>
                <span></span>
                <span></span>
            </li>  
        </ul>
    </div>

);

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.number,
}
export default Profile