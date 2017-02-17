(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _id = 0;
var id = function id() {
  return ++_id;
};

var hash = function hash(n) {
  return n.sort(function (a, b) {
    return a > b;
  }).join('$');
};
var remove = function remove(a, v) {
  return a.splice(a.indexOf(v), 1);
};
var getComponent = function getComponent(n) {
  return components.get(n) || newComponent(n);
};
var clone = function clone(o) {
  return JSON.parse(JSON.stringify(o));
};
var sigs = new Map();
var tsigs = new Map();
var tags = new Map();
var entities = [];
var components = new Map();

var Signature = function () {
  function Signature(n) {
    var _this = this;

    _classCallCheck(this, Signature);

    this.na = n;
    this.en = [];
    entities.forEach(function (e) {
      return _this.onAdd(e);
    });
  }

  _createClass(Signature, [{
    key: 'match',
    value: function match(e) {
      var k = Object.keys(e.components);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.na[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var n = _step.value;

          if (!k.includes(n)) return false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: 'onAdd',
    value: function onAdd(e) {
      if (this.en.includes(e)) return;
      this.match(e) && this.en.push(e);
    }
  }, {
    key: 'onRem',
    value: function onRem(e, c) {
      this.na.includes(c) && remove(this.en, e);
    }
  }], [{
    key: 'get',
    value: function get(n) {
      var h = hash(n);
      return sigs.has(h) ? sigs.get(h) : Signature.make(n, h);
    }
  }, {
    key: 'make',
    value: function make(n, h) {
      var t = new Signature(n);
      sigs.set(h, t);
      return t;
    }
  }]);

  return Signature;
}();

var TagSignature = function (_Signature) {
  _inherits(TagSignature, _Signature);

  function TagSignature() {
    _classCallCheck(this, TagSignature);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TagSignature).apply(this, arguments));
  }

  _createClass(TagSignature, [{
    key: 'match',
    value: function match(e) {
      var k = Object.keys(e.tags);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.na[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var n = _step2.value;

          if (!k.includes(n)) return false;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.en.push(e);
    }
  }], [{
    key: 'get',
    value: function get(n) {
      var h = hash(n);
      return tsigs.has(h) ? tsigs.get(h) : TagSignature.make(n, h);
    }
  }, {
    key: 'make',
    value: function make(n, h) {
      var t = new TagSignature(n);
      tsigs.set(h, t);
      return t;
    }
  }]);

  return TagSignature;
}(Signature);

var reserve = ['t', 'id', 'listeners', 'serialize', 'deserialize', 'add', 'remove', 'has', 'destroy', 'tag', 'untag', 'components', 'on', 'off', 'once', 'emit'];

var Entity = function () {
  function Entity(id) {
    _classCallCheck(this, Entity);

    this.id = id;
    this.tags = {};
    this.listeners = new Map();
  }

  _createClass(Entity, [{
    key: 'serialize',
    value: function serialize() {
      var _this3 = this;

      return {
        id: this.id,
        tags: Object.keys(this.t),
        components: function () {
          var s = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = Object.keys(_this3.components)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var n = _step3.value;

              s.push({
                name: n,
                value: _this3[n].serialize ? _this3[n].serialize() : clone(_this3[n])
              });
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          return s;
        }()
      };
    }
  }, {
    key: 'add',
    value: function add(n) {
      for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        a[_key - 1] = arguments[_key];
      }

      attachTo(this, n, getComponent(n).apply(undefined, [this].concat(a)));
      return this;
    }
  }, {
    key: 'remove',
    value: function remove(n) {
      var _n,
          _this4 = this;

      if (!this[n]) return;

      for (var _len2 = arguments.length, a = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        a[_key2 - 1] = arguments[_key2];
      }

      this[n].unmount && (_n = this[n]).unmount.apply(_n, [this].concat(a));
      delete this[n];
      sigs.forEach(function (t) {
        return t.onRem(_this4, n);
      });
      return this;
    }
  }, {
    key: 'mandate',
    value: function mandate(n) {
      for (var _len3 = arguments.length, a = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        a[_key3 - 1] = arguments[_key3];
      }

      if (!this[n]) this.add.apply(this, [n].concat(a));
      return this[n];
    }
  }, {
    key: 'has',
    value: function has(n) {
      return !!this[n];
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _destroy(this);
    }
  }, {
    key: 'tag',
    value: function tag(n) {
      var _this5 = this;

      var a = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var t = getTag(n);
      Object.assign(t, a);
      if (n in this.tags) return this;
      this.tags[n] = t;
      tsigs.forEach(function (t) {
        return t.onAdd(_this5);
      });
      return this;
    }
  }, {
    key: 'untag',
    value: function untag(n) {
      var _this6 = this;

      if (!this.tags[n]) return;
      delete this.tags[n];
      tsigs.forEach(function (t) {
        return t.onRem(_this6, n);
      });
      return this;
    }
  }, {
    key: 'on',
    value: function on(e, f) {
      this.listeners.has(e) || this.listeners.set(e, []);
      this.listeners.get(e).push(f);
      return this;
    }
  }, {
    key: 'once',
    value: function once(e, f) {
      var _this7 = this;

      var fn = function fn() {
        _this7.off(e, f);
        f.apply(undefined, arguments);
      };
      fn._ = f;
      return this.on(e, fn);
    }
  }, {
    key: 'off',
    value: function off(e, f) {
      var ls = this.listeners.get(e);
      if (ls && ls.length) {
        ls.forEach(function (l, i) {
          if (l === f || l._ === f) {
            ls.splice(i, 1);
          }
        });
      }

      ls.length ? this.listeners.set(e, ls) : this.listeners.delete(e);

      return this;
    }
  }, {
    key: 'emit',
    value: function emit(e) {
      for (var _len4 = arguments.length, a = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        a[_key4 - 1] = arguments[_key4];
      }

      var ls = this.listeners.get(e);
      if (ls && ls.length) {
        ls.forEach(function (l) {
          return l.apply(undefined, a);
        });
      }
      return this;
    }
  }, {
    key: 'components',
    get: function get() {
      var _this8 = this;

      var c = {};
      Object.keys(this).filter(function (k) {
        return !reserve.includes(k);
      }).forEach(function (k) {
        return c[k] = _this8[k];
      });
      return c;
    }
  }], [{
    key: 'deserialize',
    value: function deserialize(d) {
      var e = entity(d.id);
      d.tags.forEach(function (t) {
        return e.tag(t);
      });
      d.components.forEach(function (c) {
        var m = getComponent(c.name);
        if (m.deserialize) {
          attachTo(e, c.name, m.deserialize(e, c.value));
        } else {
          if (_typeof(c.value) !== 'object') {
            attachTo(e, c.name, c.value);
            return;
          }
          var ins = m(e) || {};
          Object.assign(ins, c.value);
          attachTo(e, c.name, ins);
        }
      });
    }
  }]);

  return Entity;
}();

var attachTo = function attachTo(e, n, c) {
  e[n] = c;
  c.mount && c.mount(e);
  sigs.forEach(function (s) {
    return s.onAdd(e);
  });
};

var newComponent = function newComponent(n) {
  var c = function c(entity) {};
  components.set(n, c);
  return c;
};

var newTag = function newTag(n) {
  var t = {};
  tags.set(n, t);
  return t;
};

var szTags = function szTags() {
  return [].concat(_toConsumableArray(tags)).map(function (v) {
    return {
      name: v[0],
      value: v[1].serialize ? v[1].serialize() : clone(v[1])
    };
  });
};

var szEnts = function szEnts() {
  return entities.map(function (e) {
    return e.serialize();
  });
};
var getTag = exports.getTag = function getTag(n) {
  return tags.get(n) || newTag(n);
};
var component = exports.component = function component(n, d) {
  if (reserve.includes(n)) throw 'Cannot use a reserved keyword as a component';
  components.set(n, d);
};
var findByComponent = exports.findByComponent = function findByComponent() {
  for (var _len5 = arguments.length, n = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    n[_key5] = arguments[_key5];
  }

  return Signature.get(n).en;
};
var findByTag = exports.findByTag = function findByTag() {
  for (var _len6 = arguments.length, n = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    n[_key6] = arguments[_key6];
  }

  return TagSignature.get(n).en;
};
var findById = exports.findById = function findById(id) {
  return entities.find(function (e) {
    return e.id === id;
  });
};
var serialize = exports.serialize = function serialize() {
  return { tags: szTags(), entities: szEnts() };
};
var entity = exports.entity = function entity() {
  var i = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  var e = new Entity(i || id());
  entities.push(e);
  sigs.forEach(function (t) {
    return t.match(e);
  });
  return e;
};

var deserialize = exports.deserialize = function deserialize(data) {
  data.tags.forEach(function (t) {
    return Object.assign(getTag(t.name), t.value);
  });
  data.entities.forEach(function (e) {
    return Entity.deserialize(e);
  });
};

var _destroy = function _destroy(e) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = Object.keys(e.components)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var n = _step4.value;
      e.remove(n);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = Object.keys(e.tags)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var t = _step5.value;
      e.untag(t);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  remove(entities, e);
};

exports.destroy = _destroy;
var clear = exports.clear = function clear() {
  entities.forEach(function (e) {
    return e.destroy();
  });
  sigs = new Map();
  tsigs = new Map();
  tags = new Map();
  entities = [];
};

exports.default = {
  clear: clear,
  entity: entity,
  getTag: getTag,
  destroy: _destroy,
  findById: findById,
  findByTag: findByTag,
  serialize: serialize,
  deserialize: deserialize,
  component: component,
  findByComponent: findByComponent
};
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entityFactory = require('./entities/entity-factory');

var _entityFactory2 = _interopRequireDefault(_entityFactory);

var _commandQueue = require('./input/command-queue');

var _commandQueue2 = _interopRequireDefault(_commandQueue);

var _mapInputController = require('./input/controllers/map-input-controller');

var _mapInputController2 = _interopRequireDefault(_mapInputController);

var _map = require('./prefabs/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: 'init',
    value: function init(game) {
      this.game = game;
      this.input = this.game.input;
      this.create = new _entityFactory2.default();
      this.map = new _map2.default('paradise');
      this.commandQueue = new _commandQueue2.default();
      this.inputController = new _mapInputController2.default();
    }
  }, {
    key: 'worldX',
    value: function worldX(x) {
      return x * this.constants.TILE_SIZE;
    }
  }, {
    key: 'worldY',
    value: function worldY(y) {
      return y * this.constants.TILE_SIZE;
    }
  }, {
    key: 'tileX',
    value: function tileX(worldX) {
      return Math.floor(worldX / this.constants.TILE_SIZE);
    }
  }, {
    key: 'tileY',
    value: function tileY(worldY) {
      return Math.floor(worldY / this.constants.TILE_SIZE);
    }
  }, {
    key: 'update',
    value: function update() {
      this.inputController.handle();
      this.commandQueue.processAll();
    }
  }, {
    key: 'constants',
    get: function get() {
      return {
        'TILE_SIZE': 16
      };
    }
  }]);

  return App;
}();

;

var app = new App();

exports.app = app;
exports.default = app;

},{"./entities/entity-factory":11,"./input/command-queue":16,"./input/controllers/map-input-controller":20,"./prefabs/map":23}],3:[function(require,module,exports){
'use strict';

require('./phaser/bootstrap');

var _preload = require('./states/preload');

var _preload2 = _interopRequireDefault(_preload);

var _loading = require('./states/loading');

var _loading2 = _interopRequireDefault(_loading);

var _game = require('./states/game');

var _game2 = _interopRequireDefault(_game);

require('./components');

require('./entities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$Game) {
  _inherits(Boot, _Phaser$Game);

  function Boot() {
    _classCallCheck(this, Boot);

    var _this = _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this, 16 * 16, 16 * 16, Phaser.AUTO, 'game-container', null, false, false));

    _this.state.add('Preload', _preload2.default);
    _this.state.add('Loading', _loading2.default);
    _this.state.add('Game', _game2.default);

    _this.state.start('Preload');
    return _this;
  }

  return Boot;
}(Phaser.Game);

;

new Boot();

},{"./components":5,"./entities":12,"./phaser/bootstrap":21,"./states/game":24,"./states/loading":25,"./states/preload":26}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geotic = require('geotic');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(position) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var offsetX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var offsetY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Bounds);

    this.position = position;
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  _createClass(Bounds, [{
    key: 'contains',
    value: function contains(x, y) {
      return x > this.leftBound && x < this.rightBound && y > this.topBound && y < this.bottomBound;
    }
  }, {
    key: 'collidesLeft',
    value: function collidesLeft(other) {
      return this.leftBound < other.rightBound && this.leftBound >= other.leftBound;
    }
  }, {
    key: 'collidesRight',
    value: function collidesRight(other) {
      return this.rightBound > other.leftBound && this.rightBound <= other.rightBound;
    }
  }, {
    key: 'collidesTop',
    value: function collidesTop(other) {
      return this.topBound < other.bottomBound && this.topBound >= other.topBound;
    }
  }, {
    key: 'collidesBottom',
    value: function collidesBottom(other) {
      return this.bottomBound > other.topBound && this.bottomBound <= other.bottomBound;
    }
  }, {
    key: 'collidesWith',
    value: function collidesWith(other) {
      return other != this && (this.collidesLeft(other) || this.collidesRight(other)) && (this.collidesTop(other) || this.collidesBottom(other));
    }
  }, {
    key: 'leftBound',
    get: function get() {
      return this.position.x + this.offsetX;
    }
  }, {
    key: 'rightBound',
    get: function get() {
      return this.position.x + this.width + this.offsetX;
    }
  }, {
    key: 'topBound',
    get: function get() {
      return this.position.y + this.offsetY;
    }
  }, {
    key: 'bottomBound',
    get: function get() {
      return this.position.y + this.height + this.offsetY;
    }
  }]);

  return Bounds;
}();

(0, _geotic.component)('bounds', function (entity) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var position = entity.mandate('position');
  return new (Function.prototype.bind.apply(Bounds, [null].concat([position], args)))();
});

},{"geotic":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sprite = require('./sprite');

Object.defineProperty(exports, 'sprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sprite).default;
  }
});

var _renderable = require('./renderable');

Object.defineProperty(exports, 'renderable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_renderable).default;
  }
});

var _spawnable = require('./spawnable');

Object.defineProperty(exports, 'spawnable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spawnable).default;
  }
});

var _position = require('./position');

Object.defineProperty(exports, 'position', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_position).default;
  }
});

var _bounds = require('./bounds');

Object.defineProperty(exports, 'bounds', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bounds).default;
  }
});

var _positionBoundSprite = require('./position-bound-sprite');

Object.defineProperty(exports, 'positionBoundSprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_positionBoundSprite).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./bounds":4,"./position":7,"./position-bound-sprite":6,"./renderable":8,"./spawnable":9,"./sprite":10}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geotic = require('geotic');

var _app = require('./../app');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PositionBoundSprite = function () {
  function PositionBoundSprite(position, sprite) {
    var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, PositionBoundSprite);

    this.position = position;
    this.sprite = sprite;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.synchronizeSprite();
  }

  _createClass(PositionBoundSprite, [{
    key: 'synchronizeSprite',
    value: function synchronizeSprite() {
      this.sprite.x = this.position.worldX + this.offsetX;
      this.sprite.y = this.position.worldY + this.offsetY;
    }
  }]);

  return PositionBoundSprite;
}();

(0, _geotic.component)('position-bound-sprite', function (entity) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var position = entity.mandate('position');
  var sprite = entity.mandate('sprite');
  var binder = new (Function.prototype.bind.apply(PositionBoundSprite, [null].concat([position, sprite], args)))();

  entity.on('position-changed', binder.synchronizeSprite.bind(binder));

  return binder;
});

},{"./../app":2,"geotic":1}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geotic = require('geotic');

var _app = require('./../app');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function () {
  function Position(entity) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Position);

    this.entity = entity;
    this._x = x;
    this._y = y;
  }

  _createClass(Position, [{
    key: 'compacted',
    get: function get() {
      return {
        x: this._x,
        y: this._y
      };
    }
  }, {
    key: 'x',
    set: function set(newX) {
      var oldPosition = this.compacted;
      this._x = newX;
      var newPosition = this.compacted;
      console.log('emit position changed');
      this.entity.emit('position-changed', oldPosition, newPosition);
    },
    get: function get() {
      return this._x;
    }
  }, {
    key: 'y',
    set: function set(newY) {
      var oldPosition = this.compacted;
      this._y = newY;
      var newPosition = this.compacted;
      this.entity.emit('position-changed', oldPosition, newPosition);
    },
    get: function get() {
      return this._y;
    }
  }, {
    key: 'worldX',
    get: function get() {
      return this._x * _app.app.constants.TILE_SIZE;
    }
  }, {
    key: 'worldY',
    get: function get() {
      return this._y * _app.app.constants.TILE_SIZE;
    }
  }]);

  return Position;
}();

(0, _geotic.component)('position', function (entity) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return new Position(entity, x, y);
});

},{"./../app":2,"geotic":1}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geotic = require('geotic');

var _app = require('./../app');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderable = function () {
  function Renderable(subject) {
    _classCallCheck(this, Renderable);

    this.subject = subject;
  }

  _createClass(Renderable, [{
    key: 'render',
    value: function render(canvas) {
      return canvas.add(this.subject);
    }
  }]);

  return Renderable;
}();

(0, _geotic.component)('renderable', function (entity, subject) {
  var r = new Renderable(subject);
  entity.render = r.render.bind(r);
  return r;
});

},{"./../app":2,"geotic":1}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _geotic = require('geotic');

var _app = require('./../app');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spawnable = function () {
  function Spawnable(entity, test) {
    _classCallCheck(this, Spawnable);

    this.entity = entity;
    this.test = test;
    this.entity.spawn = this.spawn.bind(this);
    this.entity.canSpawnAt = this.canSpawnAt.bind(this);
  }

  _createClass(Spawnable, [{
    key: 'canSpawnAt',
    value: function canSpawnAt(x, y) {
      return this.test(x, y);
    }
  }, {
    key: 'spawn',
    value: function spawn() {
      this.entity.emit('spawn');
      return this.entity;
    }
  }]);

  return Spawnable;
}();

(0, _geotic.component)('spawnable', function (entity) {
  var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return new Spawnable(entity, test);
});

},{"./../app":2,"geotic":1}],10:[function(require,module,exports){
'use strict';

var _geotic = require('geotic');

var _app = require('./../app');

(0, _geotic.component)('sprite', function (entity) {
  var x = void 0,
      y = 0;
  var key = void 0,
      frame = null;

  switch (arguments.length <= 1 ? 0 : arguments.length - 1) {
    case 0:
      break;
    case 1:
      key = arguments.length <= 1 ? undefined : arguments[1];
      break;
    case 2:
      key = arguments.length <= 1 ? undefined : arguments[1];
      frame = arguments.length <= 2 ? undefined : arguments[2];
      break;
    case 3:
      x = arguments.length <= 1 ? undefined : arguments[1];
      y = arguments.length <= 2 ? undefined : arguments[2];
      key = arguments.length <= 3 ? undefined : arguments[3];
      break;
    case 4:
      x = arguments.length <= 1 ? undefined : arguments[1];
      y = arguments.length <= 2 ? undefined : arguments[2];
      key = arguments.length <= 3 ? undefined : arguments[3];
      frame = arguments.length <= 4 ? undefined : arguments[4];
      break;
  }

  var sprite = new Phaser.Sprite(_app.app.game, x, y, key, frame);
  entity.mandate('renderable', sprite);
  return sprite;
});

},{"./../app":2,"geotic":1}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityFactory = function () {
  function EntityFactory() {
    _classCallCheck(this, EntityFactory);
  }

  _createClass(EntityFactory, [{
    key: 'tower',
    value: function tower(x, y) {
      return _index2.default.tower(x, y);
    }
  }, {
    key: 'shrub',
    value: function shrub(x, y) {
      return _index2.default.shrub(x, y);
    }
  }, {
    key: 'pineTree',
    value: function pineTree(x, y) {
      return _index2.default.pineTree(x, y);
    }
  }]);

  return EntityFactory;
}();

exports.default = EntityFactory;

},{"./index":12}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pineTree = exports.shrub = exports.tower = undefined;

var _tower = require('./tower');

var _tower2 = _interopRequireDefault(_tower);

var _shrub = require('./shrub');

var _shrub2 = _interopRequireDefault(_shrub);

var _pineTree = require('./pine-tree');

var _pineTree2 = _interopRequireDefault(_pineTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tower = _tower2.default;
exports.shrub = _shrub2.default;
exports.pineTree = _pineTree2.default;
exports.default = { tower: _tower2.default, shrub: _shrub2.default, pineTree: _pineTree2.default };

},{"./pine-tree":13,"./shrub":14,"./tower":15}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geotic = require('geotic');

var _geotic2 = _interopRequireDefault(_geotic);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x, y) {
  var tree = (0, _geotic.entity)().add('position', x, y).add('sprite', 'pine-tree').add('position-bound-sprite', 0, -16).add('spawnable', function (x, y) {
    return _geotic2.default.findByComponent('bounds').every(function (e) {
      return !tree.bounds.collidesWith(e.bounds);
    });
  }).add('bounds', 2, 2).once('spawn', function () {
    tree.render(_app2.default.map.static);
    _app2.default.map.static.sort('y');
    console.log('tree spawned.');
  });

  return tree;
};

},{"../app":2,"geotic":1}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geotic = require('geotic');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x, y) {
  var shrub = (0, _geotic.entity)().add('sprite', _app2.default.worldX(x), _app2.default.worldY(y), 32, 32, 'shrub').add('spawnable').on('spawn', function () {
    return shrub.render(_app2.default.map.static);
  });

  return shrub;
};

},{"../app":2,"geotic":1}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geotic = require('geotic');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (x, y) {
  var tower = (0, _geotic.entity)().add('sprite', _app2.default.worldX(x), _app2.default.worldY(y) - 16, 16, 32, 'tower').add('spawnable');
  // .on('spawn', () => tower.render(app.map.walls));

  return tower;
};

},{"../app":2,"geotic":1}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandQueue = function () {
  function CommandQueue() {
    var _this = this;

    var commands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, CommandQueue);

    this.commands = [];
    commands.forEach(function (c) {
      return _this.push(c);
    });
  }

  _createClass(CommandQueue, [{
    key: "process",
    value: function process() {
      if (this.commands.length) {
        var command = this.commands.shift();
        command.execute();
        return true;
      }
      return false;
    }
  }, {
    key: "processAll",
    value: function processAll() {
      this.process() && this.processAll();
    }
  }, {
    key: "push",
    value: function push(command) {
      this.commands.push(command);
    }
  }]);

  return CommandQueue;
}();

exports.default = CommandQueue;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
  function Command() {
    _classCallCheck(this, Command);
  }

  _createClass(Command, [{
    key: "execute",
    value: function execute() {}
  }]);

  return Command;
}();

exports.default = Command;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _command = require('./command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpawnEntityCommand = function (_Command) {
  _inherits(SpawnEntityCommand, _Command);

  function SpawnEntityCommand(entity) {
    _classCallCheck(this, SpawnEntityCommand);

    var _this = _possibleConstructorReturn(this, (SpawnEntityCommand.__proto__ || Object.getPrototypeOf(SpawnEntityCommand)).call(this));

    _this.entity = entity;
    return _this;
  }

  _createClass(SpawnEntityCommand, [{
    key: 'execute',
    value: function execute() {
      this.entity.spawn();
    }
  }]);

  return SpawnEntityCommand;
}(_command2.default);

exports.default = SpawnEntityCommand;

},{"./command":17}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputController = function () {
  function InputController(queue) {
    _classCallCheck(this, InputController);

    this.queue = queue;
  }

  _createClass(InputController, [{
    key: "handle",
    value: function handle() {}
  }, {
    key: "queueCommand",
    value: function queueCommand(command) {
      this.queue.push(command);
    }
  }]);

  return InputController;
}();

exports.default = InputController;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spawnEntityCommand = require('../commands/spawn-entity-command');

var _spawnEntityCommand2 = _interopRequireDefault(_spawnEntityCommand);

var _inputController = require('./input-controller');

var _inputController2 = _interopRequireDefault(_inputController);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapInputController = function (_InputController) {
  _inherits(MapInputController, _InputController);

  function MapInputController() {
    _classCallCheck(this, MapInputController);

    var _this = _possibleConstructorReturn(this, (MapInputController.__proto__ || Object.getPrototypeOf(MapInputController)).call(this, _app2.default.commandQueue));

    _this.cursor = _app2.default.cursor;
    _this.oldMouseX = 0;
    _this.oldMouseY = 0;
    return _this;
  }

  _createClass(MapInputController, [{
    key: 'handle',
    value: function handle() {
      this.mouseX = _app2.default.input.activePointer.worldX;
      this.mouseY = _app2.default.input.activePointer.worldY;
      this.tileX = _app2.default.tileX(this.mouseX);
      this.tileY = _app2.default.tileY(this.mouseY);

      if (this.leftMouseButtonDown) {
        var pine = _app2.default.create.pineTree(this.tileX, this.tileY);

        if (pine.canSpawnAt(this.tileX, this.tileY)) {
          var command = new _spawnEntityCommand2.default(pine);
          this.queueCommand(command);
        }
      }

      if (this.rightMouseButtonDown) {
        console.log('rmb');
      }

      this.oldMouseX = this.mouseX;
      this.oldMouseY = this.mouseY;
    }
  }, {
    key: 'mousePositionChanged',
    get: function get() {
      return this.oldMouseX != this.mouseX || this.oldMouseY != this.mouseY;
    }
  }, {
    key: 'leftMouseButtonDown',
    get: function get() {
      return _app2.default.input.mousePointer.leftButton.isDown;
    }
  }, {
    key: 'rightMouseButtonDown',
    get: function get() {
      return _app2.default.input.mousePointer.rightButton.isDown;
    }
  }]);

  return MapInputController;
}(_inputController2.default);

exports.default = MapInputController;

},{"../../app":2,"../commands/spawn-entity-command":18,"./input-controller":19}],21:[function(require,module,exports){
'use strict';

var _tile = require('./tile');

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Phaser.Tile = _tile2.default;

},{"./tile":22}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_Phaser$Tile) {
  _inherits(Tile, _Phaser$Tile);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "binarySum",

    /**
     * Get binary sum of all neighbors.
     */
    value: function binarySum(test) {
      var sum = 0;
      var multiplier = 256;

      for (var i = -1; i <= 1; i++) {
        var y = this.y - i;
        var row = this.layer.data[y];

        for (var j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          var x = this.x - j;
          var tile = row && x in row ? row[x] : null;

          if (test(tile)) sum += multiplier;

          multiplier /= 2;
        }
      }

      return sum;
    }

    /**
     * Get binary sum of neighbors only taking into account
     * the top, left, right, and bottom tiles.
     */

  }, {
    key: "binarySumSimple",
    value: function binarySumSimple(test) {
      var _this2 = this;

      var sum = 0;

      var getNeighbor = function getNeighbor(x, y) {
        if (y in _this2.layer.data) {
          if (x in _this2.layer.data[y]) return _this2.layer.data[x][y];
        }
        return null;
      };

      var top = getNeighbor(this.y - 1, this.x);
      var left = getNeighbor(this.y, this.x - 1);
      var right = getNeighbor(this.y, this.x + 1);
      var bottom = getNeighbor(this.y + 1, this.x);

      if (test(top)) sum += 4;
      if (test(left)) sum += 16;
      if (test(right)) sum += 32;
      if (test(bottom)) sum += 128;

      return sum;
    }

    /**
     * Boolean check if this tile exists on the layer boundary
     */

  }, {
    key: "atBoundary",
    value: function atBoundary() {
      return this.x === 0 || this.y === 0 || this.x === this.layer.width - 1 || this.y === this.layer.height - 1;
    }
  }]);

  return Tile;
}(Phaser.Tile);

exports.default = Tile;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function Map(level) {
  _classCallCheck(this, Map);

  this.tilemap = _app2.default.game.add.tilemap(level);
  this.tilemap.addTilesetImage('terrain', 'terrain');

  this.background = this.tilemap.createLayer('background');

  this.static = _app2.default.game.add.group();
};

exports.default = Map;

},{"../app":2}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _entities = require('../entities');

var _entities2 = _interopRequireDefault(_entities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'create',
    value: function create() {
      _app2.default.init(this.game);

      var tree1 = _app2.default.create.pineTree(8, 4).spawn();

      var tree2 = _app2.default.create.pineTree(6, 5).spawn();
    }
  }, {
    key: 'update',
    value: function update() {
      _app2.default.update();
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;
;

},{"../app":2,"../entities":12}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Phaser$State) {
  _inherits(Loading, _Phaser$State);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'preload',
    value: function preload() {
      this.game.stage.smoothed = false;
      this.loadingBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loading-bar');
      this.loadingBar.anchor.setTo(0.5);
      this.load.setPreloadSprite(this.loadingBar);

      this.load.image('ground', 'img/ground.png');
      this.load.image('terrain', 'img/terrain-16.png');
      this.load.image('wall', 'img/walls.png');
      this.load.image('tower', 'img/tower.png');
      this.load.image('flag', 'img/flag.png');
      this.load.image('shrub', 'img/shrub.png');
      this.load.image('pine-tree', 'img/pine-tree.png');

      this.load.tilemap('island', 'maps/island.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('crazytown', 'maps/crazytown.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('tiny', 'maps/tiny.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('paradise', 'maps/paradise.json', null, Phaser.Tilemap.TILED_JSON);

      this.load.spritesheet('cursor', 'img/cursor.png', 16, 16);
      this.load.atlas('walls', 'img/walls.png', 'atlas/walls.json');
      this.load.atlas('interior', 'img/interior-orange.png', 'atlas/interior.json');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.stage.smoothed = false;
      this.stage.backgroundColor = '#306082';
      this.state.start('Game');
    }
  }]);

  return Loading;
}(Phaser.State);

exports.default = Loading;
;

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload() {
      this.game.load.image('loading-bar', 'img/loading-bar.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.stage.backgroundColor = '#306082';
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      this.game.scale.setUserScale(2, 2);

      this.game.renderer.renderSession.roundPixels = true;
      Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

      this.state.start('Loading');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;
;

},{}]},{},[3]);
