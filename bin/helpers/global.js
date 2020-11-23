const s = require('./settings')
const o = require('./output')
const f = require('./file')
const t = require('./template')

const settings = s.readSettings()

if (settings && settings.output && settings.output.logLevel && settings.output.logLevel >= 4) {
  o.bannerPurple('GLOBAL SETTINGS')
  console.log(settings, '\n') // eslint-disable-line no-console
}

// [global] properties and methods
exports.readSettings = s.readSettings
exports.writeSettings = s.writeSettings

// [output] properties and methods
exports.char = o.char
exports.out = o.out
exports.bannerRed = o.bannerRed
exports.bannerYellow = o.bannerYellow
exports.bannerGreen = o.bannerGreen
exports.bannerBlue = o.bannerBlue
exports.bannerPurple = o.bannerPurple
exports.bannerCyan = o.bannerCyan
exports.bannerWhite = o.bannerWhite
exports.tagRed = o.tagRed
exports.tagYellow = o.tagYellow
exports.tagGreen = o.tagGreen
exports.tagBlue = o.tagBlue
exports.tagPurple = o.tagPurple
exports.tagCyan = o.tagCyan
exports.tagWhite = o.tagWhite
exports.logError = o.logError
exports.logWarning = o.logWarning
exports.logSuccess = o.logSuccess
exports.logInfo = o.logInfo
exports.logCall = o.logCall

// [file] properties and methods
exports.getDirs = f.getDirs
exports.getDirsAll = f.getDirsAll
exports.getFiles = f.getFiles
exports.getFilesAll = f.getFilesAll
exports.ensureDirectoryExists = f.ensureDirectoryExists
exports.dirExists = f.dirExists
exports.fileContains = f.fileContains
exports.fileExists = f.fileExists
exports.fileRead = f.fileRead
exports.fileWrite = f.fileWrite
exports.fileOverwrite = f.fileOverwrite
exports.fileDelete = f.fileDelete
exports.isValidComponentDir = f.isValidComponentDir

// [template] properties and methods
exports.tempPackageJson = t.tempPackageJson
exports.tempLint = t.tempLint
exports.tempReadme = t.tempReadme
exports.tempChangelog = t.tempChangelog
exports.tempComponent = t.tempComponent
exports.tempIndex = t.tempIndex
exports.tempStory = t.tempStory
exports.tempTest = t.tempTest
exports.tempInterface = t.tempInterface
exports.tempUsage = t.tempUsage

// TODO: add process monitoring functions below for when additional debugging is needed

// process.on('beforeExit', (code) => {
//   logInfo('beforeExit', `_w_exit code: _y_${JSON.stringify(code)}`)
// })

// process.on('exit', (code) => {
//   logInfo('exit', `_w_exit code: _y_${JSON.stringify(code)}`)
// })

// process.on('uncaughtException', (err, origin) => {
//   const exStyle = `${o.color.BgRed}${o.color.FgYellow}`
//   const exTag = `${exStyle}┏━━━━━━━━━━━━━┓${o.color.Reset}\n${exStyle}┃  EXCEPTION  ┃${o.color.Reset}\n${exStyle}┗━━━━━━━━━━━━━┛${o.color.Reset}\n`
//   fs.writeSync(process.stderr.fd, `${exTag}\n${o.color.FgRed}${err}${o.color.Reset}\n\n`)
// })
