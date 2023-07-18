import React from "react";
import {
    Flex,
    Show,
    Spacer
} from '@chakra-ui/react';
import { Satellite1, Satellite2, Satellite3, Satellite4 } from "./Satellites/Satellite";
import './ShowSatellites.scss';

const ShowSatellites = ({ isZoomedIn }) => {

    const satellites = [<Satellite1 inOrbit={true} />,  
        <Satellite2 inOrbit={true} />, 
        <Satellite3 inOrbit={true} />, 
        <Satellite4 inOrbit={true} />]

    const positions = [
        { colorCode: 0, x: "10vw", y: "25vh", degree: 20},
        { colorCode: 2, x: "40vw", y: "50vh", degree: -40 },
      ];

    return (
        <Flex
          position='absolute'
          w='100%'
          h='70%'
          top='8%'
          zIndex={2}
          className={`show-container ${!isZoomedIn ? 'visible' : ''}`}
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
                    {satellites[sprite.colorCode]}
                    {/* <Satellite1 inOrbit={true} /> */}
                </div>
        ))}
          </Flex>
        </Flex>
    );
};

export default ShowSatellites;