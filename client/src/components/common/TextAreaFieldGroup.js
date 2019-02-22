import React from 'react';
import PropTypes from 'prop-types';
import classnmaes from 'classnames';

const TextAreaFieldGroup = ({
                          name,
                          placeholder,
                          value,
                          error,
                          info,
                          onChange
                        }) => {
  return (
    <div className="form-group">
      <textarea
        className={classnmaes('form-control form-control-lg', {
          'is-invalid': error
        })}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
