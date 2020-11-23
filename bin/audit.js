const g = require('./helpers/global')
const args = g.readSettings('args')
const p = g.readSettings('path')

const skipPackages = ['a11y', 'icon']
const packageRoot = p.packages

const reComponentFile = new RegExp(`^[A-Z][A-Za-z0-9_]+${p.suffixJs}$`)
const reComponentStoryFile = new RegExp(`^[A-Z][A-Za-z0-9_]+${p.suffixStory}$`)
const reDocUsageFile = new RegExp(`^[A-Z][A-Za-z0-9_]+${p.suffixUsageFile}$`)
const reDocInterfaceFile = new RegExp(`^[A-Z][A-Za-z0-9_]+${p.suffixInterfaceFile}$`)
const reTestFile = new RegExp(`^[A-Z][A-Za-z0-9_]+${p.suffixTest}$`)
const reChangelogFile = new RegExp(`^${p.fileChangelog}$`)
const reReadmeFile = new RegExp(`^${p.fileReadme}$`)
const reIndexFile = new RegExp(`^${p.fileIndex}$`)
const rePackageJsonFile = new RegExp(`^${p.filePackageJson}$`)

const mode = {
  isVerbose: false,
  isFix: false,
}

let packageList = []

const auditReport = {
  compPass: 0,
  compFail: 0,
  issuePass: 0,
  issueFail: 0,
}
const auditResults = {}

function auditBegin() {
  g.bannerCyan(`AUDITING KYPER COMPONENTS...`)

  // initialize list of packages, components, docs, tests, etc.
  packageList = g.getDirs(packageRoot).filter(pk => {
    for (let i = 0; i < skipPackages.length; i++) {
      const dir = skipPackages[i]

      const len = dir.length

      if (pk.slice(-len) === dir) {
        return false
      }
    }

    return true
  })

  for (let i = 0; i < packageList.length; i++) {
    const pack = packageList[i]

    const container = pack.replace(packageRoot + p.sep, '')

    const packFiles = g.getFilesAll(pack)

    const doc = g.getFilesAll(pack + p.sep + p.doc)

    const lib = g.getFilesAll(pack + p.sep + p.lib)

    const stories = g.getFilesAll(pack + p.sep + p.story)

    const tests = g.getFilesAll(pack + p.sep + p.tests)

    const files = {
      changelog: null,
      components: {},
      index: null,
      package: null,
      readme: null,
    }

    // loop through files in package root directory
    for (let j = 0; j < packFiles.length; j++) {
      const fileName = packFiles[j]

      const parts = fileName.split(p.sep)

      const shortName = parts[parts.length - 1]

      if (reIndexFile.test(shortName)) {
        files.index = fileName
      } else if (rePackageJsonFile.test(shortName)) {
        files.package = fileName
      } else if (reChangelogFile.test(shortName)) {
        files.changelog = fileName
      } else if (reReadmeFile.test(shortName)) {
        files.readme = fileName
      }
    }

    // loop through files in lib directory
    for (let l = 0; l < lib.length; l++) {
      const fileName = lib[l]

      const parts = fileName.split(p.sep)

      const shortName = parts[parts.length - 1]

      if (reComponentFile.test(shortName)) {
        const sn = shortName.replace(p.suffixJs, '')

        if (files.components[sn]) {
          files.components[sn].component = fileName
          files.components[sn].name = sn
          files.components[sn].props = auditProps(fileName)
        } else {
          files.components[sn] = { component: fileName, name: sn, props: auditProps(fileName) }
        }
      } else if (reComponentStoryFile.test(shortName)) {
        const sn = shortName.replace(p.suffixStory, '')

        if (files.components[sn]) {
          files.components[sn].story = fileName
        } else {
          files.components[sn] = { story: fileName }
        }
      } else if (reIndexFile.test(shortName)) {
        files.index = fileName
      }
    }

    // loop through files in doc directory
    for (let k = 0; k < doc.length; k++) {
      const fileName = doc[k]

      const parts = fileName.split(p.sep)

      const shortName = parts[parts.length - 1]

      if (reDocUsageFile.test(shortName)) {
        const sn = shortName.replace(p.suffixUsageFile, '')

        if (files.components[sn]) {
          files.components[sn].usage = fileName
        } else {
          files.components[sn] = { usage: fileName }
        }
      } else if (reDocInterfaceFile.test(shortName)) {
        const sn = shortName.replace(p.suffixInterfaceFile, '')

        if (files.components[sn]) {
          files.components[sn].interface = fileName
        } else {
          files.components[sn] = { interface: fileName }
        }
      }
    }

    // loop through files in stories directory
    for (let l = 0; l < stories.length; l++) {
      const fileName = stories[l]

      const parts = fileName.split(p.sep)

      const shortName = parts[parts.length - 1]

      if (reComponentStoryFile.test(shortName)) {
        const sn = shortName.replace(p.suffixStory, '')

        if (files.components[sn]) {
          files.components[sn].story = fileName
        } else {
          files.components[sn] = { story: fileName }
        }
      }
    }

    // loop through files in tests directory
    for (let t = 0; t < tests.length; t++) {
      const fileName = tests[t]

      const parts = fileName.split(p.sep)

      const shortName = parts[parts.length - 1]

      if (reTestFile.test(shortName)) {
        const sn = shortName.replace(p.suffixTest, '')

        if (files.components[sn]) {
          files.components[sn].tests = fileName
        } else {
          files.components[sn] = { tests: fileName }
        }
      }
    }

    auditResults[container] = { ...files }
  }
}

function auditProps(fName) {
  const parts = fName.split(p.sep)

  const short = parts[parts.length - 1]

  const comp = short.replace(p.suffixJs, '')

  const hasProps = g.fileContains(fName, `${comp}.propTypes`) !== -1

  return hasProps
}

function getString(label, result) {
  if (result === 'PASS') {
    auditReport.issuePass += 1
    return `_g_ ${g.char.pass} ${label} `
  } else if (result === 'WARN') {
    auditReport.issueFail += 1
    return `_y_ ${g.char.warn} ${label} `
  } else {
    auditReport.issueFail += 1
    return `_r_ ${g.char.fail} ${label} `
  }
}

function outResultsLine(comp) {
  const short = p.repo + comp.component.split(p.repo)[1]

  const parts = short.split(p.sep)

  const compFile = parts[parts.length - 1]

  const compPath = parts.join(p.sep).replace(compFile, '')

  let r = ''

  // has docs?
  if (comp.usage && comp.interface) {
    r += getString('DOCS', 'PASS')
  } else if (comp.usage || comp.interface) {
    r += getString('DOCS', 'WARN')
  } else {
    r += getString('DOCS', 'FAIL')
  }

  // has stories?
  if (comp.story) {
    r += getString('STORY', 'PASS')
  } else {
    r += getString('STORY', 'FAIL')
  }

  // has tests?
  if (comp.tests) {
    r += getString('TEST', 'PASS')
  } else {
    r += getString('TEST', 'FAIL')
  }

  // has props?
  if (comp.props) {
    r += getString('PROPS', 'PASS')
  } else {
    r += getString('PROPS', 'FAIL')
  }

  r += ` _b_${compPath}_c_${compFile}`

  if (r.indexOf('×') !== -1) {
    auditReport.compFail += 1
    g.out(r)
  } else if (mode.isVerbose) {
    auditReport.compPass += 1
    g.out(r)
  }
}

function auditEnd() {
  const keys = Object.keys(auditResults)

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]

    const comps = Object.keys(auditResults[k].components)

    if (mode.isVerbose) {
      g.out()
      g.out(`_p_ @kyper/${k}`)
    }

    for (let j = 0; j < comps.length; j++) {
      const c = comps[j]

      outResultsLine(auditResults[k].components[c])
    }

    auditReport.compCount += comps.length
  }

  if (mode.isVerbose) {
    g.out()
  }
  g.bannerCyan(`DONE`)
  if (mode.isVerbose) {
    g.out(`_g_ ${auditReport.compPass} components pass all checks`)
  }
  g.out(`_y_ ${auditReport.compFail} components with ${auditReport.issueFail} issues`)
  g.out()
}

function init() {
  // log the running script
  g.logInfo(`npm run audit`, `_p_${g.readSettings('path').script}`)
}

function readInput() {
  mode.isVerbose =
    (args && args.extra && (args.extra[0] === '-v' || args.extra[1] === '-v')) || false

  mode.isFix = (args && args.extra && (args.extra[0] === '-f' || args.extra[1] === '-f')) || false

  let modes = ''

  if (mode.isVerbose) {
    modes += `_c_ Verbose: true `
  } else {
    modes += `_b_ Verbose: false `
  }

  if (mode.isFix) {
    modes += `_c_ Fix: true `
  } else {
    modes += `_b_ Fix: false `
  }

  if (mode.isVerbose || mode.isFix) {
    g.out(`${modes}\n`)
  }
}

function main() {
  init()
  readInput()
  auditBegin()
  auditEnd()
}

main()
