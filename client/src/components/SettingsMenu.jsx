import React from "react";
import { useNavigate } from "react-router-dom";

function SettingsMenu(props) {
	function DropdownItem(props) {
		const navigate = useNavigate();
		const dropdownItemClick = (e) => {
			e.preventDefault();
			navigate(`/`);
		};

		return (
			<div className="dropdown__item settings" onClick={dropdownItemClick}>
				<span className="dropdown__item__icon-button settings">
					{props.leftIcon}
				</span>
				<p>{props.children}</p>
				<span className="dropdown__item__icon-right settings">
					{props.rightIcon}
				</span>
			</div>
		);
	}

  return (
		<div className="dropdown settings">
			{props.settings.map((settings, index) => {
				return (
					<DropdownItem
						key={index}
						slug={settings.slug}
						bloggerAlias={props.alias}>
						{settings.name}
					</DropdownItem>
				);
			})}
		</div>
	);
}

export default SettingsMenu;
