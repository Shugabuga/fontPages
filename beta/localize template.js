// Append this structure to localize.js, edit it, and send a pull request to the main build.
if (lang==='xx') {
  console.log('System language detected as LANG.')
  // Tips
  document.getElementById('tipString').innerHTML = "Tip!"
  if (tipID === 1) {tip.innerHTML = "We recommend using the Dropbox app to download and select font files (TTF or OTF)."}
  if (tipID === 2) {tip.innerHTML = "Installed fonts can be used in apps like Pages, Keynote, and even Microsoft Word!"}
  if (tipID === 3) {tip.innerHTML = "Looking for fonts? Sites like <a href='https://dafont.com'>daFont</a> and <a href='https://google.com/fonts'>Google Fonts</a> has tons!"}
  if (tipID === 4) {tip.innerHTML = "fontPages can be used with and without a jailbreak!"}
  if (tipID === 5) {tip.innerHTML = "You can have as many fonts as you like installed at once!"}
  if (tipID === 6) {tip.innerHTML = "fontPages does <b>not</b> change the system font, but adds new ones. Think Font Book from macOS."}
  if (tipID === 7) {tip.innerHTML = "fontPages supports TTF and OTF fonts. WOFF2 or SVG fonts aren't supported."}
  if (tipID === 8) {tip.innerHTML = "fontPages is free to use and will always be!"}
  if (tipID === 9) {tip.innerHTML = "Don't have a font in mind? Check out our Top Fonts section!"}
  if (tipID === 10) {tip.innerHTML = "All profiles from fontPages are completely safe. It only includes your font of choice."}
  // Install Font
  document.getElementById('installFontGroupString').innerHTML = "Install Font"
  document.getElementById('fontPreviewString').innerHTML = "Font Preview"
  document.getElementById('fontPreview').innerHTML = "The quick brown fox jumped over the lazy dogs."
  document.getElementById('fontNicknameString').innerHTML = "Font Nickname"
  document.getElementById('fontName').placeholder = "Font Nickname (for profile)..."
  document.getElementById('fontFileString').innerHTML = "Font File"
  document.getElementById('installFontString').innerHTML = "Install Font"
  // Featured Fonts
  document.getElementById('featuredFontsGroupString').innerHTML = "Featured Fonts"
  document.getElementById('serifFeaturedString').innerHTML = "Serif"
  document.getElementById('sansSerifFeaturedString').innerHTML = "Sans Serif"
  document.getElementById('decorativeFeaturedString').innerHTML = "Decorative"
  Dom7('a.installBtnString').text('Install');
  // About
  document.getElementById('aboutGroupString').innerHTML = "About"
  document.getElementById('aboutLicenseString').innerHTML = "License"
  document.getElementById('aboutCodeString').innerHTML = "Source Code"
  document.getElementById('aboutWebAppString').innerHTML = "Web App"
  document.getElementById('aboutWebUIString').innerHTML = "Web App UI"
  document.getElementById('aboutNativeAppString').innerHTML = "Native App"
  document.getElementById('aboutContributionFixedNavbarString').innerHTML = "Contribution: Fixed Navbar"
  document.getElementById('aboutContributionOpenLinksString').innerHTML = "License"
  document.getElementById('aboutLicenseString').innerHTML = "Contribution: Open Links in Safari"
  document.getElementById('aboutBetaTesters').innerHTML = "Beta Testers"
  document.getElementById('backButtonString').innerHTML = "Back"
  // Navbar
  document.getElementById('installLabel').innerHTML = "Install"
  document.getElementById('featuredLabel').innerHTML = "Featured"
  document.getElementById('aboutLabel').innerHTML = "About"
  }
