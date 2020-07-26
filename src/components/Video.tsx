import fs from 'fs';
import React from 'react';
import { Video } from '@urban-bot/core';
import filepath from '../assets/video.mp4'

const file = fs.createReadStream(filepath);

export function VideoExample() {
    return <Video file={file} title="There is the video" />;
}
