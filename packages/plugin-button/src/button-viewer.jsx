import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mergeStyles, validate } from 'wix-rich-content-common';
import isEqual from 'lodash/isEqual';
import schema from '../statics/data-schema.json';
import styles from '../statics/styles/button-viewer.scss';

class ButtonViewer extends Component {
  constructor(props) {
    super(props);
    validate(props.componentData, schema);
    this.styles = mergeStyles({ styles, theme: props.theme });
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.componentData, this.props.componentData)) {
      validate(nextProps.componentData, schema);
    }
  }

  render() {
    const { componentData, theme } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div className={classNames(this.styles.button)}>
        <a className={theme.button_primary} href={componentData.url}>
          {!componentData.buttonName ?
            'Click Me!' : componentData.buttonName
          }
        </a>
      </div>
    );
  }
}

ButtonViewer.propTypes = {
  componentData: PropTypes.object.isRequired,
  theme: PropTypes.object,
  onReady: PropTypes.func,
  onStart: PropTypes.func,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

ButtonViewer.defaultProps = {
  width: '100%',
  height: '100%',
  controls: true,
};

export default ButtonViewer;
