export function getOS(): string {
  var userAgent: string = window.navigator.userAgent,
    platform: string = window.navigator.platform,
    macosPlatforms: string[] = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms: string[] = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms: string[] = ["iPhone", "iPad", "iPod"],
    os: string | null = null

  if (macosPlatforms.indexOf(platform) !== -1) os = "MacOS"
  else if (iosPlatforms.indexOf(platform) !== -1) os = "iOS"
  else if (windowsPlatforms.indexOf(platform) !== -1) os = "Windows"
  else if (/Android/.test(userAgent)) os = "Android"
  else if (!os && /Linux/.test(platform)) os = "Linux"

  return os
}
