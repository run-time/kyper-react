;(() => {
  // this script runs after each individual document iframe loads
  window.addEventListener('load', event => {
    initSidebarClickNav()
  })

  function initSidebarClickNav() {
    let usageInterval = null
    let usageTimeout = 200

    function selectUsagePage(usageLink) {
      usageLink.click(usageLink)
    }

    function resetUsage() {
      usageTimeout = 200
      clearInterval(usageInterval)
    }

    function checkComponentClick(type, comp) {
      const suffix = `usage--page`
      const usageId = `#${type}-${comp}-${suffix}`
      const usageLink = document.querySelector(usageId)

      if (usageLink) {
        resetUsage()
        selectUsagePage(usageLink)
      } else if (usageTimeout > 0) {
        usageTimeout -= 1
      } else {
        // timeout before usage page found
        resetUsage()
      }
    }

    function startUsageInterval(type, comp, delay) {
      if (usageInterval) {
        resetUsage()
      }
      usageInterval = setInterval(() => {
        checkComponentClick(type, comp)
      }, delay)
    }

    let setupDelay = 20
    setTimeout(setupClickNav, setupDelay)

    function setupClickNav() {
      const sidebarComponentLinks = document.querySelectorAll(
        '[data-title="COMPONENTS"] > a.sidebar-item',
      )

      if (sidebarComponentLinks.length > 0) {
        for (let i = 0; i < sidebarComponentLinks.length; i++) {
          const c = sidebarComponentLinks[i]
          const parts = c.id.split('-')
          const type = parts[0] || 'unknown'
          const comp = parts[1] || 'unknown'

          if (type === 'components') {
            c.addEventListener('click', () => {
              startUsageInterval(type, comp, 10)
            })
          }
        }
      } else if (setupDelay < 2000) {
        setupDelay = Math.floor(setupDelay * 1.6)
        setTimeout(setupClickNav, setupDelay)
      }
    }
  }
})()
