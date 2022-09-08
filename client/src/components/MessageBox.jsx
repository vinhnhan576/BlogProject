import React from "react";

const MessageBox = ({
	title,
	body,
	blogName,
	onCheckButtonClick,
	onCloseButtonClick,
}) => {
	const [isCheck, setIsCheck] = React.useState(false);

	function handleClick() {
		console.log("clicked");
	}

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
					<i className="bx bx-check" onClick={onCheckButtonClick}></i>
					<i className="bx bx-x" onClick={onCloseButtonClick}></i>
				</div>
			</div>
		</div>
	);
};

export default MessageBox;
