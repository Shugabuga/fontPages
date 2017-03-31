tip = document.getElementById('tip')
var tipID = Math.floor((Math.random() * 10) + 1);

// Localization Code
var lang = navigator.language.replace(/\-[a-z][a-z]/gi, '')
if (lang==='en') {
  console.log('System language detected as English.')
  // Tips
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
  }
if (lang==='es') {
  console.log('System language detected as Spanish.')
  // Tips
  document.getElementById('tipString').innerHTML = "Tip! Spanish"
  if (tipID === 1) {tip.innerHTML = "We recommend using the Dropbox app to download and select font files (TTF or OTF). Spanish"}
  if (tipID === 2) {tip.innerHTML = "Installed fonts can be used in apps like Pages, Keynote, and even Microsoft Word! Spanish"}
  if (tipID === 3) {tip.innerHTML = "Looking for fonts? Sites like <a href='https://dafont.com'>daFont</a> and <a href='https://google.com/fonts'>Google Fonts</a> has tons! Spanish"}
  if (tipID === 4) {tip.innerHTML = "fontPages can be used with and without a jailbreak! Spanish"}
  if (tipID === 5) {tip.innerHTML = "You can have as many fonts as you like installed at once! Spanish"}
  if (tipID === 6) {tip.innerHTML = "fontPages does <b>not</b> change the system font, but adds new ones. Think Font Book from macOS. Spanish"}
  if (tipID === 7) {tip.innerHTML = "fontPages supports TTF and OTF fonts. WOFF2 or SVG fonts aren't supported. Spanish"}
  if (tipID === 8) {tip.innerHTML = "fontPages is free to use and will always be! Spanish"}
  if (tipID === 9) {tip.innerHTML = "Don't have a font in mind? Check out our Top Fonts section! Spanish"}
  if (tipID === 10) {tip.innerHTML = "All profiles from fontPages are completely safe. It only includes your font of choice. Spanish"}
  // Install Font
  document.getElementById('installFontGroupString').innerHTML = "Install Font Spanish"
  document.getElementById('fontPreviewString').innerHTML = "Font Preview Spanish"
  document.getElementById('fontPreview').innerHTML = "The quick brown fox jumped over the lazy dogs. Spanish"
  document.getElementById('fontNicknameString').innerHTML = "Font Nickname Spanish"
  document.getElementById('fontName').placeholder = "Font Nickname (for profile)... Spanish"
  document.getElementById('fontFileString').innerHTML = "Font File Spanish"
  document.getElementById('installFontString').innerHTML = "Install Font Spanish"
  // "Choose File" button is currently untranslatable.
  // Featured Fonts
  document.getElementById('featuredFontsGroupString').innerHTML = "Featured Fonts Spanish"
  document.getElementById('serifFeaturedString').innerHTML = "Serif Spanish"
  document.getElementById('sansSerifFeaturedString').innerHTML = "Sans Serif Spanish"
  document.getElementById('decorativeFeaturedString').innerHTML = "Decorative Spanish"
  Dom7('a.installBtnString').text('Install Spanish');
  // About
  document.getElementById('aboutGroupString').innerHTML = "About Spanish"
  document.getElementById('aboutLicenseString').innerHTML = "License Spanish"
  document.getElementById('aboutCodeString').innerHTML = "Source Code Spanish"
  document.getElementById('aboutWebAppString').innerHTML = "Web App Spanish"
  document.getElementById('aboutWebUIString').innerHTML = "Web App UI Spanish"
  document.getElementById('aboutNativeAppString').innerHTML = "Native App Spanish"
  document.getElementById('aboutContributionFixedNavbarString').innerHTML = "Contribution: Fixed Navbar Spanish"
  document.getElementById('aboutContributionOpenLinksString').innerHTML = "License Spanish"
  document.getElementById('aboutLicenseString').innerHTML = "Contribution: Open Links in Safari Spanish"
  document.getElementById('aboutBetaTesters').innerHTML = "Beta Testers Spanish"
  document.getElementById('backButtonString').innerHTML = "Back Spanish"
  }
