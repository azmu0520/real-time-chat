import styled from 'styled-components';
import { FiMenu as ico } from 'react-icons/fi';
import { ReactComponent as globe } from '../../assets/icons/globe.svg';

const media = {
  mobile: `@media(max-width:480px)`,
  tablet: `@media(max-width:768px)`,
  laptop: `@media(max-width:1279px)`,
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #008000;
  letter-spacing: 0.5px;
  padding: 0px 50px;
  height: 70px;

  ${media.mobile} {
    justify-content: space-around;
  }
`;

export const MenuIcon = styled(ico)`
  color: white;
  font-size: 30px;
  opacity: 1;

  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(1.1);
  }
  /* margin-top:5px; */
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 20%;
  cursor: pointer;

  ${media.mobile} {
    margin-left: -55px;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  right: 0.1rem;
  top: 1.1rem;

  background-color: darkgreen;
  border-radius: 5px;
  height: fit-content;
  width: fit-content;
  padding-bottom: ${({ barClosed }) => (barClosed ? '0rem' : '1rem')};
  padding-top: ${({ barClosed }) => (barClosed ? '0rem' : '1rem')};
  padding-right: ${({ barClosed }) => (barClosed ? '0rem' : '2rem')};
  padding: ${({ barClosed }) => barClosed && '4px'};
  margin-right: ${({ barClosed }) => (barClosed ? '1rem' : '0rem')};
  margin-top: ${({ barClosed }) => (barClosed ? '0rem' : '-0.2rem')};
  z-index: 10;

  ${media.mobile} {
  }
`;

export const MobileUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  color: white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const MobileLi = styled.li`
  cursor: pointer;
  :hover {
    cursor: pointer;
    color: var(--orange);
    transform: scale(1.1);
  }

  :active {
    cursor: pointer;
    color: var(--darkOrange);
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;

  ${media.mobile} {
    display: none;
  }
`;

export const Contact = styled.button`
  width: 100px;
  height: 40px;
  color: black;
  font-weight: 600;
  background-color: white;
  border: none;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    transform: scale(1.1);
    border: 1px solid white;
    background-color: transparent;
  }
  :active {
    transform: scale(0.97);
    border: 1px solid white;
    background-color: transparent;
  }

  ${media.mobile} {
    margin-right: 20px !important ;
  }

  ${media.tablet} {
    margin-right: 60px;
  }

  ${media.laptop} {
    margin-right: 80px;
  }
`;

export const Ul = styled.div`
  list-style: none;
  display: flex;
  gap: 32px;
  color: white;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export const Li = styled.div`
  cursor: pointer;
  transition: 0.5s ease;
  :hover {
    cursor: pointer;
    color: var(--orange);
    transform: scale(1.1);
  }

  :active {
    cursor: pointer;
    transform: scale(0.97);
  }
  list-style: none;
`;

export const GlobeIcon = styled(globe)`
  width: 28px;
  height: 28px;
  color: #fff;
`;

export const Div = styled.div``;
