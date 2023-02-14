
import Image from 'next/image'
import React from 'react'
import WpFooter from './Footer.style'

const Footer = () => {
  return (
    <WpFooter className='footer'>
      <hr />
      <div className="footer__logo">
        <Image
          width={155}
          height={86}
          alt='logo de wonder'
          src='/assets/images/footer/logo-black.svg'
        />
        <p>#ViajaAlMomento</p>
      </div>

      <h4 className='footer__title-list'>Reserva tus viajes:</h4>
      <ul className='footer__list'>
        <li>
          <p><span>Whatsapp</span> Reservas e info.
          </p>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href="https://www.wondertravel.co">https://www.wondertravel.co</a>
        </li>
        <li>
          <a 
            target='_blank'
            rel='noreferrer'
            href="mailto:travelbuddy@wondertravel.co">ravelbuddy@wondertravel.co</a>
        </li>
      </ul>

      <p className='footer__subtitle'>Miembros de:</p>

      <Image
        width={264}
        height={87}
        alt='logo de wonder'
        src='/assets/images/footer/ACOTUR-LOGO.png'
        className='footer__acotur'
      />

      <p className="footer__copyright">© Copyright Wonder Travel</p>
    </WpFooter>
  )
}

export default Footer