import { LATEST_VERSION, LATEST_DESKTOP_VERSION } from '@site/static/data/global';

export const downloadsData = {
  windows: {
    desktop: {
      title: 'Podman Desktop for Windows',
      subtitle: `Windows Installer v${LATEST_DESKTOP_VERSION}`,
      icon: 'fa-brands:windows',
      path: `https://github.com/podman-desktop/podman-desktop/releases/download/v${LATEST_DESKTOP_VERSION}/podman-desktop-${LATEST_DESKTOP_VERSION}-setup.exe`,
      packageManager: {
        tool: 'WinGet',
        command: 'winget install RedHat.Podman-Desktop'
      }
    },
    cli: {
      x86_64: {
        title: 'Podman CLI for Windows x86_64',
        subtitle: `Podman Windows Installer v${LATEST_VERSION}`,
        icon: 'material-symbols:terminal-rounded',
        path: `https://github.com/containers/podman/releases/download/v${LATEST_VERSION}/podman-installer-windows-amd64.msi`,
      },
      arm64: {
        title: 'Podman CLI for Windows arm64',
        subtitle: `Podman Windows Installer v${LATEST_VERSION}`,
        icon: 'material-symbols:terminal-rounded',
        path: `https://github.com/containers/podman/releases/download/v${LATEST_VERSION}/podman-installer-windows-arm64.msi`,
      },
      packageManager: {
        tool: 'WinGet',
        command: 'winget install RedHat.Podman'
      }
    },
    instructions: '/docs/installation#windows',
  },
  mac: {
    desktop: {
      title: 'Podman Desktop for macOS',
      subtitle: `Universal *.dmg v${LATEST_DESKTOP_VERSION}`,
      icon: 'fa-brands:apple',
      path: `https://github.com/podman-desktop/podman-desktop/releases/download/v${LATEST_DESKTOP_VERSION}/podman-desktop-${LATEST_DESKTOP_VERSION}-universal.dmg`,
      packageManager: {
        tool: 'Homebrew',
        command: 'brew install podman-desktop'
      }
    },
    cli: {
      universal: {
        title: 'Podman CLI for macOS',
        subtitle: `macOS Installer v${LATEST_VERSION}`,
        icon: 'material-symbols:terminal-rounded',
        path: `https://github.com/containers/podman/releases/download/v${LATEST_VERSION}/podman-installer-macos-amd64.pkg`,
      },
      packageManager: {
        tool: 'Homebrew',
        command: 'brew install podman'
      }
    },
    instructions: '/docs/installation#macos',
  },
  linux: {
    desktop: {
      title: 'Podman Desktop for Linux',
      subtitle: `Flatpak v${LATEST_DESKTOP_VERSION}`,
      icon: 'fa-brands:linux',
      path: `https://github.com/podman-desktop/podman-desktop/releases/download/v${LATEST_DESKTOP_VERSION}/podman-desktop-${LATEST_DESKTOP_VERSION}.flatpak`,
      packageManager: {
        tool: 'Flatpak',
        command: 'flatpak install flathub io.podman_desktop.PodmanDesktop'
      }
    },
    cli: {
      default: {
        title: 'Podman CLI for Linux',
        subtitle: `Podman Engine v${LATEST_VERSION}`,
        icon: 'material-symbols:terminal-rounded',
        path: '/docs/installation#installing-on-linux',
      },
      packageManager: {
        tool: 'DNF / APT',
        command: 'sudo dnf install podman # Fedora/CentOS/RHEL\n# or\nsudo apt-get update\nsudo apt-get -y install podman # Ubuntu/Debian'
      }
    },
    instructions: '/docs/installation#installing-on-linux',
  }
};
