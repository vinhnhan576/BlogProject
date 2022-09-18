import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/account/accountSlice";

function SettingsMenu(props) {
	function DropdownItem(props) {
		const navigate = useNavigate();
		const dispatch = useDispatch();

		const dropdownItemClick = (e) => {
			e.preventDefault();
			dispatch(logout());
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
