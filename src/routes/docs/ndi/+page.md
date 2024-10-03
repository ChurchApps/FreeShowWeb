---
title: NDI
description: Send outputs over IP, useful for streaming.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# NDI®

> Send outputs over IP, useful for streaming.

## What's NDI?

NDI stands for Network Device Interface, and enables high-definition video to be sent and received over a computer network with low-latency. In FreeShow it is used to send multiple output streams, it also supports transparent videos. The streams can be received and used by a streaming software such as OBS or vMix. It is recommended to use ethernet connection.

## Enabling

Go to any [output](./output), and enable the checkbox for NDI®. Note that this is currently not supported by Linux. You can change the framerate after enabling, default is 30 fps.

You can also enable "Transparent" to send e.g. just the text to a streaming software like OBS.

:::admonition type=info

It's worth noting that sending or receiving data over NDI is processor intensive on the computer, and also uses a considerable amount of bandwidth if sent over a network.

:::

## Using with OBS

FreeShow sends the streams as "FreeShow NDI - _output name_". See this tutorial to learn [how to capture and output with OBS](https://streamgeeks.us/how-to-use-ndi-with-obs/).

## Troubleshooting

- Use an ethernet cable if possible, because it is more reliable and less prone to latency.
- Make sure both the sending and receiving device are in the same network subnet.
- Download NDI Tools from NewTek's official website, and use the Monitor on the same device as FreeShow, to diagnose if the problem is on the network or directly from the FreeShow output.

## Step by step

#### How to create a custom NDI output for live stream

1. Go to "Outputs" in the settings, and at the bottom click "Add" to create a new output, you can rename the outputs so you have two called e.g. "Congregation" & "Stream".
2. Now go to "Styles" in the settings, and at the bottom click "Add" to create a new style, you can rename the styles so you have two called e.g. "Default" & "NDI".
3. In the NDI style, make the changes you need. You can apply a custom template with lower thirds, click on the "Background" layer to toggle it off, set the lines to 2 to have max two lines, & more!
4. Now go back to "Outputs" and select the "Stream" output, and add the "NDI" style to that!

Remember that if you want to show a video on the stream you need to change the output style of the stream (this can also be automated using slide actions).
