import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import PropTypes from "prop-types";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

function Dropdown({
  title,
  handleOnClick,
  name,
  items,
  // isItemSelection,
  ...props
}) {
  const [open, setOpen] = useState(false);
  Dropdown.handleClickOutside = () => setOpen(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className="dd-header_title">
          <p className="dd-header_tittle--bold">{name ? name : title}</p>
        </div>
        <div className="dd-header_action">
          <p>{open ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items &&
            Object.values(items).map((item) => (
              <li className="dd-list-item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <img
                    src={item.avatarURL}
                    alt="....avatar"
                    className="login_avatar"
                  />
                  <span>{item.name}</span>
                  {/* <span>{isItemSelection(item)}</span> */}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const onClickOusideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, onClickOusideConfig);
