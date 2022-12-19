import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/images/logo.JPG';
import {
  Contact,
  Container,
  Li,
  Logo,
  MenuIcon,
  MobileLi,
  MobileUl,
  MobileWrapper,
  Ul,
  Wrapper,
  GlobeIcon,
} from './style';
import { Link } from 'react-scroll';
import './style.css';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        headerRef.current.classList.add('header_shrink');
      } else {
        headerRef.current.classList.remove('header_shrink');
      }
    });
    // return ()=> window.removeEventListener('scroll')
  }, []);

  const mobile = window.innerWidth <= 768 ? true : false;
  const [barClosed, setBarClosed] = useState(true);
  const { t } = useTranslation();

  const languages = [
    {
      code: 'uz',
      name: 'Uzbek',
      country_code: 'uz',
    },
    {
      code: 'ru',
      name: 'Russian',
      country_code: 'ru',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
  ];

  return (
    <Container className='' ref={headerRef}>
      <Link to='main' span={true} smooth={true}>
        <Logo src={logo} />
      </Link>
      {mobile ? (
        <MobileWrapper barClosed={barClosed}>
          {barClosed ? (
            <MenuIcon onClick={() => setBarClosed(false)} />
          ) : (
            <MobileUl>
              <Link
                to='aboutUs'
                span={true}
                smooth={true}
                onClick={() => setBarClosed(true)}
              >
                <MobileLi>Xaqimizda</MobileLi>
              </Link>

              <>
                <Link
                  to='aboutService'
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <MobileLi>Xizmatlar</MobileLi>
                </Link>
              </>
              <>
                <Link
                  to='gifts'
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <MobileLi>Sovg'alar</MobileLi>
                </Link>
              </>
            </MobileUl>
          )}
        </MobileWrapper>
      ) : (
        <Wrapper>
          <Ul>
            <a href='#aboutUs'>
              <Li>{t('nav_about_us')}</Li>
            </a>
            <a href='#aboutService'>
              <Li>{t('nav_xizmatlar')}</Li>
            </a>
            <a href='#gifts'>
              <Li>{t('nav_sovgalar')}</Li>
            </a>
          </Ul>
        </Wrapper>
      )}{' '}
      <div className='d-flex'>
        <div className='dropdown'>
          <button
            id='dropdownMenuButton1'
            class='btn btn-link dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <GlobeIcon />
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {languages.map(({ code, name, country_code }) => {
              return (
                <li key={country_code} className='d-flex'>
                  <span className={`fi fi-${country_code} mx-2`}></span>
                  <button
                    className='dropdown-item'
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to='contact' span={true} smooth={true}>
          <Contact>{t('nav_btn')}</Contact>
        </Link>
      </div>
    </Container>
  );
};
