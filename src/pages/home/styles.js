import styled from "styled-components";
export const Root = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    min-width: 100vw;
  }
`;
export const Header = styled.div`
  background: linear-gradient(180deg, #253c8c, #253c8c);
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  height: 80px;
  padding-left: 250px;
  padding-right: 50px;
  @media (max-width: 1000px) {
    padding-left: 0;
  }
  img {
    height: 50px;
    margin: auto 0;
  }
`;
export const HeaderButtonsdiv = styled.div`
  display: flex;
  gap: 60px;
  @media (max-width: 1000px) {
    gap: 12px;
  }
`;
export const HeaderButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
  &.main {
    text-decoration: underline;
  }
  &.Go {
    background-color: #00b7ff;
    height: 25px;
    justify-self: center;
    align-self: center;
    border-radius: 8px;
    color: #253c8c;
  }
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: translateY(4px) scale(1.1);
  }
`;
export const Container = styled.div`
  background-image: url("/bg-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const View = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;
export const Image = styled.div`
  min-width: 50vw;
  height: 50vh;
  background-color: red;
  @media (max-width: 1000px) {
    width: 100vw;
  }
`;
export const Main = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding-left: 282px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100vw;
    padding-left: 0;
    align-items: center;
  }
`;
export const Text = styled.div`
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  color: #ffff;
  margin-top: 150px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
export const Legenda = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  color: #ffff;
  margin-top: 24px;
`;
export const ButtonWarpper = styled.div`
  display: flex;
  margin-top: 160px;
  gap: 18px;
  flex-direction: column;
  font-size: 13px;
  color: white;
  @media (max-width: 1000px) {
    width: 100vw;
    margin: 50px auto;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: #6cb546;
  width: 300px;
  padding-top: 21px;
  padding-bottom: 21px;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;
export const AppButton = styled.button`
  background-color: #000;
  width: 300px;
  color: white;
  border-radius: 8px;
  font-size: 10px;
  height: 56px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;
export const BannerWarpper = styled.div`
  display: flex;
  margin-top: 73px;
  margin-left: 284px;
  margin-bottom: 58px;
  gap: 170px;
  max-width: 100vw;
  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: warp;
    flex-direction: column;
    margin: 0 auto;
    gap: 30px;
  }
`;
export const Banner = styled.div`
  border: 1px solid white;
  width: 300px;
  height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  img {
    width: 28px;
    margin: 15px auto;
  }
  div {
    border-top: 1px solid white;
    width: 285px;
    padding-top: 16px;
    font-size: 16px;
    color: white;
    text-align: center;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const SimpleButton = styled.button`
  background: none;
  border: none;
  &.upbtn2 {
    display: inline;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  &.upbtn3 {
    display: none;
    @media (max-width: 1000px) {
      display: inline;
    }
  }
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: translateY(4px);
  }
`;
export const SecondPage = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const Section = styled.div`
  width: 50vw;
  max-height: 90vh;
  &.image {
    margin-top: 280px;
    @media (max-width: 1000px) {
      margin: 25px 0;
    }
  }
  &.image_2 {
    margin-top: 280px;
    margin-left: 50px;
    @media (max-width: 1000px) {
      margin: 25px 0;
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    height: fit-content;

    img {
      width: 90vw;
      margin: 0;
    }
  }
`;
export const TextSecondPage = styled.div`
  font-size: 56px;
  margin-top: 237px;
  margin-left: 247px;
  color: #000;
  @media (max-width: 1000px) {
    margin: 25px 0;
  }
`;
export const LegendaSecondPage = styled.div`
  font-size: 24px;
  color: #000;
  margin-top: 160px;
  margin-left: 247px;
  @media (max-width: 1000px) {
    margin: 25px 0;
  }
`;

export const Fly = styled.img`
  margin-left: 56px;
  margin-top: 0;
  @media (max-width: 1000px) {
    width: 50vw;
  }
`;
export const Second = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
    width: 100vw;
  }
`;
export const FooterSecondPage = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    color: #253c8c;
    font-size: 16px;
    padding: 12px;
    border: 1px solid #253c8c;
    border-radius: 18px;

    @media (max-width: 1000px) {
      width: 50vw;
    }
  }
`;
export const ThirdPage = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: #e9effd;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const Third = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Warpper = styled.div`
  @media (max-width: 1000px) {
    width: 90vw;
    display: flex;
    justify-content: space-between;
  }
`;
export const FooterThirdPage = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-top: 160px;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;
export const Div = styled.div`
  border: 1px solid black;
  padding: 10px;
  border-radius: 18px;
`;

export const ForthPage = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const Forth = styled.div`
  height: 90vh;
  max-width: 100vw;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const ForthPageText = styled.div`
  font-size: 56px;
  font-weight: 500;
  margin-left: 240px;
  margin-top: 190px;
  @media (max-width: 1000px) {
    margin: 15px 0;
  }
`;
export const CarroselWarpper = styled.div`
  max-width: 100vw;
  margin: 45px 0;
`;
export const Card = styled.div`
  border: 4px solid #1d2b4e;
  box-shadow: 40px 40px #1d2b4e;
  border-radius: 8px;
  margin: 140px 167px;
  width: 80vw;
  display: flex;
  align-items: center;
  img {
    margin: 40px;
    height: 300px;
    max-width: 120px;
  }
  p {
    font-family: Ubuntu;
    font-size: 24px;
    margin-right: 130px;
  }
  @media (max-width: 1000px) {
    margin: 0 auto;
    height: 30vh;
    p {
      margin: 0;
      font-size: 12px;
    }
    img {
      margin: 5px;
      height: 60px;
      width: 334px;
    }
  }
`;

export const Art = styled.img`
  min-width: 340px;
  min-height: 340px;
  @media (max-width: 1000px) {
    min-width: 80px;
    min-height: 80px;
  }
`;
export const FooterForthPage = styled.div`
  margin-top: 10px;
  z-index: 10;
  display: flex;
  gap: 24px;
  width: 95vw;
  justify-content: center;
  gap: 600px;
  @media (max-width: 1000px) {
    gap: 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 259px;
    border: 1px solid #253c8c;
    font-size: 24px;
    font-weight: 400;
    color: #253c8c;
    border-radius: 18px;
  }
`;
export const FinalPage = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #f5f5f5 60%, #1d2b4e 40%);
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: fit-content;
  }
`;
export const BigText = styled.div`
  font-size: 56px;
  font-weight: 500;
  line-height: 64px;
  margin-top: 218px;
  margin-left: 241px;
`;
export const Coments = styled.div`
  margin: 120px auto;
  display: flex;
  gap: 31px;
`;
export const Quotation = styled.img`
  height: 120px;
  width: 122px;
`;

export const Coment = styled.div`
  background-color: #ffff;
  height: 360px;
  width: 317px;
  border-radius: 8px;
  padding: 21px 26px 21px 26px;
  p {
    font-size: 16px;
    font-weight: 400;
    margin: 36px;
    text-align: justify;
  }
`;
export const Avatar = styled.div`
  margin-top: 24px;

  img {
    height: 64px;
    width: 64px;
  }
  P {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 27.58px;
    color: #253c8c;
    margin-bottom: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
    line-height: 27.58px;
    color: #253c8c;
  }
`;
export const Footer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;

  a {
    text-decoration: underline;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: translateY(4px) scale(1.1);
    }
    :visited {
      color: white;
    }
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: translateY(4px) scale(1.1);
      }
    }
  }
`;
