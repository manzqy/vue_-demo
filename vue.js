function Vue(options) {
  var watcher = new Watcher()
  for(let key in options.data) {
    Object.defineProperty(this, key, {
      get() {
        return options.data[key]
      },
      set(value) {
        watcher.$emit(key, value)
      }
    })
  }
  watcher.$on('name', (value) => {
    console.log(value)
    document.getElementsByTagName('h1')[0].innerHTML = value
  })
}