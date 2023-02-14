import { ButtonI } from './button.models';
import WpButton from './Button.style';

export const Button = ({text, Icon, type,  className}: ButtonI) => {
  return (
    <WpButton className={` ${className} Button`} typeButton={type}>
      {Icon && <Icon />}
      <p>{text}</p>
    </WpButton>
  );
}

export default Button;
