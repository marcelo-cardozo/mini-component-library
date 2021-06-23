/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const minValue = 0;
const maxValue = 100;

const ProgressBar = ({ value: auxValue, size }) => {
  const value = Math.min(Math.max(minValue, auxValue), maxValue);
  return (
    <Wrapper size={size}>
      <InnerBarWrapper>
        <Bar role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </Bar>
      </InnerBarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({size}) => {
    switch (size){
      case "large":
        return `
          height: 24px;
          padding: 4px;
          border-radius: 8px;
        `;
      case "medium":
        return `
          height: 12px;
          border-radius: 4px;
        `;
      case "small":
      default:
        return `
          height: 8px;
          border-radius: 4px;
        `;
    }
  }}
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const InnerBarWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 4px 4px 4px 4px;
`

const Bar = styled.div`
  height: 100%;
  border-radius: 4px 0 0 4px;
  background: ${COLORS.primary};
  width: ${({value}) => value}%;
`


export default ProgressBar;
