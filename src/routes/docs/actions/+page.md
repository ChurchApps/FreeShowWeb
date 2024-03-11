---
title: Slide actions
description: Add different actions that will execute when a slide is activated.
---

# Slide actions

> Add different actions that will execute when a slide is activated.

Right click on a slide to add an action. All the actions of a slide will show as a little icon on the slide, click on that to remove the action.

Here is a short summary of all the different actions:

### Next slide timer

Set a value in seconds to automatically change to the next slide starting when the slide is activated. Setting to 0 will never change slide.

### Go to start

When the slide is outputted it will go back to the start of the show when the next slide button is triggered. You can still click on the slides after directly to play them.

### Animate

Add custom animations for text or items, on the selected slides.

### Start show

Trigger another show when a slide with this action is played.

### Next on media finished

This will automatically play the next slide when a video background, audio or timer has ended. This triggers even when the video is set to "loop".

### Start timer

This will start a selected timer when the slide is activated.

### Change output style

Change the style of the output with a slide click. [Click here to read about styles.](./styles)

### Play on MIDI in

This will play this slide when receiving a selected MIDI signal. You can either create a new MIDI action, or select an existing [MIDI action](./midi).

### Send MIDI out

This will send out a selected MIDI signal when the slide is activated.

## Clear actions

These actions will clear the selected layers:

- Stop active timers
- Clear background
- Clear overlays
- Clear audio
