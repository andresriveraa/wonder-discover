import styled, { css } from 'styled-components'
import { orange, orange025, white } from '../colors/constants';
import { ButtonStyleI } from './button.models';

const secondaryButton = css`
  background: transparent;
  border: 1px solid ${white};
  box-shadow: none;
`

const WpButton = styled.button<ButtonStyleI>`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  min-width: 228px;
  margin: auto;
  background: linear-gradient(180deg,  ${orange025} 0%, ${orange} 100% ) ;
  box-shadow: 0px 0 40px ${orange025};
  color: ${white};

  ${({typeButton}) => typeButton === 'secondary' && secondaryButton}

  img {
    width: 18px;
    height: 18px;
    margin-right: 24px;
  }
`;

export default WpButton;