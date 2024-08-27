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

### CCLI Integration?

Unfortunately CCLI has discontinued their API, meaning it's impossible for us to add integration. They still support programs that already has used their API, but are unwilling to collaborate with us. Read [more here](https://github.com/ChurchApps/FreeShow/issues/572#issuecomment-2163179642).

### Cloud sync between two computers

Cloud sync is possible. FreeShow has a integrated support for syncing all the data files [using Google Drive](./drive), this is completely free.

If you also want to sync media files as well, you will need to use a custom sync like OneDrive, the Google Drive desktop app or another free alternative. Read [more here](https://github.com/ChurchApps/FreeShow/issues/402)!

### Text style not showing up in output

This might mean that you have set a custom output style with a template that overrides the new style. To fix go to settings>"Styles", and take off any template set here. Optionally remove the style entirely from the output in "Outputs".

### FreeShow keeps freezing

If you experience that the UI stops resonding to your clicks this is due to a bug in the code, please remember what you did just before this happened, and create a new [issue about it on GitHub](https://github.com/ChurchApps/FreeShow/issues/). And please also attach the error log file found in the settings>"Other">"Open log file". This will help us track down the issue and fix it!

## Still need help?

- First search the docs to make sure it's not written here.
- Also please join our [community on Facebook](https://www.facebook.com/groups/freeshowapp).
- You can also open a [discussion on GitHub](https://github.com/orgs/ChurchApps/discussions/categories/freeshow).
- Or search for [existing issues on GitHub](https://github.com/ChurchApps/FreeShow/issues?q=label%3Aquestion).
