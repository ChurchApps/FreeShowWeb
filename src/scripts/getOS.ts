export function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
        windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
        iosPlatforms = ["iPhone", "iPad", "iPod"]

    if (macosPlatforms.indexOf(platform) !== -1) return "Mac"
    if (iosPlatforms.indexOf(platform) !== -1) return "iOS"
    if (windowsPlatforms.indexOf(platform) !== -1) return "Windows"
    if (/Android/.test(userAgent)) return "Android"
    if (/Linux/.test(platform)) return "Linux"

    return ""
}
