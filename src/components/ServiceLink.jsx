import PropTypes from "prop-types";
ServiceLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

function ServiceLink({ name, url }) {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
}

export default ServiceLink;
