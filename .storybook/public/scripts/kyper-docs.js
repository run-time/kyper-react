;(() => {
  // runs inside document iframe on initial page load
  window.addEventListener('load', event => {
    setInterval(checkState, 1000)
  })

  // adds click copy hex color to each color block in the document
  function addClickCopyHexColor(colorBlocks) {
    const getNotification = el => {
      const hex = el.querySelector('.values').innerText
      const anchor = el.querySelector('.color')
      const note = document.createElement('div')

      note.classList.add('copy-notification')
      note.innerHTML = `copied <b>${hex}</b>`
      anchor.append(note)

      setTimeout(() => {
        note.remove()
      }, 2000)
    }

    const updateClipboard = clipContent => {
      navigator.clipboard.writeText(clipContent).then(
        function() {
          // Success: notify user clipContent is on the clipboard
          console.log(`${clipContent} was copied to clipboard`)
        },
        function() {
          // Error: clipboard write failed
          console.warn(`${clipContent} failed to copy to clipboard`)
        },
      )
    }

    for (let i = 0; i < colorBlocks.length; i++) {
      let b = colorBlocks[i]

      b.addEventListener('click', e => {
        const colorBlock = e.currentTarget
        const clipContent = colorBlock.querySelector('.values').innerText

        if (clipContent) {
          updateClipboard(clipContent)
          getNotification(colorBlock)
        }
      })
    }
  }

  // adds click zoom-in / zoom-out to document images
  function addClickZoomImages(imageBlocks) {
    for (let i = 0; i < imageBlocks.length; i++) {
      let b = imageBlocks[i]

      b.classList.add('image-zoom-in')
      b.addEventListener('click', e => {
        const imgBlock = e.currentTarget

        if (imgBlock.nodeName.toLowerCase() === 'video') {
          e.preventDefault()
        }

        imgBlock.classList.toggle('image-zoom-out')
      })
    }
  }

  function init() {
    const colorBlocks = document.querySelectorAll('.color-example')
    const imageList = document.querySelectorAll('.sbdocs-img,video')

    if (colorBlocks.length > 0) {
      addClickCopyHexColor(colorBlocks)
    }

    if (imageList.length > 0) {
      let imageBlocks = []

      for (let i = 0; i < imageList.length; i++) {
        let el = imageList[i]

        if (el.nodeName.toLowerCase() === 'video') {
          imageBlocks.push(el)
        } else {
          if (!imageBlocks.includes(el.parentElement)) {
            imageBlocks.push(el.parentElement)
          }
        }
      }

      addClickZoomImages(imageBlocks)
    }
  }

  function checkState() {
    const docsRoot = document.querySelector('.sbdocs-wrapper')
    const isInitialized = docsRoot ? docsRoot.classList.contains('mx-init') : false

    if (!isInitialized && docsRoot) {
      docsRoot.classList.add('mx-init')
      init()
    }
  }
})()
