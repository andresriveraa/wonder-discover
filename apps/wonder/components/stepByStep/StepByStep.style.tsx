import { black, cream, primaryFont } from '@discover';
import styled from 'styled-components'

const WpStepByStep = styled.main`
  background-color: ${cream};
  padding: 32px 24px;

  .step_start {
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
  }

  .steps {
    &__title {
      font-family: ${primaryFont};
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 24px;
      text-align: center;
    }

    &__image-1, &__image-2 {
      display: block;
      margin: auto;
      margin-bottom: 20px;
    }

    &__image-1 {
      margin-bottom: 20px;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: ${primaryFont};
        font-weight: 700;
      }
      .header__name {
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          margin-right: 8px;
          font-size: 12px;
          font-family: ${primaryFont};
        }
      }
    }

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
