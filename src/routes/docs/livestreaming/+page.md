---
title: Livestreaming
description: Broadcast the FreeShow output to livestream platforms.
---

# Livestreaming

Currently the best way to livestream is to use a program called [OBS Studio](https://obsproject.com/), this is 100% free and optimized for this purpose. By sending NDI outputs from FreeShow to OBS you can get full transparency support, but for that you would need [this OBS Plugin](https://github.com/DistroAV/DistroAV).

### Setting up OBS control from FreeShow

FreeShow supports controlling OBS directly, so you don't need to switch back and forth, just leave OBS open in the background and control your stream from FreeShow. To use that feature you must enable the WebSocket server in OBS. Go to **Tools > WebSocket Server Settings** and make sure **Enable WebSocket server** is turned on. Then go to **Functions > OBS** in FreeShow and click **Connect**.
