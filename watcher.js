function Watcher() {
  this.handle = {}
}
Watcher.prototype.$on = function(key, callback) {
  this.handle[key] = this.handle[key] || []
  this.handle[key].push(callback)
}
Watcher.prototype.$emit = function(key, value) {
  this.handle[key].forEach(v => v(value))
}