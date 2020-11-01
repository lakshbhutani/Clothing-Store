import React from "react";

import { withRouter } from 'react-router-dom'

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, ...props }) => {
  // console.log(props)
  return (
    <div  onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)} className={`${size} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtittle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
