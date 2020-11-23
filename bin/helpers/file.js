const g = require('./global')
const fs = require('fs')
const p = require('path')

// recursively make sure `path` exists otherwise create it
function ensureDirectoryExists(path) {
  const dirname = p.dirname(path)

  if (fs.existsSync(dirname)) {
    return 1
  }

  ensureDirectoryExists(dirname)
  fs.mkdirSync(dirname)

  return 0
}

// returns character number of first occurance (or -1 if not found)
function fileContains(filePath, searchText) {
  g.logCall(`fileContains`, [
    { key: 'filePath', value: filePath },
    { key: 'searchText', value: searchText },
  ])

  try {
    const data = fs.readFileSync(filePath, 'utf8')

    return data.indexOf(searchText)
  } catch (err) {
    // handle error
  }

  return -1
}

// returns true if the file in `path` already exists
function fileExists(path) {
  g.logCall(`fileExists`, [{ key: 'path', value: path }])

  let result = false

  try {
    if (fs.existsSync(path)) {
      result = true
    }
  } catch (err) {
    g.logWarning(`fileExists`, `_y_Failed to check if file exists... _w_${path}\n\n_y_${err}`)
  }

  return result
}

// returns true if the dir in `path` exists
function dirExists(path) {
  g.logCall(`dirExists`, [{ key: 'path', value: path }])

  let result = false

  fs.access(path, function(err) {
    if (err) {
      g.logWarning(`dirExists`, `_y_Directory does not exist... _w_${path}\n\n_r_${err}`)
    } else {
      result = true
    }

    return result
  })
}

// writes fileContent to fileName unless it exists (creates directory structure as needed)
function fileWrite(path, content) {
  g.logCall(`fileWrite`, [
    { key: 'path', value: path },
    { key: 'content', value: content },
  ])

  if (fileExists(path)) {
    g.logError(`fileWrite`, `_r_File already exists... _w_${path}`)
  } else {
    ensureDirectoryExists(path)
    fs.writeFile(path, content, { flag: 'wx' }, err => {
      if (err) {
        g.logError(`fileWrite`, `_r_Failed to write file... _w_${path}\n\n_r_${err}`)
      } else {
        g.logSuccess(`fileWrite`, `_g_File created... _w_${path} _p_(${content.length} bytes)`)
      }
    })
  }
}

// writes fileContent to fileName (overwriting if it exists)
function fileOverwrite(path, content) {
  g.logCall(`fileOverwrite`, [
    { key: 'path', value: path },
    { key: 'content', value: content },
  ])

  if (fileExists(path)) {
    g.logWarning(`fileOverwrite`, `_y_File already exists... _w_${path} )`)
  }

  ensureDirectoryExists(path)
  fs.writeFile(path, content, { flag: 'w' }, err => {
    if (err) {
      g.logError(`fileOverwrite`, `_r_Failed to overwrite file... _w_${path}\n\n_r_${err}`)
    } else {
      g.logSuccess(`fileOverwrite`, `_g_File written... _w_${path} _p_(${content.length} bytes)`)
    }
  })
}

// delete `path` from disk
function fileDelete(path) {
  g.logCall(`fileDelete`, [{ key: 'path', value: path }])

  if (fileExists(path)) {
    try {
      fs.unlinkSync(path)
      g.logSuccess(`fileDelete`, `_g_Successfully deleted... _w_${path}`)
    } catch (err) {
      g.logError(`fileDelete`, `_r_Failed to delte file... _w_${path}\n\n_r_${err}`)
    }
  } else {
    g.logWarning(`fileDelete`, `_y_File to delete not found... _w_${path}`)
  }
}

// TODO: read info about or content from a file
function fileRead(path) {
  g.logCall(`fileRead`, [{ key: 'path', value: path }])
}

// returns true if dir is a valid kyper component
function isValidComponentDir(dir) {
  return dir[0] !== '.'
}

// get list of directories in dirPath
function getDirs(dirPath) {
  const chkDir = dP =>
    fs.readdirSync(dP).filter(file => fs.statSync(dP + p.sep + file).isDirectory())

  const dList = chkDir(dirPath)

  for (let i = 0; i < dList.length; i++) {
    dList[i] = dirPath + p.sep + dList[i]
  }

  return dList
}

// recursively get all directories in nested dirPath
function getDirsAll(dirPath) {
  g.logCall(`getDirsAll`, [{ key: 'dirPath', value: dirPath }])

  return []
}

// get list of files in dirPath
function getFiles(dirPath) {
  g.logCall(`getFiles`, [{ key: 'dirPath', value: dirPath }])

  let dList = []

  try {
    const chkDir = dP =>
      fs.readdirSync(dP).filter(file => !fs.statSync(dP + p.sep + file).isDirectory())

    dList = chkDir(dirPath)
    for (let i = 0; i < dList.length; i++) {
      dList[i] = dirPath + p.sep + dList[i]
    }
  } catch (err) {
    // handle error
  }

  return dList
}

// recursively get all files in nested dirPath
function getFilesAll(dirPath, fileList) {
  g.logCall(`getFilesAll`, [
    { key: 'dirPath', value: dirPath },
    { key: 'fileList', value: fileList },
  ])

  let fList = fileList || []

  try {
    const files = fs.readdirSync(dirPath)

    files.forEach(function(file) {
      if (fs.statSync(dirPath + p.sep + file).isDirectory()) {
        fList = getFilesAll(dirPath + p.sep + file, fList)
      } else {
        fList.push(p.join(dirPath, p.sep, file))
      }
    })
  } catch (err) {
    // handle error
  }

  return fList
}

exports.getDirs = getDirs
exports.getDirsAll = getDirsAll
exports.getFiles = getFiles
exports.getFilesAll = getFilesAll
exports.ensureDirectoryExists = ensureDirectoryExists
exports.dirExists = dirExists
exports.fileContains = fileContains
exports.fileExists = fileExists
exports.fileRead = fileRead
exports.fileWrite = fileWrite
exports.fileOverwrite = fileOverwrite
exports.fileDelete = fileDelete
exports.isValidComponentDir = isValidComponentDir
