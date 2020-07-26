import fs from 'fs';
import React from 'react';
import { Media } from '@urban-bot/core';
import filepath1 from '../assets/logo_1.jpg'
import filepath2 from '../assets/logo_2.jpg'

const file1 = fs.readFileSync(filepath1);
const file2 = fs.readFileSync(filepath2);

export function MediaExample() {
    return (
        <Media
            files={[
                {
                    type: 'image',
                    file:file1,
                    title: 'Logo 1',
                },
                {
                    type: 'image',
                    file: file2,
                    title: 'Logo 2',
                },
                // {
                //     type: 'video',
                //     file: videoByFile,
                //     title: 'video1',
                // },
            ]}
        />
    );
}
