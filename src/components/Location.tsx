import React from 'react';
import { Location, Text, useText } from '@urban-bot/core';

export function LocationExample() {
    const [latitude, setLatitude] = React.useState(60.734539);

    useText(({ text }) => {
        setLatitude(Number(text));
    });

    return (
        <>
            <Text>Write a new latitude</Text>
            <Location latitude={latitude} longitude={77.608548} livePeriodSeconds={500} />
        </>
    );
}
