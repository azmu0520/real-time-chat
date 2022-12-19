import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, MainButton, MainInfo, Title } from "./style";


export const Main = () => {

  const {t} = useTranslation();

  return (
    <Container id="main" >
      {/* <Header /> */}
      <MainInfo>
        <Title>Sheyx Travel</Title>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/Umravaxaj1"
        >
          <MainButton>{t('main_btn')}</MainButton>
        </a>
      </MainInfo>
    </Container>
  );
};
