import React from 'react';
import './NotchedBox.css';

interface NotchedBoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderColor?: string;
  fillColor?: string;
  borderWidth?: string;
  notchWidth?: string;
  notchHeight?: string;
}

const NotchedBox: React.FC<NotchedBoxProps> = ({ 
  children, 
  className = '', 
  style = {},
  borderColor,
  fillColor,
  borderWidth,
  notchWidth,
  notchHeight
}) => {
  const customStyles = {
    ...style,
    ...(borderColor && { '--border-color': borderColor }),
    ...(fillColor && { '--fill-color': fillColor }),
    ...(borderWidth && { '--border-width': borderWidth }),
    ...(notchWidth && { '--notch-width': notchWidth }),
    ...(notchHeight && { '--notch-height': notchHeight }),
  } as React.CSSProperties;

  return (
    <div 
      className={`notched-box ${className}`} 
      style={customStyles}
    >
      {children}
    </div>
  );
};

export default NotchedBox;