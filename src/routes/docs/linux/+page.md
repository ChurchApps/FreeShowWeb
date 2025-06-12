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

### Application data path

_For advanced users_

```json
~/.config/freeshow
```
