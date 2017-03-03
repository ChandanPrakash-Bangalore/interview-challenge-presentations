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
import Interactive from "../../../assets/example/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./styles.css");


const images = {
  robot: require("../../../assets/solutions/robot-paths/robot.gif"),
  waiting: require("../../../assets/solutions/robot-paths/waiting.gif"),
  grid1: require("../../../assets/solutions/robot-paths/grid-1.gif"),
  grid2: require("../../../assets/solutions/robot-paths/grid-2.gif"),
  grid3: require("../../../assets/solutions/robot-paths/grid-3.gif"),
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
              Robot Paths
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              A Solution
            </Text>
            <Image src={images.robot} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Topics</Heading>
            <Heading size={5} textColor="secondary">Intuition</Heading>
            <Heading size={5} textColor="secondary">Whiteboarding</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Intuition</Heading>
            <Heading size={6} textColor="secondary" caps>Breaking Down Into Sub-Problems</Heading>
            <Appear>
            <p>
              <S type="bold">
                Although not easily cached, the problem can be broken down into a series of sub-problems.
              </S>
            </p>
            </Appear>
            <Appear>
            <p>
              <S type="bold">
                For a board of n size, every time we move in a direction, the number of spaces left to traverse decreases.
              </S>
            </p>
            </Appear>
            <Appear>
            <p>
              <S type="bold">
                So...
              </S>
            </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Image src={images.grid1} margin="0px auto 40px" height="293px"/>
            <Appear>
            <p>
              <S type="bold">
                We currently have to traverse n spaces.
              </S>
            </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Image src={images.grid2} margin="0px auto 40px" height="293px"/>
            <Appear>
              <p>
                <S type="bold">
                  It would be great if we could traverse one less space i.e. n - 1 spaces...
                </S>
              </p>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Image src={images.grid3} margin="0px auto 40px" height="293px"/>
            <Appear>
              <p>
                <S type="bold">
                  Every time we place a piece on the board, the number of spaces left to traverse decreases by one.
                </S>
              </p>
            </Appear>
          </Slide>
          <CodeSlide
            transition={["slide", "fade"]}
            lang="js"
            code={require("raw-loader!../../../assets/intros/dynamic-programming/fibonacci.recursive")}
            ranges={[
              { loc: [0, 25], title: "Fibonacci - Recursive" },
              { loc: [1, 2], note: "base cases" },
              { loc: [4, 5], note: "recursive cases" }
            ]}
          />
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary" notes="demo techniques on whiteboard then in next slide use js perf to show efficiency of dynamic techniques">
            <Heading size={5} textColor="tertiary" caps>Dynamic Programming Demo</Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Break to whiteboard...
            </Text>
            <Image src={images.waiting} margin="40px auto 40px"/>
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
