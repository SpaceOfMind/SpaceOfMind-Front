import React from "react";
import { Box } from '@chakra-ui/react';
import './Probe.scss';

export const Probe1 = ({ inOrbit }) => {
    return (
        <Box 
            className={`probe-container ${ inOrbit ? 'small' : ''} probe-1`}
        />
    );
};

export const Probe2 = ({ inOrbit }) => {
    return (
        <Box 
            className={`probe-container ${ inOrbit ? 'small' : ''} probe-2`}
        />
    );
};

export const Probe3 = ({ inOrbit }) => {
    return (
        <Box 
            className={`probe-container ${ inOrbit ? 'small' : ''} probe-3`}
        />
    );
};

export const Probe4 = ({ inOrbit }) => {
    return (
        <Box 
            className={`probe-container ${ inOrbit ? 'small' : ''} probe-4`}
        />
    );
};