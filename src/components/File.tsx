import fs from 'fs';
import React from 'react';
import { File } from '@urban-bot/core';
import filepath from '../assets/README.md';

const file = fs.createReadStream(filepath);

export function FileExample() {
    return <File file={file} title="There is the file" />;
}
