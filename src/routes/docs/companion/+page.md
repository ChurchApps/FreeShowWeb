---
title: Bitfocus Companion
description: A module in the popular program Bitfocus Companion for integration and controlling from external sources.
---

# Bitfocus Companion Module

> Use the FreeShow Companion module to update the state of the program from external sources. (e.g. Streamdeck)

The first step is to install the [Companion software](https://bitfocus.io/companion).

When the interface opens, you have to click "Launch GUI", that will open a webview where you can install the "ChurchApps: FreeShow" module.

If you can't find the module you can install it manually [from GitHub](https://github.com/vassbo/churchapps-freeshow), and open it by clicking on the gear icon in the top right, and selecting the folder with the downloaded module.

## Connecting

After you have added the FreeShow module you have to make sure that the "Destination IP" is set to the IP of the computer where FreeShow is installed.

Then go to the settings in FreeShow, and in "Connection" make sure the "Bitfocus Companion" option is turned on, and make sure the port here is the same as in the module (should be 5505).

## Buttons

In the Companion configuration you can go to the "Buttons" page to add triggers. Press an empty area and then "Create button". Under "Press actions" you can import an action going to FreeShow. It's recommended to go to the "Presets" menu, and just drag in the configured buttons.
