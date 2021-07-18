import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    wrapper: {
      '--borderEndSize': `1px`,
    },
    input: {
      '--fontSize': `${14/16}rem`,
      '--outlineOffset': '3px',
      '--height': `${24/16}rem`,
    },
    iconSize:`16`
  },
  large: {
    wrapper: {
      '--borderEndSize': `2px`,
    },
    input: {
      '--fontSize': `${18/16}rem`,
      '--outlineOffset': '5px',
      '--height': `${36/16}rem`,
    },
    iconSize:`24`
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const {iconSize} = sizes[size];

  return (
    <Wrapper style={{'--width': `${width}px`, ...sizes[size].wrapper}}>
      <IconWrapper style={{'--size': `${iconSize}px`}}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon id={icon} size={iconSize}/>
      </IconWrapper>
      <Input type="text" style={sizes[size].input} placeholder={placeholder}/>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  width: var(--width);
  border-block-end: var(--borderEndSize) solid ${COLORS.black};
  color: ${COLORS.gray700};
  position: relative;
  
  &:hover{
    color: ${COLORS.black}
  }
`;

const IconWrapper = styled.div`
  pointer-events: none;

  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
`

const Input = styled.input`
  outline-offset: var(--outlineOffset);
  border: 0;
  -webkit-appearance: none;
  width: 100%;
  height: var(--height);
  margin: 0;
  padding: 0;
  padding-inline-start: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
    opacity: 1;
  }
`

export default IconInput;
