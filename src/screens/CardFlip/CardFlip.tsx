import { useState } from "react";
import classNames from "classnames";
import styled, { ThemeProvider } from "styled-components";

import me from "../../images/me.jpeg";
import "./CardFlip.css";

const theme = {
  primary: "#FFCE00",
  secondary: "#FE4880",
  dark: "#212121",
  light: "#F3F3F3",
};

const CardFlip = () => {
  const [rotateY, setRotateY] = useState(0);

  const onCardPress = () => {
    setRotateY((rY) => rY + 180);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <CardInner onClick={onCardPress} rotateY={rotateY}>
            <CardFront className={classNames({ "card-face": true })}>
              <StyledH2>Developer Card</StyledH2>
            </CardFront>
            <CardBack className={classNames({ "card-face": true })}>
              <CardBackContent>
                <CardBackHeader>
                  <ProfileImg src={me} />
                  <h2>Glendon Philipp B. Baculio</h2>
                </CardBackHeader>
                <CardBackBody>
                  <h3>JS Wizard</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque corporis magnam tenetur, ea adipisci voluptas
                    voluptates non laboriosam laborum quae aspernatur.
                  </p>
                </CardBackBody>
              </CardBackContent>
            </CardBack>
          </CardInner>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default CardFlip;

const Card = styled.div`
  margin: 100px auto 0;
  width: 400px;
  height: 600px;
  perspective: 1000px;
`;

const CardInner = styled.div<{ rotateY: number }>`
  width: 100%;
  height: 100%;
  ${({ rotateY }) => `transform: rotateY(${rotateY}deg);`}
  transition: transform 2s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

const CardFront = styled.div`
  ${({ theme }) =>
    `background-image: linear-gradient(to bottom right, ${theme.primary}, ${theme.secondary});`}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  color: #fff;
  font-size: 32px;
`;

const CardBack = styled.div`
  ${({ theme }) => `background-color: ${theme.light};`}
  transform: rotateY(180deg);
`;

const CardBackContent = styled.div`
  width: 100%;
  height: 100%;
`;

const CardBackHeader = styled.div`
  position: relative;
  padding: 30px 30px 40px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 0 0 50% 0;
    ${({ theme }) =>
      `background-image: linear-gradient(to bottom left, ${theme.primary} 10%, ${theme.secondary} 115%);`}
  }
  h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }
`;

const CardBackBody = styled.div`
  padding: 30px;
  h3 {
    ${({ theme }) => `color: ${theme.dark};`}
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    ${({ theme }) => `color: ${theme.dark};`}
    font-size: 18px;
    line-height: 1.5;
  }
`;

const ProfileImg = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 30px;
  border-radius: 50%;
  border: solid #fff 5px;
  background-color: #fff;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
