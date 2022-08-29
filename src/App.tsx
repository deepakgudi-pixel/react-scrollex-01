import {Scroll } from "scrollex";
import {Center, chakra, Img} from "@chakra-ui/react";
import {images} from "./components/Data";
import { keyframes } from "./components/Keyframes";



const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);


export default function App() {
  return (
    <ScrollContainer
     height="100vh"
     bg="#d7d7d7"
    >
      {
        images.map((image)=>{
          return (
          <ScrollSection
          height="100vh"
          >
            <Center
            pos="fixed"
            inset={0}
            style={{ perspective: 600, transformStyle: "preserve-3d" }}
            >
              <ScrollItem
              keyframes={keyframes.imageContainer}
              overflow="hidden"
              >
                <ScrollItem keyframes={keyframes.image}  
                  h="300px"
                  w="200px"
                  >
                  <Img
                  key={image}
                  src={image}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  />
                </ScrollItem>
              </ScrollItem>
            </Center>
          </ScrollSection>)
        })
      }

    </ScrollContainer>
  )
}
