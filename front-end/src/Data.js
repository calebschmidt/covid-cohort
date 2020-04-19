import React from "react";
import Navigation from "./Navbar";
import SimpleFooter from "./Footer";

import {
  Anchor,
  Heading,
  Grommet,
  Main,
  Box,
  Paragraph,
  WorldMap,
} from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Box background="light-2" gridArea="info" align="center">
        <div>
          <WorldMap color="#8e1600" height="100%" />
        </div>
        <Heading>Stay home, stay safe.</Heading>
        <Heading level="3" margin="none">
          What are the Symptoms of COVID-19?
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            According to the Centers for Disease Control and Prevention,{" "}
          </Anchor>
          the following are known symptoms of COVID-19. Symptoms can range from mild (or no symptoms) to severe ilness.
          <br /><br />
          Note that symptoms can appear up to two weeks after exposure to the virus.
        </Paragraph>
        <Heading level="3" margin={{ bottom: "none" }}>
          What to do if You Have Symptoms
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          <Anchor
            href="https://www.cdc.gov/coronavirus"
            color="#000000"
          >
            According to the CDC
          </Anchor>
          {" "}, most people will be able to recover from COVID-19 at home.  Follow the below guidelines if you experience symptoms.
        </Paragraph>
        <Heading level="3" margin={{ bottom: "none" }}>
          When to Seek Medical Attention
        </Heading>
        <br />
        <Paragraph
          fill={true}
          margin={{ left: "xlarge", right: "xlarge" }}
          size="large"
          textAlign="center"
        >
          If you are unsure whether or not you need medical attention, call your primary care provider or local health department.{" "}
          <Anchor
            href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
            color="#000000"
          >
            Per the CDC,
          </Anchor>{" "}seek medical attention immediately if you experience any of the below symptoms.
        </Paragraph>
      </Box>
    </div>
  );
};

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <GridLayout />
    </Main>
  </Grommet>
);

export default function Learn() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <SimpleFooter />
    </div>
  );
}
