import React from 'react';
import PropTypes from 'prop-types';
import classnmaes from 'classnames';
import TextFieldGroup from "./TextFieldGroup";

const InputGroup = ({
                              name,
                              placeholder,
                              value,
                              error,
                              icon,
                              type,
                              onChange
                            }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnmaes('form-control form-control-lg', {
          'is-invalid': error
        })}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
