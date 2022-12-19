import React from "react";
import {
  Card,
  CarouselDiv,
  Container,
  MainWrapper,
  Text,
  Title,
  Wrapper,
} from "./style";
import kaba from "../../assets/images/kaba.png";
import airport from "../../assets/images/airport.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calendar.png";
import { Carousel } from "../Courosel";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export const AboutUs = () => {
  const {t} = useTranslation();
  return (
    <Container id="aboutUs">
      <Title>{t('about_us')}</Title>

      <MainWrapper>
        <CarouselDiv>
          <Carousel />
        </CarouselDiv>

        <Wrapper>
          <Card>
            <img alt="" src={kaba} />
            <Text>
              <span>{t('umra_ziyorati')}</span> {new Date().getFullYear()}
            </Text>
          </Card>
          <Card>
            <img alt="" src={calendar} />
            <Text>
              <span>{t('kun')}</span> {t('muborak_umra')}
            </Text>
          </Card>
          <Card>
            <img alt="" width={"80px"} src={location} />
            <Text>
              {t('olib_ketish')}
            </Text>
          </Card>
          <Card>
            <img alt="" src={airport} />
            <Text>
              {t('uchish_tartibi')} <span>{t('uchish_manzili')}</span>{" "}
            </Text>
          </Card>
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};
