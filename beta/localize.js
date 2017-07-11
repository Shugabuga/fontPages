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
  document.getElementById('tipString').innerHTML = "Tip!"
  if (tipID === 1) {tip.innerHTML = "Te recomendamos utilizar la app Dropbox para descargar y seleccionar archivos de fuente (OTF ó TTF)."}
  if (tipID === 2) {tip.innerHTML = "Puedes utilizar las fuentes instaladas en apps como Pages, ó Keynote. Incluso Microsoft Word!"}
  if (tipID === 3) {tip.innerHTML = "Buscando fuentes? Puedes encontrarlas en sitios como <a href='https://dafont.com'>daFont</a> y <a href='https://google.com/fonts'>Google Fonts</a>"}
  if (tipID === 4) {tip.innerHTML = "Puedes utilizar fontPages sin Jailbreak!"}
  if (tipID === 5) {tip.innerHTML = "Puedes instalar cuantas fuentes como quieras!"}
  if (tipID === 6) {tip.innerHTML = "fontPages <b>no</b> cambia la fuente del sistema, solo añande nuevas, como Font Book en macOS"}
  if (tipID === 7) {tip.innerHTML = "fontPages soporta fuentes TTF y OTF. Las fuentes WOFF2 y SVG no son soportadas"}
  if (tipID === 8) {tip.innerHTML = "fontPages es gratis y siempre lo será!"}
  if (tipID === 9) {tip.innerHTML = "No se te ocurre que fuente instalar? Checa la sección Top Fuentes"}
  if (tipID === 10) {tip.innerHTML = "Los perfiles de fontPages son completamente seguros. Solamente incluyen tu fuente elegida."}
  // Install Font
  document.getElementById('installFontGroupString').innerHTML = "Instalar Fuente"
  document.getElementById('fontPreviewString').innerHTML = "Previsualización"
  document.getElementById('fontPreview').innerHTML = "El veloz murciélago hindú comía feliz cardillo y kiwi."
  document.getElementById('fontNicknameString').innerHTML = "Apodo"
  document.getElementById('fontName').placeholder = "Apodo (para el perfil)..."
  document.getElementById('fontFileString').innerHTML = "Archivo"
  document.getElementById('installFontString').innerHTML = "Instalar Fuente"
  // Featured Fonts
  document.getElementById('featuredFontsGroupString').innerHTML = "Descubrir Fuentes"
  document.getElementById('serifFeaturedString').innerHTML = "Con Serifa"
  document.getElementById('sansSerifFeaturedString').innerHTML = "Sin Serifa"
  document.getElementById('decorativeFeaturedString').innerHTML = "Decorativo"
  Dom7('a.installBtnString').text('Instalar');
  // About
  document.getElementById('aboutGroupString').innerHTML = "Acerca de"
  document.getElementById('aboutLicenseString').innerHTML = "Licencia"
  document.getElementById('aboutCodeString').innerHTML = "Código Fuente"
  document.getElementById('aboutWebAppString').innerHTML = "Web App"
  document.getElementById('aboutWebUIString').innerHTML = "UI Web App"
  document.getElementById('aboutNativeAppString').innerHTML = "Aplicación"
  document.getElementById('aboutContributionFixedNavbarString').innerHTML = "Contribución: Navbar Arreglada"
  document.getElementById('aboutContributionOpenLinksString').innerHTML = "Licencia"
  document.getElementById('aboutLicenseString').innerHTML = "Contribución: Abrir Links en Safari"
  document.getElementById('aboutBetaTesters').innerHTML = "Miembros Beta"
  document.getElementById('backButtonString').innerHTML = "Atrás"
  // Navbar
  document.getElementById('installLabel').innerHTML = "Instalar"
  document.getElementById('featuredLabel').innerHTML = "Popular"
  document.getElementById('aboutLabel').innerHTML = "Acerca de"
  }
