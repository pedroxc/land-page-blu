import React, { useRef } from "react";
import useWindowDimensions from "../../hooks/screensize";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import google from "../../assets/google.svg";
import googleplay from "../../assets/googleplay.svg";
import apple from "../../assets/apple.svg";
import appleStore from "../../assets/appleStore.svg";
import lock from "../../assets/lock.svg";
import graph from "../../assets/graph.svg";
import coffe from "../../assets/coffe.svg";
import down from "../../assets/down-white.svg";
import downBlue from "../../assets/down-blue.svg";
import fly from "../../assets/fly.png";
import banner from "../../assets/banner-2.png";
import upBlue from "../../assets/upBlue.svg";
import banner3 from "../../assets/banner-3.png";
import logo from "../../assets/logoheader.png";
import logoSimple from "../../assets/logoSimple.png";
import numberOne from "../../assets/1.png";
import numberTwo from "../../assets/2.png";
import numberThree from "../../assets/3.png";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import quote1 from "../../assets/quote1.png";
import quote2 from "../../assets/quote2.png";
import user from "../../assets/user.png";
import whiteUp from "../../assets/upWhite.svg";
import playStoreFooter from "../../assets/playstoreFooter.png";
import appleFooter from "../../assets/appleStoreFooter.png";
import {
  Root,
  Container,
  Header,
  View,
  Main,
  Text,
  HeaderButtonsdiv,
  Legenda,
  ButtonWarpper,
  HeaderButton,
  Button,
  AppButton,
  BannerWarpper,
  Banner,
  Image,
  SimpleButton,
  SecondPage,
  Div,
  Section,
  TextSecondPage,
  LegendaSecondPage,
  Fly,
  Second,
  FooterSecondPage,
  ThirdPage,
  Third,
  Warpper,
  FooterThirdPage,
  ForthPage,
  Forth,
  ForthPageText,
  Card,
  CarroselWarpper,
  Art,
  FooterForthPage,
  FinalPage,
  BigText,
  Coments,
  Quotation,
  Coment,
  Avatar,
  Footer,
} from "./styles";

export default function Home() {
  const { width } = useWindowDimensions();

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <Root>
      <Header>
        {width > 1000 ? (
          <img src={logo} alt="logo Blu" />
        ) : (
          <img src={logoSimple} alt="logo Blu" />
        )}

        <HeaderButtonsdiv>
          <HeaderButton className="main">Início</HeaderButton>
          <HeaderButton>Preços</HeaderButton>
          <HeaderButton>Contato</HeaderButton>
          <HeaderButton className="Go">Acessar</HeaderButton>
        </HeaderButtonsdiv>
      </Header>
      <Container ref={ref2}>
        <View>
          <Main>
            <Text>Seu aplicativo de controle e envio de boletos!</Text>
            <Legenda>textinho curto</Legenda>

            <ButtonWarpper>
              <Button>Cadastre-se já!</Button>
              Baixe o app na sua loja de aplicativos!
              <AppButton>
                Disponível no
                <span>
                  <img src={google} alt="google" />
                  <img src={googleplay} alt="googleplay" />
                </span>
              </AppButton>
              <AppButton>
                Disponível no
                <span>
                  <img src={apple} alt="apple" />
                  <img src={appleStore} alt="appleStore" />
                </span>
              </AppButton>
            </ButtonWarpper>
          </Main>
          <Image>a</Image>
        </View>

        <BannerWarpper>
          <Banner>
            <img src={lock} alt="cadeado" />
            <div>texto sobre seguranca</div>
          </Banner>
          <Banner>
            <img src={coffe} alt="cadeado" />
            <div>Texto sobre praticidade</div>
          </Banner>
          <Banner>
            <img src={graph} alt="cadeado" />
            <div>Texto sobre controle</div>
          </Banner>
          <SimpleButton
            onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={down} alt="down" />
          </SimpleButton>
        </BannerWarpper>
      </Container>
      <SecondPage ref={ref}>
        <Second>
          <Section>
            <TextSecondPage>
              Seus boletos categorizados para os clientes!
            </TextSecondPage>
            <LegendaSecondPage>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            </LegendaSecondPage>
            <Fly src={fly} alt="aviao de papel" />
          </Section>

          <Section className="image">
            <img src={banner} alt="previw do app" />
          </Section>
        </Second>
        <FooterSecondPage>
          <SimpleButton
            style={{ alignSelf: "flex-start" }}
            onClick={() => ref2.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={upBlue} alt="up" />
          </SimpleButton>
          <div>Vantagens para sua empresa e seus clientes! 👇</div>
          <SimpleButton
            style={{ alignSelf: "flex-end" }}
            onClick={() => ref3.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={downBlue} alt="down" />
          </SimpleButton>
        </FooterSecondPage>
      </SecondPage>
      <ThirdPage ref={ref3}>
        <Third>
          <Section>
            <TextSecondPage>
              Torne-se uma empresa parceira e facilite suas operações!{" "}
            </TextSecondPage>
            <LegendaSecondPage>
              Texto Medio Texto Medio Texto Medio Texto Medio Texto Medio Texto
              Medio Texto Medio Texto Medio Texto Medio Texto Medio Texto Medio
              Texto Medio Texto Medio Texto Medio Texto Medio Texto Medio{" "}
            </LegendaSecondPage>
          </Section>
          <Section className="image_2">
            <img src={banner3} alt="pessoas usando o app" />
          </Section>
        </Third>
        <FooterThirdPage>
          <SimpleButton
            className="upbtn2"
            style={{ alignSelf: "flex-start" }}
            onClick={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={upBlue} alt="up" />
          </SimpleButton>
          <Div style={{ backgroundColor: "#A2F9E8" }}>
            CONTROLE DE PAGAMENTOS
          </Div>
          <Div style={{ backgroundColor: "#90ADF4" }}>
            FACILIDADE COM GRANDES REMESSAS
          </Div>
          <Div style={{ backgroundColor: "#FFE000" }}>
            OTIMIZAÇÃO DE RECURSOS
          </Div>
          <Div style={{ backgroundColor: "#F9A5CD" }}>LISTA DE CLIENTES</Div>
          <Div style={{ backgroundColor: "#90ADF4" }}>...MUITO MAIS!</Div>
          <Warpper>
            <SimpleButton
              className="upbtn3"
              style={{ alignSelf: "flex-start" }}
              onClick={() =>
                ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img src={upBlue} alt="up" />
            </SimpleButton>
            <SimpleButton
              style={{ alignSelf: "flex-end" }}
              onClick={() =>
                ref4.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img src={downBlue} alt="down" />
            </SimpleButton>
          </Warpper>
        </FooterThirdPage>
      </ThirdPage>
      <ForthPage ref={ref4}>
        <Forth>
          <ForthPageText>Como funciona</ForthPageText>
          <CarroselWarpper>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              emulateTouch
            >
              <Card>
                <img src={numberOne} alt="1" />
                <p>
                  A empresa parceira após categorizar os boletos da remessa
                  (Exemplo: ”Internet”), envia seus boletos em lote para seus
                  clientes.
                </p>
                <Art src={art1} alt="computareos" />
              </Card>
              <Card>
                <img src={numberTwo} alt="1" />
                <p>
                  O boleto é encaminhado ao cliente final (cliente
                  ”não-parceiro” incluso na remessa), que emite e paga dentro da
                  categoria correspondente, no painel inicial da conta de
                  cliente.
                </p>
                <Art src={art2} alt="computareos" />
              </Card>
              <Card>
                <img src={numberThree} alt="1" />
                <p>
                  O cliente anexa o comprovante pago, e atualiza o ”status” da
                  operação. A atualização de status é uma comunicação entre a
                  conta empresa parceira e conta de cliente.
                </p>
                <Art src={art3} alt="computareos" />
              </Card>
            </Carousel>
          </CarroselWarpper>
        </Forth>
        <FooterForthPage>
          <SimpleButton
            style={{ alignSelf: "flex-start" }}
            onClick={() => ref3.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={upBlue} alt="up" />
          </SimpleButton>
          <div>deslize para ver! 👉</div>
          <SimpleButton
            style={{ alignSelf: "flex-end" }}
            onClick={() => ref5.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={downBlue} alt="down" />
          </SimpleButton>
        </FooterForthPage>
      </ForthPage>
      <FinalPage ref={ref5}>
        <BigText>Por que utilizar Blu valida?</BigText>
        <Coments>
          <Quotation src={quote1} alt="aspas" />
          <Coment>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis vitae voluptas ex deserunt, cum neque molestiae. Sed
              quaerat maxime, laborum id asperiores, hic beatae placeat dicta,
              neque cumque totam dignissimos.
            </p>
            <Avatar>
              <img src={user} alt="user" />
              <p>Nome</p>
              <span>Função</span>
            </Avatar>
          </Coment>
          <Coment>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis vitae voluptas ex deserunt, cum neque molestiae. Sed
              quaerat maxime, laborum id asperiores, hic beatae placeat dicta,
              neque cumque totam dignissimos.
            </p>
            <Avatar>
              <img src={user} alt="user" />
              <p>Nome</p>
              <span>Função</span>
            </Avatar>
          </Coment>
          <Coment>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis vitae voluptas ex deserunt, cum neque molestiae. Sed
              quaerat maxime, laborum id asperiores, hic beatae placeat dicta,
              neque cumque totam dignissimos.
            </p>
            <Avatar>
              <img src={user} alt="user" />
              <p>Nome</p>
              <span>Função</span>
            </Avatar>
          </Coment>
          <Quotation src={quote2} alt="aspas" />
        </Coments>
        <Footer>
          <SimpleButton
            style={{ alignSelf: "flex-start" }}
            onClick={() => ref4.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <img src={whiteUp} alt="up" />
          </SimpleButton>
          Blu Valida 2022. Todos os direitos reservados.
          <a>Suporte</a>
          <div>
            Download:
            <img src={playStoreFooter} alt="googleFooter" />
            <img src={appleFooter} alt="appleFooter" />
          </div>
        </Footer>
      </FinalPage>
    </Root>
  );
}
