const s = require('./settings')
const { readSettings } = s

const char = {
  pass: '◉',
  fail: '×',
  warn: '▷',
}

const color = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgPurple: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgPurple: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
}

function shouldWrite(suppressionLevel = 0) {
  return readSettings('output').logLevel >= suppressionLevel
}

function swapColorCodes(text) {
  let t = text.replace(/___/g, color.Reset)

  t = t.replace(/_r_/g, color.FgRed)
  t = t.replace(/_y_/g, color.FgYellow)
  t = t.replace(/_g_/g, color.FgGreen)
  t = t.replace(/_b_/g, color.FgBlue)
  t = t.replace(/_c_/g, color.FgCyan)
  t = t.replace(/_p_/g, color.FgPurple)
  t = t.replace(/_w_/g, color.FgWhite)

  return t
}

function removeColorCodes(text) {
  let t = text.replace(/___/g, '')

  t = t.replace(/_r_/g, '')
  t = t.replace(/_y_/g, '')
  t = t.replace(/_g_/g, '')
  t = t.replace(/_b_/g, '')
  t = t.replace(/_c_/g, '')
  t = t.replace(/_p_/g, '')
  t = t.replace(/_w_/g, '')

  return t
}

function out(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    if (text) {
      const outText = swapColorCodes(text)
      const outWords = outText.split(' ')
      const truncText = outWords.slice(0, readSettings('output').logLength).join(' ')

      console.log(truncText + color.Reset) // eslint-disable-line no-console
    } else {
      console.log(color.Reset) // eslint-disable-line no-console
    }
  }
}

function banner(text, c = '\x1b[35m') {
  const title = removeColorCodes(text)
  const w = 80

  function getLine(position = 'mid') {
    let l = ''

    if (position === 'top') {
      l += `${c}┏━`
    } else if (position === 'mid') {
      l += `${c}┃ ${color.FgWhite}`
    } else if (position === 'bot') {
      l += `${c}┗━`
    }

    for (let i = 0; i < w; i++) {
      if (position === 'top' || position === 'bot') {
        l += `━`
      } else if (position === 'mid') {
        l += title[i] || ' '
      }
    }

    if (position === 'top') {
      l += `━┓${color.Reset}`
    } else if (position === 'mid') {
      l += ` ${c}┃${color.Reset}`
    } else if (position === 'bot') {
      l += `━┛${color.Reset}`
    }

    return l
  }

  const topLine = getLine('top')
  const midLine = getLine('mid')
  const botLine = getLine('bot')

  out(`${topLine}\n${midLine}\n${botLine}`)
}

function bannerRed(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgRed)
  }
}
function bannerYellow(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgYellow)
  }
}
function bannerGreen(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgGreen)
  }
}
function bannerBlue(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgBlue)
  }
}
function bannerPurple(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgPurple)
  }
}
function bannerCyan(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgCyan)
  }
}
function bannerWhite(text, suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    banner(text, color.FgWhite)
  }
}

function tag(text, message, textColor = '\x1b[45m', borderColor = '\x1b[35m') {
  const title = removeColorCodes(`${text} ${message}`)
  const w = title.length

  function getLine(position = 'mid') {
    let l = ''

    if (position === 'top') {
      l += `${borderColor}┏━`
    } else if (position === 'mid') {
      l += `${borderColor}┃ ${textColor}${color.FgBlack}`
    } else if (position === 'bot') {
      l += `${borderColor}┗━`
    }

    for (let i = 0; i < w; i++) {
      if (position === 'top' || position === 'bot') {
        l += `━`
      } else if (position === 'mid') {
        if (i < text.length) {
          l += text[i]
        } else if (i === text.length) {
          l += `${color.Reset}${color.FgWhite} `
        } else {
          l += title[i]
        }
      }
    }

    if (position === 'top') {
      l += `━┓${color.Reset}`
    } else if (position === 'mid') {
      l += ` ${borderColor}┃${color.Reset}`
    } else if (position === 'bot') {
      l += `━┛${color.Reset}`
    }

    return l
  }

  const topLine = getLine('top')
  const midLine = getLine('mid')
  const botLine = getLine('bot')

  out(`${topLine}\n${midLine}\n${botLine}`)
}

function tagRed(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgRed, color.FgRed)
  }
}
function tagYellow(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgYellow, color.FgYellow)
  }
}
function tagGreen(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgGreen, color.FgGreen)
  }
}
function tagBlue(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgBlue, color.FgBlue)
  }
}
function tagPurple(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgPurple, color.FgPurple)
  }
}
function tagCyan(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgCyan, color.FgCyan)
  }
}
function tagWhite(text, message = '', suppressionLevel = 0) {
  if (shouldWrite(suppressionLevel)) {
    tag(text, message, color.BgWhite, color.FgWhite)
  }
}

function logError(title, text) {
  tagRed(` ERROR `, title, 1)
  out(`  ${text}`, 1)
  out('', 1)
}

function logWarning(title, text) {
  tagYellow(` WARNING `, title, 2)
  out(`  ${text}`, 2)
  out('', 2)
}

function logSuccess(title, text) {
  tagGreen(` SUCCESS `, title, 3)
  out(`  ${text}`, 3)
  out('', 3)
}

function logInfo(title, text) {
  tagPurple(` INFO `, title, 4)
  out(`  ${text}`, 4)
  out('', 4)
}

function logCall(title, args) {
  tagBlue(` CALL `, title, 5)
  if (args.length === 0) {
    out(`  _c_no function arguments`, 6)
  } else {
    for (let i = 0; i < args.length; i++) {
      out(`  _c_${args[i].key}_b_ = _w_${JSON.stringify(args[i].value)}`, 6)
    }
  }
  out('', 5)
}

exports.char = char
exports.color = color
exports.out = out
exports.bannerRed = bannerRed
exports.bannerYellow = bannerYellow
exports.bannerGreen = bannerGreen
exports.bannerBlue = bannerBlue
exports.bannerPurple = bannerPurple
exports.bannerCyan = bannerCyan
exports.bannerWhite = bannerWhite
exports.tagRed = tagRed
exports.tagYellow = tagYellow
exports.tagGreen = tagGreen
exports.tagBlue = tagBlue
exports.tagPurple = tagPurple
exports.tagCyan = tagCyan
exports.tagWhite = tagWhite
exports.logError = logError
exports.logWarning = logWarning
exports.logSuccess = logSuccess
exports.logInfo = logInfo
exports.logCall = logCall
