---
title: Output
description: The output is one or more windows that displays the main content to the audience.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# The output

> An output is one or more windows that display a project's show content on physical or virtual displays for presentation.

## Layers

The output(s) in FreeShow have several stacked layers. Think of these layers as a stack of paper, but some of them are mostly transparent.
![Three layers stacked and skewed diagonally, a background picture with a sunrise over the ocean and over it the text layer that says "Welcome to Church!" and on the top an overlay with a clock that says "8:30AM"](/images/docs/Layers_exploded.webp "Background, Slide, and Overlay layers stacked on top of one another")
Backgrounds are the bottom layer in the stack. On top of that are slides (text) and overlays. This layers merge together on top of each other to make the final visual output.
![All three layers described above merged into one image that would be presented](/images/docs/Layers_merged_together.webp "The three visual layers merged together to form the output")

The last two layer are not visual. They are the audio and slide timer layers.

Each layer can be toggled off independently of each other. The visual layers can each be set as active or nonactive layers in the styles for outputs in Settings.

You can see all the layers in the "Show" view, on the right side right under the "Clear all" button, under the controls. ![Green arrow pointing to the location of the little almost invisible layer info buttons under the clear buttons](/images/docs/Output-little_almost_invisible_layer_info_buttons.webp "Clear layer buttons all active (red background)
Clear All (on top), Background, Slide, Overlays, Audio, Slide timer
The green arrow points to the location of the little almost invisible layer info buttons") If a layer is active you can click on it to clear it, also click the little almost invisible button right under to see more info, like media controls for the background. 

Click the big "Clear all" button to clear all layers. ![The background and slide layer buttons  are active and have a red background, while the overlay, audio and slide timer layers are not active and their buttons have a dark gray background.](/images/docs/Output-Clear_controls_background_and_slide_active.webp "In this image only the background and slide layers are active (buttons have a red background), while the overlay, audio and slide timer layers are not (buttons with dark gray background)")

Click the Restore Output button to restore all layers in the current slide.
![Restore Output Button above clear layers buttons](/images/docs/Output-Clear_controls_restore_output.webp "Restore Output Button above clear layers buttons")

## Enabling the output

To activate the output window(s), press the present button (up arrow) in the top right corner or press Ctrl/CMD+O. ![Presentation Button](/images/docs/Output-Presentation_button.webp "Present Button") The button is red when the output window(s) are active. ![Stop Presentation Button](/images/docs/Output-Presentation_button-Stop.webp "Red Stop Presentation Button") To stop presenting click the button twice. If you only click it once it will remind you to click it again.![Red Stop Presentation Button](/images/docs/Output-Presentation_button-Stop-Click_again_to_confirm.webp "Click the red Stop Presentation Button a second time to confirm you want to stop presenting")

:::admonition type=tip
You can also use the shortcut key <Key>CTRL/CMD+O</Key> to stop presenting. FreeShow will do this right away and will not ask for confirmation.
:::

Right under the presentation button are output preview(s) that show the same content as the output window(s), and to monitor sound levels there is an audio meter to the right of the previews (vertical green bars).
![FreeShow Output Previews](/images/docs/Output-Preview_windows.webp "output previews")

If you get a popup stating that the output can't display you have to select the display you want to use by clicking on it.
![Choose screen popup window](/images/docs/Choose_screen_popup.webp)


:::admonition type=tip

Double click on the output window to disable it. This is useful to know in case an output window positions itself on top of the main FreeShow window. 

Hold <Key>CTRL/CMD</Key> while hovering over the output window to show a drag bar at the top. 

:::

## Controls

Right under the output preview area on the right you will find some output controls.
![Row of control buttons: left arrow, right arrow, circular line with arrowhead, unlocked padlock, filled and outline circle that overlap in the middle](/images/docs/Output-Control_buttons.webp "Control buttons: Previous Slide, Next Slide, Update Output, Lock Output, and Transition") ![Row of control buttons: left arrow, right arrow, play button, locked padlock with red background, filled and outline circle that overlap in the middle](/images/docs/Output-Control_buttons_with_start_show_and_locked_padlock_buttons.webp "Row of control buttons: Previous Slide, Next Slide, Start Show, Unlock Output, and Transition")
The first two buttons _Previous Slide_ and _Next Slide_ are for changing the current slide in the current show that is being shown on the outputs (arrow left/right on the keyboard). The center button either, _Start Show_ or _Update Output_ that will play the selected show or replay the currently being presented slide with any changes. The padlock button locks and unlocks the all outputs. This means the outputs will not change until it is unlocked.

:::admonition type=tip

In addition to being able to lock all outputs, each individual output's lock status can be toggled by clicking on the title bar of its preview window. A colored dot shows the status of each output.

#### Output Statuses
- Green - Active, presenting
- Red - Inactive, not presenting
- Blue - NDI Connected
- Grey - Disconnected invisible window, most likely disconnected NDI
- Yellow - Output is locked, the output content will not change until it is unlocked. The title for a locked preview window has a strike through its name to alert you that in is currently locked.

![Preview windows with all possible statuses](/images/docs/Output-Preview_windows_with_all_possible_statuses.webp "Preview windows with all possible statuses - NOTE: The outputs have been named the same as their statuses in this screenshot for demonstration purposes.")

:::
## Transitions

The rightmost button under the preview window(s) _Transition_, changes the global transitions. Clicking this will give you a popup with various different transition types, and different options for text/media etc.
![Transition popup](/images/docs/Output-Transition_popup.webp "Transition popup")
In addition to the global transitions, you can also set transitions per textbox, slide & output! If a transition is set on a slide that will apply to all the textboxes, but if a single textbox has its own transition that will be prioritized. Transitions are prioritized in this order: **Textbox** > **Slide** > **Output Style** > **Global Transitions**.

:::admonition type=tip

Press "Enable more specific transitions" for more customizability. This gives you the ability to set different transitions for **In** & **Out**. Also for slides you can set **Between** transitions, this means simply that if a slide layer is already active **Between** will be used until it is cleared, then the **Out** will trigger.

:::

## Settings

You can find the output settings by clicking the gear icon in the top right, and choosing "Outputs" from the left menu. One can add [multiple outputs](./outputs), change the output style, enable [NDI](./ndi), and more.

Click on "Add" at the bottom to create a new output, you can choose between a normal output, or a [stage output](./stage#output-window). At the bottom you can right-click on the output you created to change e.g. the color, this can be useful to identify outputs if you have multiple outputs.
![Adding colors to outputs helps identify them with colored borders and underlines](/images/docs/Output-Preview_windows_with_colored_borders.webp "Adding colors to outputs helps identify them with colored borders and underlines ")

### Window

Under Window you can select the physical display to set the output to. If the _Invisible window_ setting (Under NDI settings) has been turned on you can then only set the size of the output.

You can disable _Always on top_, if you want to hide a output behind another window. This is useful if you want to capture the window using another program. This will also make the window resizable.

But if you want to change the position of the current output window, try this:

- Click "Choose screen", and follow the instructions on screen.
- If you have to change the output values manually then change the X/Y values (use the mouse wheel to change faster) until you can see the window over the screen.
- Remember to click the button in the top right to enable the output windows. It should be red when activated.
