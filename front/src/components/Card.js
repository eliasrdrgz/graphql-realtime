import React from "react";
import "./Card.scss";
import Heart from "./Heart";

export default props => (
  <div className="card">
    <header>{props.author.name}</header>
    <img src={props.image} alt="" />
    <footer>
      <Heart active={props.liked} onClick={props.onToggleLike} />
      <div className="likes">{props.likes} likes</div>
      <div className="comments">
        {props.comments.map((comment, i) => (
          <p key={i}>
            <strong>{comment.author}</strong> {comment.text}
          </p>
        ))}
      </div>
    </footer>
  </div>
);
