var g = Object.defineProperty
var f = (i, s, a) =>
  s in i
    ? g(i, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (i[s] = a)
var d = (i, s, a) => f(i, typeof s != 'symbol' ? s + '' : s, a)
;(function () {
  'use strict'
  function i(r) {
    let e = !1
    if (typeof r == 'string')
      try {
        JSON.parse(r), (e = !0)
      } catch {
        e = !1
      }
    return e
  }
  class s {
    constructor() {
      d(this, 'platform', 'web')
      d(this, 'targetOrigin', '*')
    }
    subscribe(e, t) {
      if (e) {
        const n = new CustomEvent(e, { detail: { ...t } })
        dispatchEvent(n)
      }
    }
    handleMessages() {
      window.addEventListener('message', (e) => {
        try {
          if (e.data && i(e.data) && e.origin) {
            const { payload: t, name: n } = JSON.parse(e.data)
            this.subscribe(n, t)
          }
        } catch (t) {
          console.log(t)
        }
      })
    }
    dispatch(e, t) {
      var n
      try {
        const o = JSON.stringify({ name: e, payload: t })
        ;(n = window.parent) == null || n.postMessage(o, this.targetOrigin)
      } catch (o) {
        console.error('Error Dispatch in webview : ', o)
      }
    }
    ready(e = 'web', t = '*') {
      ;(this.platform = e), (this.targetOrigin = t), this.handleMessages()
    }
  }
  const a = new s(),
    c = {
      setTitle: (r) => {
        a.dispatch('setTitle', { title: r })
      },
      iframeLoaded: () => {
        document.addEventListener('DOMContentLoaded', () => {
          a.dispatch('iframeLoaded')
        })
      }
    }
  function l() {
    a.ready(), (window.bridge = { ...c }), c.iframeLoaded()
  }
  l()
})()
