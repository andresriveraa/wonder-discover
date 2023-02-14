import { black, black800, cream, orange, primaryFont, white } from '@discover';
import styled from 'styled-components';

const WpFooter = styled.footer`
  background-color: ${cream};

  hr {
    margin: 0 auto;
    margin-bottom: 40px;
    border: 1px solid transparent;
    border-top: 1px solid gray;
    max-width: 80%;
  }

  .footer {
    &__logo {
      display: flex;
      align-items: center;

      img {
        border-right: 1px solid ${orange};
        margin-right: 24px;
      }
    }

    &__title-list {
      padding: 0 24px;

    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-bottom: 40px;
      padding: 0 24px;

      li p, li a {
        text-decoration: underline;
      }

    }

    &__subtitle {
      text-align: center;
      text-decoration: underline;
      font-size: ${primaryFont};
      font-size: 18px;
      font-weight: 300;
      color: ${black800};
    }

    &__acotur {
      margin: auto;
      display: block;
      margin-bottom: 68px;
    }

    &__copyright {
      background-color: ${black};
      color: ${white};
      text-align: center;
      font-weight: 300;
      font-family: ${primaryFont};
      width: 100vw;
    }
  }

`;

export default WpFooter;
