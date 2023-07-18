import React from "react";
import { Box } from '@chakra-ui/react';
import './Satellite.scss';

export const Satellite1 = ({ inOrbit }) => {
    return (
        <Box 
            className={`sateliite-container ${inOrbit ? 'small' : ''} satellite-1`}

        />
    );
};

export const Satellite2 = ({ inOrbit }) => {
    return (
        <Box 
            className={`sateliite-container ${inOrbit ? 'small' : ''} satellite-2`}
        />
    );
};

export const Satellite3 = ({ inOrbit }) => {
    return (
        <Box 
            className={`sateliite-container ${inOrbit ? 'small' : ''} satellite-3`}
        />
    );
};

export const Satellite4 = ({ inOrbit }) => {
    return (
        <Box 
            className={`sateliite-container ${inOrbit ? 'small' : ''} satellite-4`}
        />
    );
};