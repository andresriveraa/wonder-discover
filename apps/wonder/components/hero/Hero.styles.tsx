import { primaryFont, white } from '@discover';
import styled from 'styled-components';


const WpHero = styled.header`
    background-color: black;
  position: relative;
  z-index: -1;

  .Hero {
    &__background-image {
      position: absolute;
      width: 100vw;
      height: 100vh;
      margin: 0;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__black-gradient {
      position: absolute;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg,  black 30%, transparent 100%);
    }

    &__logo {
      display: flex;
      padding-top: 164px;
      margin-bottom: 150px;
      justify-content: center;
    }

    &__title {
      color: ${white};
      text-align: center;
      font-size: 40px;
      line-height: 38px;
      margin-bottom: 16px;
      padding: 28px;
    }

    &__separator {
      color: ${white};
      border-bottom: 1px solid white;
      width: 185px;
      margin-bottom: 24px;
    }

    &__description {
      color: ${white};
      font-size: 14px;
      text-align: center;
      margin-bottom: 24px;
      font-family: "proxima-nova", sans-serif;
      font-weight: 400;
    }

    &__info-time {
      margin-bottom: 24px;
    }

    &__place {
      display: flex;
      color: ${white};
      align-items: center;
      justify-content: center;
      font-family: ${primaryFont};
      margin-bottom: 30px;

      img {
        margin-right: 12px;
      }
    }

    &__will-have {
      color: ${white};
      font-size: 10px;
      display: grid;
      grid-template-columns: 110px  130px;
      grid-template-rows: 1fr  1fr;
      gap: 8px;
      margin: auto;
      width: fit-content;
      margin-bottom: 30px;
      
      .will-have__item {
        display: flex;
        align-items: center;

        i {
          margin-right: 8px;
        }
      }
    }

    &__whatsapp {
      color: white;
      text-align: center;
    }

    &__whatsapp-cta {
      margin-bottom: 34px;
    }

    &__arrow-down {
      margin: auto;
      display: block;
    }
  }
`

export default WpHero;
