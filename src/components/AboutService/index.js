import React, { useState, useTransition } from "react";
import { Container, Title, Wrapper } from "./style";
import { data } from "../../data/index";
import { useTranslation } from "react-i18next";
import {
  IconVisa,
  IconHotel,
  IconBus,
  IconHistory,
  IconTravel,
  IconMan,
  IconMuz,
  IconMeal,
} from "../../components/Cards/style";
import {Wrap } from "../../components/Cards/style";

export const AboutService = () => {
  // eslint-disable-next-line
  const [info, setInfo] = useState(data);
  const {t} = useTranslation();

  return (
    <Container id="aboutService">
      <Title>{t('bizning_xizmatlar')}</Title>
      <Wrapper>
       <Wrap className="container">
       <IconVisa />
        <div className="title">{t('viza')}</div>
       </Wrap>
       <Wrap className="container">
       <IconHotel />
        <div className="title">{t('mexmonxona')}</div>
       </Wrap>
       <Wrap className="container">
       <IconBus />
        <div className="title">{t('yetkazish')}</div>
       </Wrap>
       <Wrap className="container">
       <IconHistory />
        <div className="title">{t('islom_tarixi')}</div>
       </Wrap>
       <Wrap className="container">
       <IconTravel />
        <div className="title">{t('visit')}</div>
       </Wrap>
       <Wrap className="container">
        <IconMeal />
        <div className="title">{t('meal')}</div>
       </Wrap>
       <Wrap className="container">
        <IconMuz />
        <div className="title">{t('muzdalifa')}</div>
       </Wrap>
       <Wrap className="container">
        <IconMan />
        <div className="title">{t('xojiboshi')}</div>
       </Wrap>
      </Wrapper>
    </Container>
  );
};
