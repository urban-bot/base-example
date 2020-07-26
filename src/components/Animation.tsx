import React from 'react';
import { Animation } from '@urban-bot/core';
import filepath from '../assets/animation.gif';

export function AnimationExample() {
    return <Animation file={filepath} title="There is the animation" name="File Name" />;
}
