import React from "react";
import {
    Flex,
    Show,
    Spacer
} from '@chakra-ui/react';
import { Probe1, Probe2, Probe3, Probe4 } from "./Probes/Probe";
import './ShowProbes.scss';

const ShowProbes = () => {

    // 현재 date
    const currentDate = new Date();

    // 더미 데이터!!
    const dummyProbes = [
        { colorCode: 1, orbitId: 0, title: "어디로", content: "갈까", createdAt: "2023.06.20" },
        { colorCode: 3, orbitId: 1, title: "멀리", content: "보내자", createdAt: "2023.07.08" }
    ];

    const probes = [<Probe1 inOrbit={true} />,  
        <Probe2 inOrbit={true} />, 
        <Probe3 inOrbit={true} />, 
        <Probe4 inOrbit={true} />]

    const positions = [
        { colorCode: 0, x: "40vw", y: "25vh", degree: 60},
        { colorCode: 2, x: "60vw", y: "50vh", degree: 120 },
      ];

    const calculatePosition = (orbitId, dateArray) => {

    }

    const getPositions = (probes) => {
        probes.map((probe) => {
            const color = probe.colorCode;
            const orbit = probe.orbitId;
            const date = probe.createdAt.split(".");

            const { x, y } = calculatePosition(orbit, date);


        });
    }

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
                </div>
        ))}
          </Flex>
        </Flex>
    );
};

export default ShowProbes;