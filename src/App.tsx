import dotenv from 'dotenv';
import React from 'react';
import { Route, Router, Notification, Text } from '@urban-bot/core';
import { TextExample } from './components/Text';
import { Hooks } from './components/Hooks';
import { ImageExample } from './components/Image';
import { Queue } from './components/Queue';
import { AudioExample } from './components/Audio';
import { VideoExample } from './components/Video';
import { FileExample } from './components/File';
import { PollExample } from './components/Poll';
import { AnimationExample } from './components/Animation';
import { ContactExample } from './components/Contact';
import { MediaExample } from './components/Media';
import { LocationExample } from './components/Location';
import {
    ButtonsExample,
    ReplyButtonsExample,
    MatrixButtonsExample,
    MatrixButtonsMaxColumnsExample,
} from './components/ButtonGroup';
import { RouterExample } from './components/Router';
import { FlatDialogExample, TreeDialogExample } from './components/Dialog';

dotenv.config();

export function App() {
    return (
        <Router withInitializeCommands>
            <Route path="/flat_dialog" description="Build a simple dialog">
                <FlatDialogExample />
            </Route>
            <Route path="/tree_dialog" description="Build a dialog with different scenarios">
                <TreeDialogExample />
            </Route>
            <Route path="/image" description="Image with buttons example">
                <ImageExample />
            </Route>
            <Route path="/text" description="Text with formatting">
                <TextExample />
            </Route>
            <Route path="/buttons" description="Inline buttons">
                <ButtonsExample />
            </Route>
            <Route path="/reply_buttons" description="Buttons inside keyboard">
                <ReplyButtonsExample />
            </Route>
            <Route path="/matrix_buttons" description="Inline matrix buttons">
                <MatrixButtonsExample />
            </Route>
            <Route path="/matrix_buttons_max_columns" description="Auto split buttons">
                <MatrixButtonsMaxColumnsExample />
            </Route>
            <Route path="/queue" description="Managed message queue">
                <Queue />
            </Route>
            <Route path="/hooks" description="User events">
                <Hooks />
            </Route>
            <Route path="/audio" description="Audio example">
                <AudioExample />
            </Route>
            <Route path="/video" description="Video example">
                <VideoExample />
            </Route>
            <Route path="/file" description="File example">
                <FileExample />
            </Route>
            <Route path="/poll" description="Poll example">
                <PollExample />
            </Route>
            <Route path="/contact" description="Contact example">
                <ContactExample />
            </Route>
            <Route path={new RegExp('/regexp*')}>
                <Text>You could use RegExp path</Text>
            </Route>
            <Route path="/animation" description="Animation example">
                <AnimationExample />
            </Route>
            <Route path="/media" description="Several images or video example">
                <MediaExample />
            </Route>
            <Route path="/location" description="Location example">
                <LocationExample />
            </Route>
            <Route path="/router" description="Basic Router usage">
                <RouterExample />
            </Route>
            <Route path="/notification" description="Send messages one time every seconds">
                <Notification intervalSeconds={2}>
                    <Text>Ping every two second</Text>
                </Notification>
            </Route>
            <Route path="/start" description="Navigation">
                <Text isNewMessageEveryRender>
                    Hi! It's an example of <i>Urban Bot</i> base components and hooks. Please choose a command.
                    <br />
                    <br />
                    /text
                    <br />
                    /image
                    <br />
                    /buttons
                    <br />
                    /reply_buttons
                    <br />
                    /matrix_buttons
                    <br />
                    /matrix_buttons_max_columns
                    <br />
                    /hooks
                    <br />
                    /flat_dialog
                    <br />
                    /tree_dialog
                    <br />
                    /queue
                    <br />
                    /audio
                    <br />
                    /video
                    <br />
                    /file
                    <br />
                    /poll
                    <br />
                    /contact
                    <br />
                    /animation
                    <br />
                    /media
                    <br />
                    /location
                    <br />
                    /router
                    <br />
                    /notification
                </Text>
            </Route>
        </Router>
    );
}
