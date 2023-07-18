import React from "react";
import {
    Flex,
    Show,
    Spacer
} from '@chakra-ui/react';
import { Probe1, Probe2, Probe3, Probe4 } from "./Probes/Probe";
import './ShowProbes.scss';

const ShowProbes = () => {

    const probes = [<Probe1 inOrbit={true} />,  
        <Probe2 inOrbit={true} />, 
        <Probe3 inOrbit={true} />, 
        <Probe4 inOrbit={true} />]

    const positions = [
        { colorCode: 0, x: "40vw", y: "25vh", degree: 60},
        { colorCode: 2, x: "60vw", y: "50vh", degree: 120 },
      ];

    return (
        <Flex
          position='absolute'
          w='100%'
          h='90%'
          top='10%'
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
                        transform: `rotate(${sprite.degree}deg)`,
                    }}
                >
                    {probes[sprite.colorCode]}
                    {/* <Satellite1 inOrbit={true} /> */}
                </div>
        ))}
          </Flex>
        </Flex>
    );
};

export default ShowProbes;