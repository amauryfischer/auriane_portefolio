import logo from "./logo.svg"
import "./App.css"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import { useTranslation } from "react-i18next"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import LanguageIcon from "@mui/icons-material/Language"
import AppBar from "@mui/material/AppBar"
import { Button } from "@mui/material"
import Flex from "./utils/flex"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  header {
    position: absolute !important
  }
`
const Container = styled.div`
  background-color: #3e3e3e;
  height: 100vh;
`
const /* Creating a new instance of the RightContainer class. */
  RightContainer = styled.div`
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    height: 100%;
    justify-content: center;
  `
// white button with linear background black to grey
const WhiteButton = styled(Button)`
  background-image: linear-gradient(to bottom, #2a2a2a 0%, #0a0a0a 100%);
  border-radius: 8px !important;
  color: white !important;
  //border-color: white !important;
  background-color: black !important;
  width: 200px;
  height: 56px;
`
const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
`
const Subtitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`
const StyledAppBar = styled(AppBar)`
  height: 48px !important;
  background-color: transparent !important;
  margin-bottom: 0.25rem;
  z-index: 9999999;
`
const StyledLanguage = styled(LanguageIcon)`
  color: white !important;
`
const StyledFlexAppBarContainer = styled(Flex)`
  gap: 1rem;
  height: 100%;
  padding-left: 3rem;
  padding-right: 1rem;
`
const LanguageButton = styled(Button)`
  height: 100%;
  color: white !important;
`
const StyledSubHeader = styled.div`
  font-size: 1rem;
`
function App() {
  const {
    i18n: { changeLanguage, language },
    t,
  } = useTranslation()
  return (
    <>
      <GlobalStyle />
      <Container>
        <StyledAppBar position="static">
          <StyledFlexAppBarContainer
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex gap="2rem">
              <StyledSubHeader>{t("Home")}</StyledSubHeader>
              <StyledSubHeader>{t("Project 1")}</StyledSubHeader>
              <StyledSubHeader>{t("Project 2")}</StyledSubHeader>
            </Flex>
            <LanguageButton
              onClick={() =>
                language === "fr" ? changeLanguage("en") : changeLanguage("fr")
              }
            >
              <Flex alignItems="center" gap="0.5rem">
                <StyledLanguage />
                {t("EN")}
              </Flex>
            </LanguageButton>
          </StyledFlexAppBarContainer>
        </StyledAppBar>
        <video
          autoplay=""
          class="vjs-tech"
          controlslist="nodownload"
          id="video_html5_api"
          loop
          muted="muted"
          playsinline="playsinline"
          poster="https://cdn-animation.artstation.com/p/thumbnails/000/541/425/thumb.jpg"
          tabindex="-1"
          preload="auto"
        >
          <source
            media="(min-width: 0px)"
            src="https://cdn-animation.artstation.com/p/video_sources/000/557/004/neil-gif.mp4"
            type="video/mp4"
          ></source>
        </video>
        <RightContainer>
          <div>
            <Title>Auriane Fischer</Title>
            <Subtitle>
              <Typewriter
                options={{
                  strings: ["3D Character Artist", "3D Modeler", "3D Animator"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Subtitle>
          </div>
          <WhiteButton endIcon={<ChevronRightIcon />} variant="contained">
            {t("See my projects")}
          </WhiteButton>
        </RightContainer>
      </Container>
    </>
  )
}

export default App
