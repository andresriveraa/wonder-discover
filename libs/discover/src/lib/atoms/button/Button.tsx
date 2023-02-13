import { ButtonI } from './button.models';
import WpButton from './Button.style';

export const Button = ({text, Icon, className}: ButtonI) => {
  return (
    <WpButton className={` ${className} Button`}>
      {Icon && <Icon />}
      <p>{text}</p>
    </WpButton>
  );
}

export default Button;
