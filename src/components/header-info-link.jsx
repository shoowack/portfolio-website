import { useState } from "react";
import { Tooltip } from "reactstrap";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function HeaderInfoLink({
  id,
  link,
  tooltipText,
  icon,
  newTab,
  size = "lg",
  tooltipPlacement = "top",
  color
}) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  library.add(fab, fas);

  return (
    <>
      <a href={link} target={newTab && "_blank"} id={id}>
        <FontAwesomeIcon icon={icon} size={size} color={color} />
      </a>
      {tooltipText && (
        <Tooltip
          placement={tooltipPlacement}
          isOpen={tooltipOpen}
          target={id}
          toggle={toggle}
          dangerouslySetInnerHTML={{ __html: tooltipText }}
        />
      )}
    </>
  );
}

HeaderInfoLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.string.isRequired,
  tooltipText: PropTypes.string,
  icon: PropTypes.array.isRequired,
  newTab: PropTypes.bool,
  size: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  color: PropTypes.string
};
