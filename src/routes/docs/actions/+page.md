---
title: Slide Actions
description: Add different actions that will execute when a slide is activated.
---

# Slide Actions

> Add different actions that will execute when a slide is activated.

Right click on a slide to add an action. All the actions of a slide will show as a little icon on the slide, click on that to remove the action.

Here is a short summary of all the different actions:

### Start action

Start many different useful actions, incuding ones to clear the active layer. Read [more here](./functions#actions).
Here is a short list of some of them:

- **Start show:** Trigger another show when a slide with this action is played.
- **Start timer:** This will start a selected timer when the slide is activated.
- **Change output style:** Change the style of the output with a slide click. [Click here to read about styles.](./styles)
- **Send MIDI out:** This will send out a selected MIDI signal when the slide is activated.
- **Clear actions:** Clear background layer, overlays, audio or stop active timers.

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

## FAQ

- **How to play a specific slide?**

  An action can be set to play a slide by name or index on the currently selected show. If you need a specific show, you might have to set an action to change the show as well. But you can also right click a slide, and use the activate by MIDI signal if you want to activate a slide using a MIDI signal.

- **What is the purpose of "Toggle action"?**

  This is only needed if the action has a "Custom activation", that you only want to use in some occasions, so you can turn on/off this action using another action triggered from a slide.

- **What is ID, and how to use it?**

  They are a unique identifier for the specific item, you can find them in the stored app data file location. Should be used in specific scenarios. But it's recommended to just use the "select by name" instead.
