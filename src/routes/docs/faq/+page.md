---
title: FAQ
description: Answers to general frequently asked questions for FreeShow.
---

# FAQ

> Answers to general frequently asked questions for FreeShow.

### Can I migrate from another program?

Yes! Click "File" in the top left, then "Import" and select your program, all the most common ones are supported.

### How to import a PowerPoint presentation?

Currently you can select the PowerPoint option in "File">"Import" to import just the text, useful for lyrics. If you want the style of the presentation then you can import as PDF or images, make sure to convert the PPT file first.

Lastly if you need all the animations as well use PowerPoint to present (probably good to turn off "Always on top" in the "Outputs" settings in that case). Or if you are more advanced embed an online presentation using the [website item](./items#website).

### Multilingual scriptures

This is possible with [scripture collections](./scripture#create-a-collection).

### Multilingual songs

FreeShow has integrated translation! Click the globe/translation button at the bottom of a show to automatically translate a song into another language! Choose from over 240 languages.

### Videos are muted

By default if you drop one video into a show it will be treated as a background, meaning it's muted & looping by default, but [you can change this](./media#play-audio-from-backgrounds). But by dropping more than one video, or dropping a video into your project it will be unmuted & not looping by default!

### Planning Center Integration?

FreeShow allows you to connect your Planning Center account, and automatically sync your services planned ahead of time. Go to the "Connections" tab in the settings, and connect your account, then FreeShow will automatically download any future services within one week on startup.

### CCLI Integration?

Unfortunately CCLI has discontinued their API, meaning it's impossible for us to add integration. They still support programs that already has used their API, but are unwilling to collaborate with us. Read [more here](https://github.com/ChurchApps/FreeShow/issues/572#issuecomment-2163179642).

### Cloud sync between two computers

Cloud sync is possible. FreeShow has a integrated support for syncing all the data files [using Google Drive](./drive), this is completely free.

If you also want to sync media files as well, you will need to use a custom sync like OneDrive, the Google Drive desktop app or another free alternative. Read [more here](https://github.com/ChurchApps/FreeShow/issues/402)!

### Can I control FreeShow from custom software?

Yes, you can send [MIDI signals](./midi) to trigger actions, or use the [Bitfocus Companion plugin](./companion), or set up your own API connection, using the [FreeShow API](/api)!

### Text style not showing up in output

This might mean that you have set a custom output style with a template that overrides the new style. To fix go to settings>"Styles", and take off any template set here. Optionally remove the style entirely from the output in "Outputs".

### Right click does not work properly on macOS

A bug in some versions of macOS makes right clicking by pressing two fingers on the trackpad behave different to right clicking with Ctrl+trackpad or using an external mouse. Please resort to one of the two other alternatives if the first one does not work!

### The app is slow

First of all the app will most likely run slow on older computers. But you can improve the performance by making sure you do not use any feature requiring screen capture. These features should all be turned off for the best performance (if you do not use them):

1. Any output with the NDI option enabled
2. Any stage layout with a "Current output" item
3. "OutputShow" in the "Connections" settings

Another thing you can try is to toggle "Disable hardware acceleration" in the settings. By default it's disabled because some videos has stuttering issues with it enabled, but enabling it should lead to greater performance on some computers.

### FreeShow keeps freezing

If you experience that the UI stops resonding to your clicks this is due to a bug in the code, please remember what you did just before this happened, and create a new [issue about it on GitHub](https://github.com/ChurchApps/FreeShow/issues/). And please also attach the error log file found in the settings>"Other">"Open log file". This will help us track down the issue and fix it!

### Flagged falsly as virus

Some antivirus programs might flag the program as a virus, this is most likely due to the included PowerPoint controller, as it has to spawn a system command shell to use it. But this can simply be ignored. [More here](https://github.com/ChurchApps/FreeShow/issues/865).

### Auto updates not working

You can update manually by downloading from the website. But to get auto updates working make sure the app has permissions to write the new files. On Windows you probably need to install/run as administrator.

## Still need help?

- First search the docs to make sure it's not written here.
- Also please join our [community on Facebook](https://www.facebook.com/groups/freeshowapp).
- You can also open a [discussion on GitHub](https://github.com/orgs/ChurchApps/discussions/categories/freeshow).
- Or search for [existing issues on GitHub](https://github.com/ChurchApps/FreeShow/issues?q=label%3Aquestion).
