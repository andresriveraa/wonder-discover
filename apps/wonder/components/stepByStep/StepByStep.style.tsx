import { black, cream, primaryFont } from '@discover';
import styled from 'styled-components'

const WpStepByStep = styled.main`
  background-color: ${cream};

  .step_start {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
  }

  .steps {
    &__text-end {
      text-align: center;
      margin: auto;
      font-family: ${primaryFont};
      color: ${black};
      max-width: 188px;
      line-height: 16px;
    }

    &__list {
      div:first-child > .step__icon svg line{
        stroke: none;
        /* display: none; */
      }
    }

  }
`;

export default WpStepByStep;
