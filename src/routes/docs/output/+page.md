---
title: Output
description: The output is one or more windows that displays the main content to the audience.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# The output

> The output is one or more windows that displays the main content to the audience.

## Enabling the output

To activate the output window, you have to press the button with an arrow in the top right corner. The button is red when the output window is active. Right under the button you have an output preview that shows the same as in the window, there is also an audio visualizer to the right of the preview. If you get a popup stating that the output can't display you have to click on the correct screen.

:::admonition type=tip

Double click the window to hide it.

Hold <Key>CTRL/CMD</Key> while hovering over the output window to show a drag bar at the top.

:::

## Settings

You can find the output settings by clicking the gear icon in the top right, and choosing "Outputs" from the left menu. Here you can change a lot of things, you can add [multiple outputs](./outputs), change the output style, or event enable an alpha key output.

You can also disable always on top, if you want to hide a output behind another window. This is useful if you want to capture the window using another program. This will also make the window resizable.

On Mac and Linux you also get the option to enable kiosk mode. Try enabling this if you have some issues with the window.

But if you want to change the position of the current output window, try this:

- Click "Choose screen", and follow the instructions on screen.
- If you have to change the output values manually then change the X/Y values (use the mouse wheel to change faster) until you can see the window over the screen.
- Remember to click the button in the top right to enable the output windows. It should be red when activated.

:::admonition type=info

If the preview frame rate is slow. You can go to settings, then "Other", and change the "Preview frame rate" from "Auto" to "Full". This will prevent the preview capture from slowing down at over 95% CPU usage, but keep in mind that this might slow down the main output!

:::

## Controls

Right under the output preview area on the right you will find some output controls.

Click the first or last buttons to change the current project element (same as arrow down/up on the keyboard). The next buttons are for changing the current slide in the currently outputted show (same as arrow left/right on the keyboard, or the spacebar). And in the center there is a button to lock the output, meaning it's not possible to change the output until unlocked. And lastly there is a play/reset button, that will play the selected show or replay the current outputted slide with any changes.

## Layers

The output has different layers, which determines what gets priority over what. Backgrounds are shown under all the other layers, then slides and overlays. After that comes audio and slide timers, but they are not visual. Each layer can be toggled on or off independently of each other.

You can see all the layers in the "Show" view, on the right side right under the "Clear all" button, under the controls. If a layer is active you can click on it to clear it, also click the little almost invisible button right under to see more info, like media controls for the background.

Press the big "Clear all" button to clear all layers.
