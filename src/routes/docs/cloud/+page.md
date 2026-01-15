---
title: Cloud Sync
description: Sync all your important files for backups, and to access your files on another computer.
---

# Cloud Sync

> Sync all your important files for backups, and to access your files on another computer. This is 100% free!

## Setup

### B1.Church

First you need a ChurchApps account, head over to [B1.Church](https://admin.b1.church/login) to **Register or Sign in**.

Now click on the dropdown in the top left corner, go to the [Serving](https://admin.b1.church/serving) tab. Here you need to create a **new ministry** if you haven't already, it can be named e.g. "FreeShow". After that you can create a **new team** inside of that ministry, name that team e.g. "Main".

:::admonition type=tip
It's possible to create multiple teams that has different data. A team can have many members, and a user can be a member of multiple teams. This makes it easy to change the access a user has to different cloud data.
:::

Once the team is created, open it to **add members**, on the right side under "Add Person" you can search for the user you want to add (likely yourself), click "Add".

:::admonition type=note
If a users access to a team has changed in B1.Church (e.g. if you add your account as a member of a team). You will need to **disconnect and connect again** in FreeShow to update the access.
:::

<!-- How to add church members into your ministry. -->

### Connecting

Now we are done with the main setup. In FreeShow go to **settings>Files**, click "Connect to ChurchApps", and "Allow" access to "Plans".

If your account have access to multiple teams, you will be prompted to choose one. First time it will sync right away, if there is data in the cloud already you will get some options on how you want to deal with that.

:::admonition type=info
A sync will happen automatically each time FreeShow is opened/closed, and when "Autosave" is triggerd. You will see a status indicator in the top left corner.
:::

## Syncing Media

All of your data is synced, except for media due to file size restrictions. To account for this you can set up a custom desktop sync provider like OneDrive or Google Drive for a specific media folder on your system.

If there are media files that FreeShow can't find, it will look through all the folders added to the "Media" drawer tab for any match.

Under the cloud options there is a setting called "Media sync folder", if you enable this you also get an option to change the path, default is **Documents/FreeShow/Media**. This will continuously move any used media files automatically into that folder if it's not already, and also search through that folder for any missing media files.

## Options

### Read-only

This is useful if you want to retreive data from the cloud, but don't want to risk a specific device altering the data in the cloud.
