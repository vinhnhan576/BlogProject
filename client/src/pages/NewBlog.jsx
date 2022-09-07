import React from "react";

import Helmet from "../components/Helmet";

const NewBlog = () => {
	return (
		<Helmet title="Tạo blog mới">
			<div className="new-blog">
				<form className="new-blog__form">
					<input type="text" className="new-blog__form__topic" />
					<input type="text" className="new-blog__form__title" />
					<input type="text" className="new-blog__form__body" />
					<input type="text" className="new-blog__form__signature" />
					<button className="new-blog__form__create-button" type="submit"></button>
				</form>
			</div>
		</Helmet>
	);
};

export default NewBlog;
