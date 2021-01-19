"use strict";

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _a = new WeakMap();

class Store {


  constructor() {
    _a.set(this, {
      writable: true, value: void 0
    });

    _classPrivateFieldSet(this, _a, 2);
  }

  getA() {
    return _classPrivateFieldGet(this, _a);
  }
}

let a = new Store();

console.log(a.getA());

export default {
  // Создать функционал Vuex с ассинхронностью actions
  install(Vue, options) {
    Vue.prototype.$store = {
      state: {
        fontSize: 12,
      },
      actions: {
        increaseFontSize(value = 0) {
          this.fontSize += value;
        },
        getFontSize() {
          return this.fontSize;
        }
      }
    }
  }
};