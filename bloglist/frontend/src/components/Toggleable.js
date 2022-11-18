import { forwardRef, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Toggleable = forwardRef(
  ({ children, buttonLabelShow, buttonLabelHide }, ref) => {
    const [expand, setExpand] = useState(false);
    const visibility = { display: expand ? 'block' : 'none' };

    const toggle = () => {
      setExpand(!expand);
    };

    useImperativeHandle(ref, () => ({
      toggle,
      expand,
    }));

    return (
      <div data-test="toggleable">
        <div style={visibility}>{children}</div>
        <Button
          type="button"
          onClick={toggle}
          data-test="toggleable-button"
          variant={expand ? 'secondary' : 'primary'}
        >
          {expand ? buttonLabelHide : buttonLabelShow}
        </Button>
      </div>
    );
  }
);

Toggleable.propTypes = {
  children: PropTypes.node.isRequired,
  buttonLabelShow: PropTypes.string,
  buttonLabelHide: PropTypes.string,
};

Toggleable.defaultProps = {
  buttonLabelShow: 'show',
  buttonLabelHide: 'hide',
};

Toggleable.displayName = 'Toggleable';

export default Toggleable;
