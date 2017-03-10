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
  stacks: require("../../../assets/solutions/queue-stack/stacks-on-stacks.gif")
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
              Queue Stack
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Code Breakdown
            </Text>
            <Image src={images.stacks} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../../assets/solutions/queue-stack/stack.code")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide", "fade"]} bgColor="tertiary">
            <CodePane
              lang="js"
              source={require("raw-loader!../../../assets/solutions/queue-stack/queue.code")}
              margin="20px auto"
            />
          </Slide>
          <CodeSlide
            transition={["slide", "fade"]}
            lang="js"
            code={require("raw-loader!../../../assets/solutions/queue-stack/queue-stack.solution")}
            ranges={[
              { loc: [0, 80], title: "Queue Stack" },
              { loc: [0, 16], note: "define a stack" },
              { loc: [19, 21], note: "we have our two stacks" },
              { loc: [22, 25], note: "enqueue works the same as a normal queue"},
              { loc: [26, 36], note: "dequeue will be more involved"},
              { loc: [27, 30], note: "we need to empty inbox and push everything into outbux while doing so"},
              { loc: [30, 31], note: "popping off outbox gives first item in inbox - we save it in temp"},
              { loc: [31, 34], note: "now we have to empty the outbox and put everything back into the inbox"},
              { loc: [34, 35], note: "we return the value we saved to temp as the dequeued number"}
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
