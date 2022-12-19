import React from "react";
import { Card, Container, Text, Title, Wrapper } from "./style";

import quran from "../../assets/images/quran96.png";
import zazam96 from "../../assets/images/zamzam96.png";
import newbriefcase from "../../assets/images/newbriefcase96.png";
import suit from "../../assets/images/suit100.png";
import waistcoat96 from "../../assets/images/waistcoat96.png";
import { useTranslation } from "react-i18next";

export const Gifts = () => {
  const {t} = useTranslation();
  return (
    <Container id="gifts">
      <Title>{t('gifts')}</Title>
      <Wrapper>
        <Card>
          <img alt="" src={quran} />
          <Text>{t('quron')}</Text>
        </Card>
        <Card>
          <img alt="" src={zazam96} />
          <Text>{t('zam_zam')}</Text>
        </Card>
        <Card>
          <img alt="" src={newbriefcase} />
          <Text>{t('sumka')}</Text>
        </Card>
        <Card>
          <img alt="" src={waistcoat96} />
          <Text>{t('nimcha')}</Text>
        </Card>
        <Card>
          <img alt="" src={suit} />
          <Text>{t('pidjak')}</Text>
        </Card>
      </Wrapper>
    </Container>
  );
};
