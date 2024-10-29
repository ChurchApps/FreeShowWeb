---
title: Cloud Sync using Google Drive API
description: Sync all your important files to Google Drive for automatic backups, and access your projects on another computer.
---

# Cloud Sync with Google Drive

> Sync all your important files to Google Drive for automatic backups, and access your projects on another computer. This is 100% free!

:::admonition type=info

With this method you get a custom "Google account", that will only be able to access the drive files/folders shared with the account. You never have to log in, you just need one access key file on the computers you want to enable sync.

:::

## Getting started

First you need to create your own Google Developer project.

1. Sign in to the [Google Developer Console](https://console.cloud.google.com/projectcreate). _(Don't worry if you're not a developer)._
2. Create a **new project**. You can call it e.g. **"FreeShow Sync"**.
3. After you have created the project, make sure that it is selected.
4. Go to [Google Drive API](https://console.developers.google.com/apis/api/drive.googleapis.com/), and **enable it**.

### Creating the service account

1. Go here to [create a service account](https://console.cloud.google.com/iam-admin/serviceaccounts/create).
2. Type anything into the details. E.g: Name: **"FreeShow Drive Account"**, Service account ID: **"freeshow"**.
3. Click **"Create and continue"**.
4. No need to enter a role, click **"Continue"**.
5. No need to grant users access, click **"Done"**.

### Creating the key

You should be redirected to [this screen](https://console.cloud.google.com/iam-admin/serviceaccounts).

1. Click on the **menu under "Actions"**, then click **"Manage keys"**.
2. Click **"Add key"**, then **"Create new key"**, keep the type as "JSON" and click **"Create"**.

Now the key file should be downloaded to your computer. Keep it a secure place. If you lose it you can always generate a new key file.

### Granting access

You have to give access to a folder in Google Drive, where you want all the files to be uploaded.

1. Copy the service account **mail adress**. (Should look like this: _freeshow@<project_id>.iam.gserviceaccount.com_).
2. In your Google Drive, **create a new folder** and call it e.g. **"FreeShow"**.
3. Right click and choose **"Share"**.
4. Paste the service account adress, **disable "Send notification"**, and click **"Share"**. (Make sure the access is set to "Editor").

### Importing in FreeShow

1. Go to settings, then **"Cloud"**.
2. Click **"Import keys file"**, and select the file.
3. If you have existing data in the cloud, you will get asked to choose to either keep the local data, or keep the data in the cloud.

Now you should get a popup indicating that the sync has started.

_Optional:_ If you have shared multiple folders, you can change the main folder by copying the folder ID from the URL inside the folder, and pasting it in the textbox in the settings.

:::admonition type=tip

In Google Drive you can right click any of the files and click "Manage versions" to see and download old versions of the file (younger than 30 days) if you need it.

:::

If you are stuck and need a tutorial with images, [click here](https://docs.google.com/document/d/1_6RoONdTN1_gVZbIjyOo9vvCXawV_fomyIo_LofTIs0).

## FAQ

- **What is the Media path ID?**

  If the "Media path ID" is set to the same on two computers that means the exact media paths are the same (e.g. if an external drive is used). But in most cases they should be different, that way the different paths will be auto located and stored at the media path location for the current computer.
