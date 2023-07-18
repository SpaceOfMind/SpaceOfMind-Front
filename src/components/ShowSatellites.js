import React from "react";
import {
    Flex,
    Show,
    Spacer
} from '@chakra-ui/react';
import { Satellite1, Satellite2, Satellite3, Satellite4 } from "./Satellites/Satellite";

const ShowSatellites = () => {

    const positions = [
        { x: "10vw", y: "25vh" },
        { x: "40vw", y: "50vh" },
        // { x: "0vw", y: "0vh" },
        // { x: "100vw", y: "100vh" },
      ];


    return (
        <Flex
          position='absolute'
          w='100%'
          h='70%'
          top='8%'
          zIndex={2}
        >
          <Flex
            position="relative"
            w='100%'
            h='100%'
            // bg='yellow.100'
          >
            {positions.map((sprite, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        left: sprite.x,
                        top: sprite.y,
                    }}
                >
                    <Satellite1 />
                </div>
        ))}
          </Flex>
        </Flex>
    );
};

export default ShowSatellites;