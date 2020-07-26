import fs from 'fs';
import React from 'react';
import { Animation } from '@urban-bot/core';
import filepath from '../assets/animation.gif';

const file = fs.createReadStream(filepath);

export function AnimationExample() {
    return <Animation file={file} title="There is the animation" name="File Name" />;
}
