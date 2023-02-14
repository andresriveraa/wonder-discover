import styled, { css } from 'styled-components';
import { StepStyleI } from './Step.models';
import { orange, orange900, primaryFont } from '@discover';

const cardStyle = css`
  box-shadow: 3px 4px 14px grey;
  margin-bottom: 8px;
  border-radius: 10px;
  
`;

const textStyle = css`
  font-size: 14px;
  font-family: ${primaryFont};
  line-height: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const dayTextStyle = css`
  flex-direction: column;
  justify-content: center;
  color: ${orange900};
  display: flex;
  text-align: end;

  hr {
    border-bottom: 1px solid ${orange};
    width: 100%;
  }
`;

const WpStep = styled.div<StepStyleI>`
  max-width: 336px;
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  margin: auto;
  gap: 16px;
  padding: ${({ subtitle }) => (subtitle ? '16px' : '0 16px')};

  ${({ type }) => type === 'card' && cardStyle}
  border: ${({highlightColor}) => highlightColor && `2px solid ${highlightColor}`};
  .step {
    &__title {
      font-size: 18px;
      font-family: ${primaryFont};
      display: flex;
      flex-direction: ${({ subtitle }) => subtitle && 'column'};
      align-items: ${({ subtitle }) => !subtitle && 'center'};
      justify-content: ${({ subtitle }) => subtitle && 'center'};
      h3 {

        margin: 0;
        margin-bottom: ${({ subtitle }) => (subtitle ? '16px' : '0')};
        line-height: 16px;
        font-size: 16px;
      }

      p {
        font-size: 14px;
        font-family: ${primaryFont};
      }
    }

    &__icon {
      display: flex;
    align-items: center;
    }

    &__text {
      ${({ type }) => type === 'day' && dayTextStyle}
      ${({ type }) => type !== 'day' && textStyle}
    }

    &__text-end {
      text-align: center;
    }
  }
`;

export default WpStep;
