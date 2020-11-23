const path = require('path')

const settings = {
  settingsLoaded: false,
}

function readSettings(key) {
  return key ? settings[key] : settings
}

function writeSettings(key, value) {
  settings[key] = { ...settings[key], ...value }
}

function initSettings() {
  // write initial settings only once
  if (!settings.settingsLoaded) {
    const readArgs = args => {
      const argList = {}

      if (args && args.length > 0) {
        for (let i = 0; i < args.length; i++) {
          const [k, v] = args[i].split('=')

          if (k && v) {
            argList[k] = v
          } else {
            const allArgs = readSettings('args')
            const argsExtra = allArgs && allArgs.extra ? allArgs.extra : []

            argsExtra.push(args[i])
            writeSettings('args', { extra: argsExtra })
          }
        }
      }

      return argList
    }

    const [node, script, ...args] = process.argv
    const [root] = __dirname.split(`${path.sep}bin${path.sep}`)
    const packages = `${root}${path.sep}packages`
    const repo = 'kyper-react'
    const doc = 'doc'
    const lib = 'lib'
    const story = 'stories'
    const tests = '__tests__'
    const sep = path.sep
    const suffixUsageFile = '.usage.stories.mdx'
    const suffixInterfaceFile = '.version.stories.mdx'
    const suffixStory = '.stories.js'
    const suffixTest = '.test.js'
    const suffixJs = '.js'
    const fileIndex = 'index.js'
    const fileChangelog = 'CHANGELOG.md'
    const fileReadme = 'README.md'
    const fileLint = '.eslintrc.json'
    const filePackageJson = 'package.json'

    settings.settingsLoaded = true

    writeSettings('args', { ...readArgs(args) })

    writeSettings('path', {
      sep,
      root,
      script,
      node,
      repo,
      packages,
      doc,
      lib,
      story,
      tests,
      fileIndex,
      fileChangelog,
      fileReadme,
      fileLint,
      filePackageJson,
      suffixUsageFile,
      suffixInterfaceFile,
      suffixJs,
      suffixStory,
      suffixTest,
    })

    writeSettings('output', {
      logLevel: 1,
      logLength: 120,
    })
  }
}

function processGlobalArgs() {
  const argList = readSettings('args')

  if (argList) {
    // output settings
    if (argList.logLevel) {
      const logLevel = parseInt(argList.logLevel, 10) || 0

      writeSettings('output', { logLevel })
    }
    if (argList.logLength) {
      const logLength = parseInt(argList.logLength, 10) || 50

      writeSettings('output', { logLength })
    }
  }
}

initSettings()
processGlobalArgs()

exports.readSettings = readSettings
exports.writeSettings = writeSettings
