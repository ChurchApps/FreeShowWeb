---
title: Media
description: Import videos and images with drag and drop from the drawer or the computer.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Media

> Play a video, or add a image or video as a slide background.

Add folders from the computer in the "Media" drawer tab and view all media files in that folder. Click on them to play them in the output. If you right click you can click "Edit" to add filters, change the playback speed, and more. All media files, including audio can be dragged into the project for easy access.

#### Favourites

Right click any media and click "Favourite" to add them to your favourites for easy access.

### Online media

Included on the left side is a tab called "Online". Here you will find more tabs at the bottom with currently the options **YouTube**, **Vimeo**, **Pixabay**, **Unsplash** or **Canva**.

In **YouTube** and **Vimeo** you have to add you own videos by clicking "Add" at the bottom and pasting a link to a video. Note that some YouTube videos won't work, because the creator has disabled embeds to their video.

In **Pixabay** or **Unsplash** you can search for any images or videos by using the [drawer search](./drawer#drawer-search). Please note that you need internet access to use these elements.

In **Canva** you can connect to your account and drag in designs you own directly as images. See the steps below on how to connect.

Want to get videos from another platform? Send an email to [dev@freeshow.app](mailto:dev@freeshow.app). :)

### Connecting to Canva

Due to public Canva API keys only being allowed on web apps, the workaround is to setup your own "personal" API key. Head over to [Canva API Integrations](https://www.canva.com/developers/integrations/connect-api), log in with the account that has your designs, click **Create an integration** (you need to set up an account password and MFA if you haven't already), agree to the terms and Create.

Set the integration name to **FreeShow**. Now copy the **Client ID** and paste in FreeShow, then click **Generate secret**, copy that and paste in FreeShow.

Next go to **Scopes** on the left side, and check the **Read** access on **asset**, **design:content**, **design:meta** and **folder**.

Next go to **Authentication**, and set **URL 1** to **http://127.0.0.1:5520/auth/complete**.

Now you are all set up! The integration can remain as a draft. Note that the API ID/Secret will only work when you log in to the same Canva account you used to set up the API Integration.

Now in FreeShow, click **Connect to Canva**, then **Allow**, and you should be good to go.

## Screens and Cameras

Click on the "Screens", or the "Cameras" tab to to show previews. Click on any to play in the output, or drag to any slide. This can be useful if you want to e.g. show a website.

### Screen recording

FreeShow has a built-in screen recorder. To use it, right click on any of the screens or windows, and click "Start recording". On the right side in the "Screens" drawer tab, you get a preview and a button to stop the recording.

## Add as backgrounds

If you drag a media element from the drawer or from the computer into a show, it will be added as a background to the slide you dropped it on or create a new slide. The media element (image/video) will then be played when that slide is clicked.

### Control videos playing in output

When a video is playing you can control it on the right side right under the clear buttons, if you can't find it please click on the small almost invisible button right under the media clear button to open it. Here you can also control some other things, like mute/unmute.

### Play audio from backgrounds

All video backgrounds are muted by default but you can click on the "unmute" icon on the slide to allow it to play sound when the slide is clicked. This can also be toggled from the "Media" show tab on the right. Here you can also toggle the background loop.

### Go to next slide when video is finished

Right click the slide, choose "Slide actions", then click on "Next on media finished" to automatically play the next slide when the video has ended. This triggers even when the video is set to "loop".

## Video time markers

If you open a video from the project, or right click in the drawer and click "Open preview". You will get a full preview in the center of the screen, press "Show media preview controls" to show some inputs. On the right you will see a clock icon, click it to reveal a bar where you can add time markers to the video at the current preview position.

## FAQ

-   **How to add media**

    First open the "Media" tab in the drawer, then at the bottom left click "New folder" and choose the folder with your media. You can also drag & drop folders directly from the computer to the folder area. After that you can drag & drop media files from the drawer into a project, to a show, or as a slide item. You can also drag & drop media files directly from the computer file system. (Note: By dragging just one background to a show it will be [added as a background](./faq#videos-are-muted)!)

-   **Use media across multiple computers**

    If you use FreeShow with multiple computers all you need to do is make sure the folders with the media are added to the "Media" drawer in FreeShow. This way FreeShow can auto find missing media files even when the paths are different, as long as the name is the same!

-   **How to toggle the media looping**

    When a video is playing you can toggle the looping temporarily right under the preview.
    When you add media as a background to a slide it will loop by default, you can find a tab called "Media" on the right side, click that to find some options including a loop icon to toggle it on/off permanently.
    If you add the video to a project instead it will not be looping by default!
    You can also right click a video, click "Edit" and set the type to "Foreground" to make it never loop.

-   **How can I apply the same filter to many media files?**

    If you first apply a style you like to one media file, you can in the drawer select that, then press <Key>CTRL/CMD + C</Key> to copy the style, then select all the other media files you would like to apply it to and press <Key>CTRL/CMD + V</Key>.
