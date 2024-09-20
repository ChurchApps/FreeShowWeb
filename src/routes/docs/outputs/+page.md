---
title: Outputs
description: With FreeShow you can have multiple different outputs.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Multiple outputs

> In the [output settings](./output#settings) you can add as many outputs as you would like.

:::admonition type=tip
You can enable or disable each individual output. It's recommended to have different colors for different outputs.
:::

## How to use

When you have more than one output active you will get some buttons over the output preview on the right side, where you can click on them to toggle the active output windows, or hold <Key>CTRL/CMD</Key> to select just one. And right click any of them to show or hide individual windows.

When starting a show, or clearing layers it will only change the selected output windows.

### Specific outputs

When right clicking a slide or a textbox, you can hover over the option "Specific outputs" where you can set it to only show up in one or a few specific outputs.

## Step by step

#### How to create lower third display for a live stream

1. Create a new template for lower third with custom item position/styling.
2. Go to "Outputs" in the settings, and at the bottom click "Add" to create a new output, you can rename the outputs so you have two called e.g. "Congregation" & "Stream".
3. Now go to "Styles" in the settings, and at the bottom click "Add" to create a new style, you can rename the styles so you have two called e.g. "Default" & "Live".
4. In the Live style, make the changes you need. You can apply the custom template with lower thirds, toggle visible layers, even set the lines to 2 to have max two lines, & more!
5. Now go back to "Outputs" and select the "Stream" output, and add the "Live" style to that!
