window.timeOutHelper = (call_back, time_in_milli_seconds = 100 ) => {
    const handler = setTimeout(() => {
      call_back()
      clearTimeout(handler)
    }, time_in_milli_seconds)
}