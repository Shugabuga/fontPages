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
  document.getElementById('defaultPreviewString').innerHTML = "The quick brown fox jumped over the lazy dogs. Spanish"
  document.getElementById('fontNicknameString').innerHTML = "Font Nickname Spanish"
  document.getElementById('fontNicknamePlaceholderString').placeholder = "Font Nickname (for profile)... Spanish"
  document.getElementById('fontFileString').innerHTML = "Font File Spanish"
  document.getElementById('installFontString').innerHTML = "Install Font Spanish"
  // "Choose File" button is currently untranslatable.
  // Featured Fonts
  document.getElementById('featuredFontGroupString').innerHTML = "Featured Fonts Spanish"
  Dom7('a.installBtnString').text('Install Spanish');
  // About
  Dom7('.aboutButtonString').text('About Spanish');
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

var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload = function(readerEvt) {
            var base64 = readerEvt.target.result;
            var base64 = window.btoa(base64)
            document.getElementById('base64').innerHTML = base64
            document.getElementById('previewCSS').innerHTML = "@font-face {font-family: 'fontPreview'; src: url('data:application/octet-stream;base64," + base64 + "')}"

            // Clean font name since truetype.js won't work.
            function capitalize(s){
                return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
            };
            fontName = document.getElementById('fontSelect').files[0].name.replace(/-|_/g, ' ')
            fontName = fontName.replace(/f[^a-z]demo[^a-z]|[^a-z]personal[^a-z]Use[^a-z]|[^a-z]font\ family[^a-z]|[^a-z]fontfamily[^a-z]|font|[^a-z]demo[^a-z]|ffp|ttf|otf|\./gi, '')
            fontName = capitalize(fontName)
            document.getElementById('fontName').value = fontName
            document.getElementById('fontName').placeholder = fontName
        };
        reader.readAsBinaryString(file);
    }
  };
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('fontSelect').addEventListener('change', handleFileSelect, false);
} else {
    alert('Sadly, your browser isn\'t compatible. Try using Safari.');
}

function generateHTML() {
// The only reason this works is because of the data: url scheme.
var fontSelect = document.getElementById('fontSelect')
var fontName = document.getElementById('fontName').value
base64 = document.getElementById('base64').innerHTML

var xmlString = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>ConsentText</key><dict><key>default</key><string>This profie will install the font "' + fontName + '" onto your device. To use the font, use an app like Pages. You can uninstall the font by removing this profile.</string></dict><key>PayloadContent</key><array><dict><key>Font</key><data>' + base64 +'</data><key>Name</key><string>' + fontName + '</string><key>PayloadDescription</key><string>Configures Font settings</string><key>PayloadDisplayName</key><string>Fonts</string><key>PayloadIdentifier</key><string>com.apple.font.CA9DD3A4-DA14-4D5A-84F8-0E90BC4360D2</string><key>PayloadType</key><string>com.apple.font</string><key>PayloadUUID</key><string>4A79228B-717E-44B0-8F53-9EF64F4C18A0</string><key>PayloadVersion</key><integer>1</integer></dict></array><key>PayloadDescription</key><string>Installs the font "' + fontName + '" onto your device.</string><key>PayloadDisplayName</key><string>Font - ' + fontName + '</string><key>PayloadIdentifier</key><string>heyitsshuga.FontPages.' + fontName + '</string><key>PayloadOrganization</key><string>FontPages by HeyItsShuga</string><key>PayloadRemovalDisallowed</key><false/><key>PayloadType</key><string>Configuration</string><key>PayloadUUID</key><string>CCA9B4E7-7E4B-4AF6-9EDC-478B6FE7B065</string><key>PayloadVersion</key><integer>1</integer></dict></plist>'
var encodedXml = window.btoa(xmlString)
// Download/generate profile
window.location = 'data:application/x-apple-aspen-config;base64,' + encodedXml
}

var myApp = new Framework7();

// Featured Fonts
$$('#tab2').on('tab:show', function () {
  if (document.getElementById('isTab2').innerHTML === "[DEBUG] Loaded Featured.") {
    console.log('Already loaded.')
  } else {
    console.log('Not loaded!')
    var mySwiper1 = myApp.swiper('.swiper-1', {
      pagination:'.swiper-1 .swiper-pagination',
      spaceBetween: 20,
      autoplay: 5000,
      loop: true
    });
    document.getElementById('isTab2').innerHTML = "[DEBUG] Loaded Featured."
  }
});

// _blank links open in Safari
document.getElementById("safari1").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari2").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari3").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari4").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari5").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari6").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
document.getElementById("safari7").addEventListener("click", function(evt) {
    var a = document.createElement('a');
    a.setAttribute("href", this.getAttribute("data-href"));
    a.setAttribute("target", "_blank");

    var dispatch = document.createEvent("HTMLEvents");
    dispatch.initEvent("click", true, true);
    a.dispatchEvent(dispatch);
}, false);
