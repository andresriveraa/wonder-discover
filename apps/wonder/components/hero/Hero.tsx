import { Button } from '@discover';
import Image from 'next/image';
import WpHero from './Hero.styles';

import { Abril_Fatface } from '@next/font/google';

const Abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export const Index = () => {
  return (
    <WpHero id="Hero" className="Hero">
      <figure className="Hero__background-image">
        <Image
          src="/assets/images/hero/cerros-de-mavecure.jpg"
          alt="Foto de cerros de mavecure, dos montañas rocosas que las atraviesa un rio"
          width={240}
          height={67}
        />
        <div className="Hero__black-gradient"></div>
      </figure>
      <figure className="Hero__logo">
        <Image
          src="/assets/images/global/wonder-logo.svg"
          alt=""
          width={240}
          height={67}
        />
      </figure>
      <h1 className={` ${Abril.className} Hero__title`}>
        Guainía y Cerros de Mavicure
      </h1>
      <hr className="Hero__separator" />
      <p className="Hero__description">
        Viaje por los Cerros de Mavicure <br /> y sus alrededores.
      </p>
      <Button
        text="4 días, 3 noches"
        className="Hero__info-time"
        Icon={() => (
          <Image
            src="/assets/images/global/fly-icon.svg"
            alt=""
            width={240}
            height={67}
          />
        )}
      />

      <div className="Hero__place">
        <Image
          src="/assets/images/hero/colombia-map.svg"
          alt=""
          role="none"
          width={44}
          height={56}
        />
        <p>Orinoquía (Guainía, Colombia)</p>
      </div>

      <div className="Hero__will-have">
        <div className="will-have__item 1">
          <i>
            <Image
              src="/assets/images/hero/compass.svg"
              alt=""
              role="none"
              width={14}
              height={14}
            />
          </i>
          <p>Experiencias cautivantes</p>
        </div>
        <div className="will-have__item 2">
          <i>
            {' '}
            <Image
              src="/assets/images/hero/food.svg"
              alt=""
              role="none"
              width={14}
              height={14}
            />
          </i>
          <p>Todas las comidas incluidas</p>
        </div>
        <div className="will-have__item 3">
          <i>
            {' '}
            <Image
              src="/assets/images/hero/cabin.svg"
              alt=""
              role="none"
              width={14}
              height={14}
            />
          </i>
          <p>Alojamientos únicos</p>
        </div>
        <div className="will-have__item 4">
          <i>
            {' '}
            <Image
              src="/assets/images/hero/camper.svg"
              alt=""
              role="none"
              width={14}
              height={14}
            />
          </i>
          <p>Transporte terrestre y fluvial en el Guainía</p>
        </div>
      </div>

      <p className="Hero__whatsapp">Whatsapp:</p>

      <Button
        text="4 días, 3 noches"
        className='Hero__whatsapp-cta'
        Icon={() => (
          <Image
            src="/assets/images/hero/whatsapp.png"
            alt=""
            width={240}
            height={67}
          />
        )}
      />

      <Image
        src="/assets/images/hero/arrow-down.svg"
        alt=""
        role="none"
        width={24}
        height={24}
        className="Hero__arrow-down"
      />

    </WpHero>
  );
};

export default Index;
