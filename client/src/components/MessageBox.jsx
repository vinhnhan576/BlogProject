import React from "react";
import { Link, } from "react-router-dom";
const MessageBox = ({ title, body, blogName, slug,alias }) => {
	return (
    <div className="message-box">
      <div className="message-box__container">
        <div className="message-box__icon">
          <i className="bx bxs-message-alt-error"></i>
        </div>
        <div className="message-box__content">
          <div className="message-box__content__title">{title}</div>
          <div className="message-box__content__body">
            {body} "{blogName}"
          </div>
        </div>
        <div className="message-box__close">
          <Link to={`/${alias}/editBlog/${slug}`}>
            <i
              className="bx bx-check"
              onClick={() => {
                <Link to={`/${alias}/blog/${slug}`} />;
              }}
            ></i>
          </Link>
          <i
            className="bx bx-x"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
