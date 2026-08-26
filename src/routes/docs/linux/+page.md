---
title: Install on Linux
description: How to install the application on Linux.
---

# Install on Linux

## Preinstalled on

-   [UbuntuCE](https://ubuntuce.com/) - a Linux-based free and open source operating system geared towards Christians.
-   [Ubuntu Studio](https://ubuntustudio.org/) - a free and open source operating system made for creative people.

#### snapcraft

```bash
sudo snap install freeshow
```

Check it out on [snapcraft.io](https://snapcraft.io/freeshow).

<!-- -   **AppImage:** Right-click the .AppImage file, choose "Properties", go to "Permissions", and check the box that says "Allow executing file as program", then double-click the file and you should be good to go! -->

#### Arch PKGBUILD

```bash
sudo pacman -S freeshow-git
```

_This format is not regularly updated!_
<br>
Check it out on [archlinux.org](https://aur.archlinux.org/packages/freeshow-git).

#### .AppImage

:::steps

!!!step title="Allow executing"|description='Right-click the .AppImage file, and choose "Properties"'
!!!
!!!step title="Properties"|description='Go to "Permissions", and check the box that says "Allow executing file as program"'
!!!
!!!step title="Execute"|description='Double-click the .AppImage file'
!!!

:::

#### arm64 devices

You can download a custom ARM build from the [downloads page](/downloads), marked with "arm64" or "aarch64" in the file name.

#### Other versions

We also have .deb (debian) and .rpm (Red Hat) available.

#### Chromebook

Chromebooks run on Linux, so if you set up the "Linux development environment" you can install the .deb file.

#### Android

Android devices runs on Linux under the hood. So if you really need FreeShow on an Android device, you should be able to find a tutorial on the internet.

### Application data path

_For advanced users_

```json
~/.config/freeshow
```
