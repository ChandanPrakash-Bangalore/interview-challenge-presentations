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
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

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
              Sorting Algorithms
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Overview and Problem Solving Techniques
            </Text>
            <p></p>
            <iframe width="860" height="515" src="https://www.youtube.com/embed/kPRA0W1kECg" frameborder="0" allowfullscreen></iframe>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Topics</Heading>
            <Heading size={5} textColor="secondary">Sorting</Heading>
            <Heading size={5} textColor="secondary">Problem Solving Techniques</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={5} textColor="secondary" caps>Sorting</Heading>
            <Heading size={6} textColor="tertiary" caps>What is a sorting algorithm?</Heading>
            <Appear>
              <p>
                "A sorting algorithm is an algorithm that puts elements of a list in a certain order." - Wikipedia
              </p>
            </Appear>
            <Appear>
              <p>
                Goal of this week is to practice algorithmic thinking skills by implementing various types of sorting algorithms.
              </p>
            </Appear>
            <Appear>
              <p>
                As you write your algorithms, think about why the sort you're implementing may or may not be efficient.
                What is the time complexity of your sorting algorithm?
              </p>
            </Appear>
            <Appear>
              <Heading size={6} textColor="secondary" caps>
                <a href="https://visualgo.net/sorting">Sorting Algorithm Visualization Tool</a>
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={5} textColor="secondary" caps>Problem Solving Techniques</Heading>
            <Heading size={6} textColor="tertiary" caps>General Approach</Heading>
            <Appear>
              <p>
                Think carefully about what the problem is asking and try to visualize it.
              </p>
            </Appear>
            <Appear>
              <p>
                As you're brainstorming, look for the pattern that you're trying to turn into code.
              </p>
            </Appear>
            <Appear>
              <p>
                Use this as a guide for when you start coding.
              </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
            <Heading size={5} textColor="secondary" caps>Problem Solving Techniques</Heading>
            <Heading size={6} textColor="tertiary" caps>Simplify and Generalize</Heading>
            <Appear>
              <p>
                Oftentimes best not to go for the hail mary on the first try.
              </p>
            </Appear>
            <Appear>
              <p>
                Solve a simplified version of the problem first.
              </p>
            </Appear>
            <Appear>
              <p>
                For sorts, the tricky part is not necessarily switching two numbers but the way we decide which numbers to switch.
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
