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
  russell: require("../../../assets/intros/dynamic-programming/beautiful-mind.gif"),
  waiting: require("../../../assets/intros/dynamic-programming/waiting.gif"),
  power: require("../../../assets/intros/dynamic-programming/unlimited-power.gif")
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
              Dynamic Programming
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              An Introduction
            </Text>
            <Image src={images.russell} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Topics</Heading>
            <Heading size={5} textColor="secondary">What Is It</Heading>
            <Heading size={5} textColor="secondary">Why Use It</Heading>
            <Heading size={5} textColor="secondary">Techniques</Heading>
            <Heading size={5} textColor="secondary">Demo</Heading>
            <Heading size={5} textColor="secondary">Limitations</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Dynamic Programming</Heading>
            <Heading size={6} textColor="secondary" caps>What Is It</Heading>
            <Appear>
            <p>
              <S type="bold">
                Method for solving complex problems by breaking them down into a collection of simpler subproblems
              </S>
            </p>
            </Appear>
            <Appear>
            <p>
              <S type="bold">
                Solve each subproblem once and store the solution in a data structure
              </S>
            </p>
            </Appear>
            <Appear>
            <p>
              <S type="bold">
                Next time the same subproblem occurs, look up the previously computed solution instead of recomputing
              </S>
            </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  Goal is optimization of time-complexity with a tradeoff in space complexity
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
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Dynamic Programming</Heading>
            <Heading size={6} textColor="secondary" caps>Why Use It</Heading>
            <Appear>
              <p>
                <S type="bold">
                  Makes an expensive operation much cheaper
                </S>
              </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  What might traditionally take hours solve can take seconds using a dynamic solution
                </S>
              </p>
            </Appear>
          </Slide>
          <CodeSlide
            notes="discuss the time complexity of this solution to fibonacci computation"
            transition={["slide", "fade"]}
            lang="js"
            code={require("raw-loader!../../../assets/intros/dynamic-programming/fibonacci.recursive")}
            ranges={[
              { loc: [0, 25], title: "Fibonacci - Recursive" },
              { loc: [4, 5], note: "for every level we recurse, we add two frames to the call stack" }
            ]}
          />
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Dynamic Programming</Heading>
            <Heading size={6} textColor="secondary" caps>Techniques</Heading>
            <Appear>
              <List>
                <ListItem>
                  <S type="bold">
                    Top Down (Memoization)
                  </S>
                  <List>
                    <ListItem>
                      Recurse until you reach base cases
                    </ListItem>
                    <ListItem>
                      Memoize solutions to each level as you recurse
                    </ListItem>
                    <ListItem>
                      Check for memoized solution before recursing
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Appear>
            <Appear>
              <List>
                <ListItem>
                  <S type="bold">
                    Bottom Up
                  </S>
                  <List>
                    <ListItem>
                      Start with base cases
                    </ListItem>
                    <ListItem>
                      Use base cases to reach first solution
                    </ListItem>
                    <ListItem>
                      Save that solution so far
                    </ListItem>
                    <ListItem>
                      Use it to calculate following solution, repeat until finished
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="secondary" notes="demo techniques on whiteboard then in next slide use js perf to show efficiency of dynamic techniques">
            <Heading size={5} textColor="tertiary" caps>Dynamic Programming Demo</Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Break to whiteboard...
            </Text>
            <Image src={images.waiting} margin="40px auto 40px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary" notes="CLICK ON THE GIF!">
            <Heading size={5} textColor="primary" caps>Dynamic Programming Is Powerful</Heading>
            <Link href="https://jsperf.com/recursive-vs-dynamic-fibonacci/1">
              <Image src={images.power} margin="40px auto 40px" height="293px"/>
            </Link>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Dynamic Programming</Heading>
            <Heading size={6} textColor="secondary" caps>Limitations</Heading>
            <Appear>
            <p>
              <S type="bold">
                Overhad associated with memoization in the form of additional memory consumption.
                If memory consumption is an issue, can fix the size of the cache.
              </S>
            </p>
            </Appear>
            <Appear>
            <p>
              <S type="bold">
                Only works for referentially transparent functions. That is, the output is solely dependent on the input and not external factors.
              </S>
            </p>
            </Appear>
            <Appear>
    
              <Link href="https://www.sitepoint.com/implementing-memoization-in-javascript/">
                <S type="bold">
                 <Heading size={5} textColor="primary" caps>Source & Further Reading</Heading>
                </S>
              </Link>
      
            </Appear>
          </Slide>
          <CodeSlide
            transition={["slide", "fade"]}
            lang="js"
            code={require("raw-loader!../../../assets/intros/dynamic-programming/referential-transparency.code")}
            ranges={[
              { loc: [0, 25], title: "Referential 'Opacity'" },
              { loc: [6, 7], note: "output: 2" },
              { loc: [7, 8], note: "increment bar" },
              { loc: [8, 9], note: "output: 3" },
              { loc: [6, 9], note: "output influenced by external factors. not solely dependent on the input 1. we used the same input twice but got two different outputs."}
            ]}
          />
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
