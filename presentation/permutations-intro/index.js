// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import code slide
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Permutations
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              An Introduction
            </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Game Plan</Heading>
            <Heading size={5} textColor="secondary">General Thoughts on Permutations</Heading>
            <Heading size={5} textColor="secondary">Problem Solving Technique: Base Case & Build</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" notes="blue is iterator in second loop. red is variable saving reference to min index.">
            <Heading size={5} textColor="primary" caps>Permutations</Heading>
            <Heading size={6} textColor="secondary" caps>General Thoughts</Heading>
            <Appear>
             <p>
              <S type="bold">
                Order matters. Arrangement of a set of data in a particular order. Different from combinations. Order doesn't matter in combinations.
              </S>
             </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  Lends itself to recursion due to the nature of the problem i.e. tasked with finding all possible ordered arrangements.
                </S>
              </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  How do I know I'm done? Number of permutations of n objects is n!
                </S>
              </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" notes="blue is iterator in second loop. red is variable saving reference to min index.">
            <Heading size={5} textColor="primary" caps>Permutations</Heading>
            <Heading size={6} textColor="secondary" caps>Base Case and Build</Heading>
            <Appear>
             <p>
              <S type="bold">
                First identify and solve the base case.
              </S>
             </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  Build up solution from there, incrementally adding complexity.
                </S>
              </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  Use previously built solutions to solve more complicated cases.
                </S>
              </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>
                <em>"Fin"</em>
              </Quote>
            </BlockQuote>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
