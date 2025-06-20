---
title: Actions
description: Create actions to automate tasks and simplify the workflow. Actions can do most of the things that otherwise would have had to be done manually.
---

# Actions

> Create actions to automate tasks and simplify the workflow. Actions can do most of the things that otherwise would have had to be done manually.

Actions can be found in the "Functions" tab in the drawer. They can be triggered with a click, with a shortcut, with a custom scenario, or triggered when a slide is activated.

## Slide actions

Right click on a slide to add an action, or drag one from the drawer. All the actions of a slide will show as a little icon on the slide, click on that to remove the action.

## Category Actions

You can right click a show category to add a certain action to that, that will trigger each time a show in that certain category is triggered.

If you add the "Run action" slide action and enable the "Override category action" option, or hold CTRL/CMD while dragging an action to a slide it will be set to override the current category action on that slide, when another slide is played after, the category action will be triggered again.

## Project Section Actions

In the bottom right of a project section there is a "Settings" button, click this to get some options to set a specific action that will trigger for either all sections, or just the selected one. Note that it will not trigger when just opening the section, as you should be able to navigate the project without triggering anything. But it's triggered when you are on the last slide in the sohw before and then press arrow right to go to next.

## Show actions

At the bottom of a show there is a flag icon on a button, click this to add a specific action to that button. This is a custom action button that can do whatever you would like to for that show, like start a timer, set a variable value, or anything.

## Overview

Here is a short summary of some of the different actions:

### Start action

Start many different useful actions, incuding ones to clear the active layer. Read [more here](./functions#actions).
Here is a short list of some of them:

-   **Start show:** Trigger another show when a slide with this action is played.
-   **Start timer:** This will start a selected timer when the slide is activated.
-   **Change output style:** Change the style of the output with a slide click. [Click here to read about styles.](./styles)
-   **Send MIDI out:** This will send out a selected MIDI signal when the slide is activated.
-   **Clear actions:** Clear background layer, overlays, audio or stop active timers.

### Activate on MIDI signal

Start the exact selected slide when receiving a specified MIDI input signal.

### Next slide timer

Set a value in seconds to automatically change to the next slide starting when the slide is activated. Setting to 0 will never change slide.

### Go to start

When the slide is outputted it will go back to the start of the show when the next slide button is triggered. You can still click on the slides after directly to play them.

### Next on media finished

This will automatically play the next slide when a video background, audio or timer has ended. This triggers even when the video is set to "loop".

### Animate

Add custom animations for text or items, on the selected slides.

### Emitters

In the bottom right you can click "Manage emitters" to create emitters used to send OSC/HTTP messages, this way you can set up message templates that can be used with the "Emit data" action. For one emitter you must set the receiver signal location. Then it's ready to be used, but adding message templates can be useful. If the "Value" field is empty you can add a custom value to that later, if not it will be fixed to the set value. If the type is OSC the "Name" input can be set to anything.

## FAQ

-   **How to play a specific slide?**

    An action can be set to play a slide by name or index on the currently selected show. If you need a specific show, you might have to set an action to change the show as well. But you can also right click a slide, and use the activate by MIDI signal if you want to activate a slide using a MIDI signal.

-   **What is the purpose of "Toggle action"?**

    This is only needed if the action has a "Custom activation", that you only want to use in some occasions, so you can turn on/off this action using another action triggered from a slide.

-   **What is ID, and how to use it?**

    They are a unique identifier for the specific item, you can find them in the stored app data file location. Should be used in specific scenarios. But it's recommended to just use the "select by name" instead.
