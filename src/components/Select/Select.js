import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <PresentationalSelect>
        <span>{displayedValue}</span>
        <SelectIcon id="chevron-down" />
      </PresentationalSelect>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};


  &:hover {
    color: ${COLORS.black};
  }
  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const SelectIcon = styled(Icon)``;


const NativeSelect = styled.select`
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const PresentationalSelect = styled.div`
  background: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  & > span {
    font-family: Roboto,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 18px;
  }
  
  & > ${SelectIcon} {
    position: absolute;
    margin: auto;
    right: 8px;
    top: 0;
    bottom: 0;
    
    // a fixed size is necessary to center item
    width: 24px;
    height: 24px;
  }
`

export default Select;
