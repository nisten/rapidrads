export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `App has been updated!` +
        `Reload?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
  }