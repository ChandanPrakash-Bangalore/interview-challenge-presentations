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


const images = {
  allen: require("../../assets/selection-sort/allen.gif"),
  algorithm: require("../../assets/selection-sort/algorithm.gif"),
  pooh: require("../../assets/selection-sort/pooh-bear-thinking.gif")
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
              Selection Sort
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Breaking It Down
            </Text>
            <Image src={images.allen} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Game Plan</Heading>
            <Heading size={5} textColor="secondary">Algorithm Breakdown</Heading>
            <Heading size={5} textColor="secondary">Code Review</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
            <Heading size={5} textColor="primary" caps>Selection Sort</Heading>
            <Heading size={6} textColor="secondary" caps>Breaking Down The Algorithm</Heading>
            <Appear>
              <Image src={images.algorithm} margin="0px auto 0px" height="100px" width="500px"/>
            </Appear>
            <Appear>
             <p>
              <S type="bold">
                1) Iterate over array. Assume value in current index is smallest. 
                Save current index to a variable.
              </S>
             </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  2) For every index, launch a second loop through remainder of array. 
                  If find a smaller number, update variable with smaller number's index.
                </S>
              </p>
            </Appear>
            <Appear>
              <p>
                <S type="bold">
                  3) Upon reaching end of the array, switch the number in the current index with the number at the index saved to our variable. 
                  Repeat.
                </S>
              </p>
            </Appear>
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../assets/selection-sort/selection-sort.code-skeleton")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Image src={images.pooh} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../assets/selection-sort/selection-sort.code-explicit")}
              margin="20px auto"
            />
          </Slide>
          <CodeSlide
            transition={["zoom", "fade"]}
            lang="js"
            code={require("raw-loader!../../assets/selection-sort/selection-sort.code-explicit")}
            ranges={[
              { loc: [0, 50], title: "Selection Sort" },
              { loc: [1, 2], note: "kick off main loop" },
              { loc: [2, 3], note: "store current index in the variable min" },
              { loc: [3, 4], note: "for every index, loop over remainder of array" },
              { loc: [4, 5], note: "if we find a smaller number" },
              { loc: [5, 6], note: "reassign our min variable to point to that number's INDEX"},
              { loc: [3, 8], note: "job of this loop is to find index of smaller number and save it"},
              { loc: [8, 9], note: "if smaller number exists, its index will be greater than i, our current index"},
              { loc: [9, 12], note: "so we do the work of switching the numbers"}
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
