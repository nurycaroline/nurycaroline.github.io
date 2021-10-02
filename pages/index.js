import { ThemeProvider } from "styled-components";
import withAnalytics from "../src/hocs/withAnalytics";
import Layout from "../src/layout";

import { AnimationToTop, AnimationToBotton } from "../src/styles";

import ThemeStyle from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

const MainPage = () => (
  <ThemeProvider theme={ThemeStyle}>
    <>
      <GlobalStyle />

      <AnimationToTop />
      <AnimationToBotton />

      <Layout />
    </>
  </ThemeProvider>
);

export default withAnalytics()(MainPage);
