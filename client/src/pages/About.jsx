import React from "react";
import Helmet from "../components/Helmet";
import Icon from "../assets/image/about/Logo.png";
import Hello2 from "../assets/image/about/lower-pic.png";
import Hello from "../assets/image/about/upper-pic.png";
import Sign from "../assets/image/about/sloganblog.png";

function About() {
	return (
		<Helmet title="Tớ là?">
			<div className="bigwhole">
				<div className="bigwhole__whole">
					<div className="bigwhole__whole__whole1">
						<img src={Hello} alt="" />
						<div className="bigwhole__whole__whole1__outline bigwhole__whole__outline"></div>
					</div>
					<div className="bigwhole__whole__whole2">
						<div className="bigwhole__whole__whole2__greeting">
							Hi guys, im huong les kakaka
							<br /> Ăn cứt không Nhân ơi
							<br /> Ăn cứt không Nhân ơi
							<br /> Ăn cứt không Nhân ơi
							<br /> Ăn cứt không Nhân ơi
							<br /> Ăn cứt không Nhân ơi
							<br /> Ăn cứt không Nhân ơi
						</div>
						<div className="bigwhole__whole__whole2__outline bigwhole__whole__outline"></div>
					</div>
				</div>
				<div className="bigwhole__icon">
					<img src={Icon} alt="" />
				</div>
				<div className="bigwhole__pic">
					<img src={Hello2} alt="" />
				</div>
				<div className="bigwhole__intro">*Chém gió các thứ:</div>
				<div className="bigwhole__concept">
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
					<br /> Xin chào mọi người, mình tên là abcxyz.
				</div>
				<div className="bigwhole__sign">
					<img src={Sign} alt="" />
				</div>
			</div>
		</Helmet>
	);
}

export default About;
