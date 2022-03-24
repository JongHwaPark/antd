import React, { useState, useRef } from 'react';
import ReactDom from "react-dom"

import PropTypes from 'prop-types'
import JoyStick from 'react-joystick';
import classNames from 'classnames/bind';
import styles from './robotPositionJoyStick.scss';

const cx = classNames.bind(styles);

const PortalToBody = ({ children }) => {
  const container = useRef(document.body)
  return ReactDom.createPortal(children, container.current)
}


const JoyWrapper = ({
  className,
  onRobotMoveStart,
  onRobotMoveEnd
}) => {
  const [active, setActive] = useState(false);

  const managerListener = (manager) => {
    console.log(manager);
    manager.on('move', (e, stick) => {
      setActive(true);
      onRobotMoveStart(stick);
    })
    manager.on('end', () => {
      setActive(false);
      onRobotMoveEnd();
    })
  }

  const joyOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    catchDistance: 150,
    restOpacity: 1,
    restJoystick: true,
    dynamicPage: false,
  }

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
  }

  return (
    <div className={cx('robot-position-control-wrap', className, {
      'active': active,
    })}>
      <JoyStick options={joyOptions} containerStyle={containerStyle} managerListener={managerListener} />
    </div>
  )
}

JoyWrapper.propTypes = {
  className: PropTypes.string,
  onRobotMoveStart: PropTypes.func,
  onRobotMoveEnd: PropTypes.func,
}

JoyWrapper.defaultProps = {
  onRobotMoveStart: () => { },
  onRobotMoveEnd: () => { },
}
export default React.memo(JoyWrapper);
