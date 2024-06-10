---
title: MIDI actions
description: Trigger different actions when receiving a MIDI signal.
---

# MIDI actions

> Trigger different actions when receiving a MIDI signal.

In the drawer you can add different actions that is triggered when receiving a MIDI in signal. You can also click on exising actions to trigger them directly. [Read more about actions here.](./functions#actions)

## Editing actions

When creating or editing an action you can choose to enable "Activate by MIDI signal". FreeShow has some default values for all of the actions, but you can set your own values by disabling the "Use default values" switch.

Here is a short summary of some of the different actions:

## Show actions (Channel 1)

### Next slide

This is the same as pressing the arrow right key on the keyboard. This will go to the next slide if a show is outputted, or play the first slide if a show is selected.

### Previous slide

This is the same as pressing the arrow left key on the keyboard. This will go to the previous slide if a show is outputted, or play the last slide if a show is selected.

### Next show

This is the same as pressing the arrow down key on the keyboard. This will go to the next element in the selected project.

### Previous show

This is the same as pressing the arrow up key on the keyboard. This will go to the previous element in the selected project.

### Go to group

This will trigger a group in the selected show or if the group is selected it will play the next same group in the show.

## Clear actions (Channel 3)

These actions will clear the selected layers:

- Clear all
- Clear background
- Clear slide
- Clear overlays
- Clear audio
- Clear next slide timer

## Style actions (Channel 4)

### Change output style

Change the style of the output. [Click here to read about styles.](./styles)

## Select by index actions (Channel 5)

The following actions will select an element using the velocity value as the index. This will trigger the first if no velocity is set.

- "Project"
- "Project item" in active project
- "Slide" in outputted or active show
