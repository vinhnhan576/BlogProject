import React from "react";
import PropTypes from "prop-types";

const Banner = (props) => {
	return (
		<div className="banner">
			<div className={`banner__image ${props.quote ? "overlay" : ""} `}>
				<img
					src={props.img}
					alt=""
					style={{ height: `${Number(props.height)}px` }}
				/>
				<div className="banner__quote">"{props.quote}"</div>
			</div>
		</div>
	);
};

Banner.propTypes = {
	img: PropTypes.string.isRequired,
	height: PropTypes.string,
	quote: PropTypes.string,
};

export default Banner;
