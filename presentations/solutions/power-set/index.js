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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  power: require("../../../assets/solutions/power-set/he-man.gif"),
  what: require("../../../assets/solutions/power-set/what.jpg"),
  waiting: require("../../../assets/solutions/power-set/waiting.gif")
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
              Power Set
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Breaking It Down
            </Text>
            <Image src={images.power} margin="0px auto 40px" height="332px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Game Plan</Heading>
            <Heading size={5} textColor="secondary">Algorithm Review</Heading>
            <Heading size={5} textColor="secondary">Code Review</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" notes="blue is iterator in second loop. red is variable saving reference to min index.">
            <Heading size={5} textColor="primary" caps>Power Set</Heading>
            <Heading size={6} textColor="secondary" caps>Breaking Down The Algorithm</Heading>
            <Appear>
             <p>
              <S type="bold">
                A set is a collection of distinct elements: {'{a, b, n}'}
              </S>
             </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  A subset is a set where all elements of the set are a part of another set. 
                  {'{a, b} is a subset of {a, b, n}'} but {'{a, k} is not a subset of {a, b, n}'}
                </S>
              </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  A power set is the set of all subsets for a given set.
                </S>
              </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.what} margin="0px auto 40px"/>
          </Slide>
          <Slide transition={["fade"]}>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Break to whiteboard and visualize power set...
            </Text>
            <Image src={images.waiting} margin="40px auto 40px"/>
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../../assets/solutions/power-set/power-set.code")}
              margin="20px auto"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw-loader!../../../assets/solutions/power-set/power-set.code")}
            ranges={[
              { loc: [0, 50], title: "Power Set - Code Review" },
              { loc: [1, 2], note: "will return one empty set at a minimum" },
              { loc: [2, 9], note: "need to sort given string and remote duplicates" },
              { loc: [3, 4], note: "split string into an array" },
              { loc: [4, 5], note: "sort it" },
              { loc: [5, 8], note: "filter out duplicates. indexOf returns the FIRST index where a letter is found. that index will equal i but subsequent indices with the same letter will not equal i" },
              { loc: [9, 15], note: "magic happens here. recurse over our subsets, incrementally adding characters at every recursion" },
              { loc: [10, 14], note: "for each of our available characters" },
              { loc: [11, 12], note: "we want to add it to our already existing subset and push that new subset into our power set" },
              { loc: [12, 13], note: "we then want to apply the same process to our newly created subset using the remaining characters available to us" },
              { loc: [16, 17], note: "kick off the above processes" },
              { loc: [17, 18], note: "return our power set" }
            ]}
          />
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../../assets/solutions/power-set/power-set.code")}
              margin="20px auto"
            />
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
