const g = require('./helpers/global')

function init() {
  // log the running script
  g.logInfo(`npm run audit`, `_p_${g.readSettings('path').script}`)
}

function readInput() {
  // ask user for additonal info if needed
}

function writeOutput() {
  const p = g.readSettings('path')
  const comp = g.readSettings('args').extra[0]
  const packDir = `${p.packages}${p.sep}${comp.toLowerCase()}${p.sep}`

  // main
  const packageJsonFile = `${packDir}${p.filePackageJson}`
  const lintFile = `${packDir}${p.fileLint}`
  const readmeFile = `${packDir}${p.fileReadme}`
  const changelogFile = `${packDir}${p.fileChangelog}`

  g.fileOverwrite(packageJsonFile, g.tempPackageJson(comp))
  g.fileOverwrite(lintFile, g.tempLint())
  g.fileOverwrite(readmeFile, g.tempReadme(comp))
  g.fileOverwrite(changelogFile, g.tempChangelog(comp))

  // lib
  const componentFile = `${packDir}${p.lib}${p.sep}${comp}${p.suffixJs}`
  const indexFile = `${packDir}${p.lib}${p.sep}${p.fileIndex}`

  g.fileOverwrite(componentFile, g.tempComponent(comp))
  g.fileOverwrite(indexFile, g.tempIndex(comp))

  // stories
  const storyFile = `${packDir}${p.story}${p.sep}${comp}${p.suffixStory}`

  g.fileOverwrite(storyFile, g.tempStory(comp))

  // test
  const testFile = `${packDir}${p.tests}${p.sep}${comp}${p.suffixTest}`

  g.fileOverwrite(testFile, g.tempTest(comp))

  // doc
  const usageFile = `${packDir}${p.doc}${p.sep}${comp}${p.suffixUsageFile}`
  const interfaceFile = `${packDir}${p.doc}${p.sep}${comp}${p.suffixInterfaceFile}`

  g.fileOverwrite(usageFile, g.tempUsage(comp))
  g.fileOverwrite(interfaceFile, g.tempInterface(comp))
}

function main() {
  init()
  readInput()
  writeOutput()
}

main()
