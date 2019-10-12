import { ThemeProvider } from "styled-components";
import withAnalytics from "../src/hocs/withAnalytics";
import Layout from "../src/layout";

import { AnimationToTop, AnimationToBotton } from "../src/styles";

import ThemeStyle from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

const MainPage = ({ works }) => (
  <ThemeProvider theme={ThemeStyle}>
    <>
      <GlobalStyle />

      <AnimationToTop />
      <AnimationToBotton />

      <Layout works={works} />
    </>
  </ThemeProvider>
);

export default withAnalytics()(MainPage);
