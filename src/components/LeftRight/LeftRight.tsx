import React from "react";
import './LeftRight.scss'

type leftRightProps = {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const LeftRight: React.FC<leftRightProps> = ({left, right}) => (
  <div className='left-right'>
    <div className='left-right__area'>{left}</div>
    <div className='left-right__area'>{right}</div>
  </div>
)
