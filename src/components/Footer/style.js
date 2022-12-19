import styled from 'styled-components';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const media = {
  mobile: `@media(max-width:480px)`,
};

export const Container = styled.div`
  background-color: green;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 40px 50px;

  ${media.mobile} {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  /* text-align:center; */
`;

export const SubTitle = styled.div`
  font-size: 23px;
  font-family: sans-serif;
  color: white;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  gap: 15px;

  ${media.mobile} {
    font-size: 20px;
  }
  .payment__wrap {
    display: flex;
  }
  .payment__wrap img {
    width: 100px;
    height: 60px;
    margin-top: -20px;
  }
`;
export const Number = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  color: white;
  padding-left: 50px;
  margin-top: 10px;

  ${media.mobile} {
    font-size: 18px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 30px;

  ${media.mobile} {
    padding-left: 10px;
  }
`;

export const Phone = styled(BsTelephoneForward)``;

export const Telegram = styled(FaTelegramPlane)`
  font-size: 40px;
  color: white;

  transition: 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.96);
  }
`;

export const TelegramGroup = styled(BsTelegram)`
  font-size: 40px;
  color: white;
  transition: 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.96);
  }
`;

export const Instagram = styled(BsInstagram)`
  font-size: 40px;
  color: white;

  transition: 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.96);
  }
`;

export const Location = styled(ImLocation)`
  font-size: 35px;
  color: white;
`;

export const BottomFooter = styled.div`
  border-top: 1px solid white;
  /* padding: 20px 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;
  }
`;

export const Address = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 25px;

  ${media.mobile} {
  }
`;

export const MainButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 25px;
  margin-top: 40px;
  border-radius: 50px;
  border: none;
  background-color: white;
  transition: 0.5s ease;
  font-weight: 500;
  cursor: pointer;
  font-weight: 550;

  :hover {
    transform: scale(1.05);
    background: transparent;
    border: 1px solid white;
  }
  ${media.mobile} {
    width: 200px;
    height: 50px;
    font-size: 18px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: baseline;
`;
