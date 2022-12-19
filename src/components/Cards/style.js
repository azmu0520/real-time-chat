import styled from "styled-components";

import { FaPassport } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { BiHotel } from "react-icons/bi";

import { ReactComponent as ziyorat } from "../../assets/icons/ziyorat.svg";
import { ReactComponent as man } from "../../assets/icons/man.svg";

// const media = {
//   mobile: `@media(max-width:480px)`,
// };

export const Wrap = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 250px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  gap: 20px;

  background-color: white;
  border-radius: 30px;
  .title{
    font-family: sans-serif;
  font-weight: 600;  
  text-align: center;
  }

`;

export const IconVisa = styled(FaPassport)`
  width: 50px;
  height: 50px;
`;

export const IconHotel = styled(BiHotel)`
  width: 50px;
  height: 50px;
`;

export const IconBus = styled(FaBus)`
  width: 50px;
  height: 50px;
`;

export const IconHistory = styled(FaStarAndCrescent)`
  width: 50px;
  height: 50px;
`;

export const IconTravel = styled(GiPathDistance)`
  width: 50px;
  height: 50px;
`;

export const IconMan = styled(man)`
  width: 50px;
  height: 50px;
`;

export const IconMuz = styled(ziyorat)`
  width: 50px;
  height: 50px;
`;

export const IconMeal = styled(GiMeal)`
  width: 50px;
  height: 50px;
`;

export const Title = styled.div`

`;

export const Div = styled.div``;
