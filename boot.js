(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./phaser/bootstrap');

var _preload = require('./states/preload');

var _preload2 = _interopRequireDefault(_preload);

var _loading = require('./states/loading');

var _loading2 = _interopRequireDefault(_loading);

var _game = require('./states/game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$Game) {
  _inherits(Boot, _Phaser$Game);

  function Boot() {
    _classCallCheck(this, Boot);

    var _this = _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this, 640, 640, Phaser.AUTO, 'game-container', null, false, false));

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

},{"./phaser/bootstrap":6,"./states/game":12,"./states/loading":13,"./states/preload":14}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

var MoveCursorCommand = function (_Command) {
  _inherits(MoveCursorCommand, _Command);

  function MoveCursorCommand(cursor, mouseX, mouseY) {
    _classCallCheck(this, MoveCursorCommand);

    var _this = _possibleConstructorReturn(this, (MoveCursorCommand.__proto__ || Object.getPrototypeOf(MoveCursorCommand)).call(this));

    _this.cursor = cursor;
    _this.mouseX = mouseX;
    _this.mouseY = mouseY;
    return _this;
  }

  _createClass(MoveCursorCommand, [{
    key: 'execute',
    value: function execute() {
      this.cursor.move(this.mouseX, this.mouseY);
    }
  }]);

  return MoveCursorCommand;
}(_command2.default);

exports.default = MoveCursorCommand;

},{"./command":2}],4:[function(require,module,exports){
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

var PlaceFloorCommand = function (_Command) {
  _inherits(PlaceFloorCommand, _Command);

  function PlaceFloorCommand(map, mouseX, mouseY) {
    _classCallCheck(this, PlaceFloorCommand);

    var _this = _possibleConstructorReturn(this, (PlaceFloorCommand.__proto__ || Object.getPrototypeOf(PlaceFloorCommand)).call(this));

    _this.map = map;
    _this.mouseX = mouseX;
    _this.mouseY = mouseY;
    return _this;
  }

  _createClass(PlaceFloorCommand, [{
    key: 'execute',
    value: function execute() {
      var x = this.map.getTileX(this.mouseX);
      var y = this.map.getTileX(this.mouseY);

      this.map.placeFloor(x, y);
    }
  }]);

  return PlaceFloorCommand;
}(_command2.default);

exports.default = PlaceFloorCommand;

},{"./command":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moveCursorCommand = require('./commands/move-cursor-command');

var _moveCursorCommand2 = _interopRequireDefault(_moveCursorCommand);

var _placeFloorCommand = require('./commands/place-floor-command');

var _placeFloorCommand2 = _interopRequireDefault(_placeFloorCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function () {
  function InputHandler(input, map, cursor) {
    _classCallCheck(this, InputHandler);

    this.input = input;
    this.map = map;
    this.cursor = cursor;
    this.oldMouseX = 0;
    this.oldMouseY = 0;
  }

  _createClass(InputHandler, [{
    key: 'handle',
    value: function handle() {
      this.mouseX = this.input.activePointer.worldX;
      this.mouseY = this.input.activePointer.worldY;

      if (this.leftMouseButtonDown) {
        var command = new _placeFloorCommand2.default(this.map, this.mouseX, this.mouseY);

        command.execute();
      }

      if (this.rightMouseButtonDown) {
        console.log('rmb');
      }

      if (this.mousePositionChanged) {
        var _command = new _moveCursorCommand2.default(this.cursor, this.mouseX, this.mouseY);

        _command.execute();
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
      return this.input.mousePointer.leftButton.isDown;
    }
  }, {
    key: 'rightMouseButtonDown',
    get: function get() {
      return this.input.mousePointer.rightButton.isDown;
    }
  }]);

  return InputHandler;
}();

exports.default = InputHandler;

},{"./commands/move-cursor-command":3,"./commands/place-floor-command":4}],6:[function(require,module,exports){
'use strict';

var _tile = require('./tile');

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Phaser.Tile = _tile2.default;

},{"./tile":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cursor = function () {
  function Cursor(game) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Cursor);

    this.game = game;
    this.sprite = this.game.add.sprite(0, 0, 'cursor');

    this.x = x;
    this.y = y;

    this.sprite.animations.add('spin');
    this.sprite.animations.play('spin', 15, true);

    this.sprite.tint = 0xb8f2f4;
  }

  _createClass(Cursor, [{
    key: 'move',
    value: function move(mouseX, mouseY) {
      this.x = this.game.math.snapToFloor(mouseX, 16);
      this.y = this.game.math.snapToFloor(mouseY, 16);
    }
  }, {
    key: 'x',
    get: function get() {
      return this.sprite.x;
    },
    set: function set(v) {
      this.sprite.x = v;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.sprite.y;
    },
    set: function set(v) {
      this.sprite.y = v;
    }
  }]);

  return Cursor;
}();

exports.default = Cursor;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strata = require('./strata');

var _strata2 = _interopRequireDefault(_strata);

var _wall = require('./wall');

var _wall2 = _interopRequireDefault(_wall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map(game, level) {
    _classCallCheck(this, Map);

    this.game = game;
    this.tilemap = this.game.add.tilemap(level);
    this.tilemap.addTilesetImage('ground', 'ground');

    this.layers = {
      background: this.tilemap.createLayer('background'),
      floor: this.tilemap.createLayer('floor')
    };

    this.buildings = this.game.add.group();

    this.strata = [];
    for (var i = 0; i < this.height; i++) {
      this.strata.push([]);
      for (var j = 0; j < this.width; j++) {
        var s = new _strata2.default(this, j, i);
        this.strata[i].push(s);
      }
    }
  }

  // TODO: Extract and refactor


  _createClass(Map, [{
    key: 'placeFloor',
    value: function placeFloor(tileX, tileY) {
      var _this = this;

      var strata = this.getStrata(tileX, tileY);
      if (strata.floorTile) return;

      var sum = strata.binarySum(function (s) {
        if (s && s.backgroundTile) {
          if (s.backgroundTile.properties.buildable) {
            return false;
          }
        }
        return true;
      });

      if (sum === 0) {
        this.tilemap.putTile(12, tileX, tileY, this.layers.floor);

        if (strata.wall) {
          strata.wall.destroy();
          strata.wall = null;
        }

        strata.neighbors.forEach(function (s) {
          if (s.floorTile) return;
          if (s.wall) {
            s.wall.refreshSegment();
          } else {
            var wall = new _wall2.default(_this.game, s);
            _this.buildings.add(wall);
          }
        });
        this.buildings.sort('y');
      }
    }
  }, {
    key: 'getTileX',
    value: function getTileX(mouseX) {
      var layer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'background';

      return this.layers[layer].getTileX(mouseX);
    }
  }, {
    key: 'getTileY',
    value: function getTileY(mouseY) {
      var layer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'background';

      return this.layers[layer].getTileY(mouseY);
    }
  }, {
    key: 'getWorldX',
    value: function getWorldX(tileX) {
      return tileX * 16;
    }
  }, {
    key: 'getWorldY',
    value: function getWorldY(tileY) {
      return tileY * 16;
    }
  }, {
    key: 'getTile',
    value: function getTile(x, y) {
      var layer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'background';

      return this.tilemap.getTile(x, y, layer);
    }
  }, {
    key: 'isOutOfBounds',
    value: function isOutOfBounds(x, y) {
      return x < 0 || y < 0 || x >= this.width || y >= this.height;
    }
  }, {
    key: 'getStrata',
    value: function getStrata(x, y) {
      return this.isOutOfBounds(x, y) ? null : this.strata[y][x];
    }
  }, {
    key: 'width',
    get: function get() {
      return this.layers.background.width / 16;
    }
  }, {
    key: 'height',
    get: function get() {
      return this.layers.background.height / 16;
    }
  }]);

  return Map;
}();

exports.default = Map;

},{"./strata":10,"./wall":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Strata = function () {
  function Strata(map, x, y) {
    _classCallCheck(this, Strata);

    this.map = map;
    this.x = x;
    this.y = y;
    this.worldX = this.map.getWorldX(this.x);
    this.worldY = this.map.getWorldY(this.y);
  }

  _createClass(Strata, [{
    key: 'binarySum',
    value: function binarySum(test) {
      var sum = 0;
      var multiplier = 256;

      for (var i = -1; i <= 1; i++) {
        var y = this.y - i;

        for (var j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          var x = this.x - j;
          var strata = this.map.getStrata(x, y);

          if (test(strata)) sum += multiplier;

          multiplier /= 2;
        }
      }

      return sum;
    }
  }, {
    key: 'backgroundTile',
    get: function get() {
      return this.map.getTile(this.x, this.y, 'background');
    }
  }, {
    key: 'floorTile',
    get: function get() {
      return this.map.getTile(this.x, this.y, 'floor');
    }
  }, {
    key: 'neighbors',
    get: function get() {
      var nb = [];

      for (var i = -1; i <= 1; i++) {
        var y = this.y - i;
        for (var j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          var x = this.x - j;
          var strata = this.map.getStrata(x, y);
          if (strata) nb.push(strata);
        }
      }

      return nb;
    }
  }]);

  return Strata;
}();

exports.default = Strata;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wall = function (_Phaser$Sprite) {
  _inherits(Wall, _Phaser$Sprite);

  function Wall(game, strata) {
    _classCallCheck(this, Wall);

    var _this = _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this, game, strata.worldX, strata.worldY - 16, 'walls', 'segment-n'));

    _this.strata = strata;
    _this.strata.wall = _this;
    _this.refreshSegment();
    return _this;
  }

  _createClass(Wall, [{
    key: 'refreshSegment',
    value: function refreshSegment() {
      var sum = this.strata.binarySum(function (s) {
        return !!s && !!s.floorTile;
      });
      this.frameName = this.mapSumToSegment(sum);
    }
  }, {
    key: 'mapSumToSegment',
    value: function mapSumToSegment(sum) {
      switch (sum) {
        case 128:
        case 192:
        case 320:
        case 384:
        case 448:
          return 'segment-e-t';
        case 4:
        case 6:
        case 10:
        case 12:
        case 14:
          return 'segment-e-b';
        case 16:
        case 18:
        case 66:
        case 80:
        case 82:
          return 'segment-e-r';
        case 32:
        case 40:
        case 288:
        case 264:
        case 296:
          return 'segment-e-l';

        case 256:
          return 'segment-e-tl';
        case 64:
          return 'segment-e-tr';
        case 8:
          return 'segment-e-bl';
        case 2:
          return 'segment-e-br';

        case 20:
        case 22:
        case 26:
        case 30:
        case 70:
        case 78:
        case 86:
        case 88:
        case 90:
        case 94:
          return 'segment-i-tl';
        case 36:
        case 38:
        case 42:
        case 44:
        case 46:
        case 260:
        case 268:
        case 270:
        case 292:
        case 294:
        case 298:
        case 300:
        case 302:
          return 'segment-i-tr';
        case 130:
        case 210:
        case 386:
        case 400:
        case 450:
        case 464:
        case 466:
          return 'segment-i-bl';
        case 96:
        case 104:
        case 160:
        case 168:
        case 328:
        case 352:
        case 360:
        case 416:
        case 456:
        case 480:
        case 488:
          return 'segment-i-br';
        default:
          return 'segment-n';
      };
    }
  }]);

  return Wall;
}(Phaser.Sprite);

exports.default = Wall;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = require('../prefabs/map');

var _map2 = _interopRequireDefault(_map);

var _cursor = require('../prefabs/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _inputHandler = require('../input/input-handler');

var _inputHandler2 = _interopRequireDefault(_inputHandler);

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
      this.map = new _map2.default(this.game, 'crazytown');
      this.cursor = new _cursor2.default(this.game);
      this.inputHandler = new _inputHandler2.default(this.game.input, this.map, this.cursor);
    }
  }, {
    key: 'update',
    value: function update() {
      this.inputHandler.handle();
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;
;

},{"../input/input-handler":5,"../prefabs/cursor":8,"../prefabs/map":9}],13:[function(require,module,exports){
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
      this.load.image('wall', 'img/walls.png');
      this.load.image('tower', 'img/tower.png');
      this.load.image('flag', 'img/flag.png');

      this.load.tilemap('island', 'maps/island.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.tilemap('crazytown', 'maps/crazytown.json', null, Phaser.Tilemap.TILED_JSON);

      this.load.spritesheet('cursor', 'img/cursor.png', 16, 16);
      this.load.atlas('walls', 'img/walls.png', 'atlas/walls.json');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.stage.smoothed = false;
      this.stage.backgroundColor = '#362d18';
      this.state.start('Game');
    }
  }]);

  return Loading;
}(Phaser.State);

exports.default = Loading;
;

},{}],14:[function(require,module,exports){
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
      this.game.stage.backgroundColor = '#362d18';
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      this.game.scale.setUserScale(1, 1);

      this.game.renderer.renderSession.roundPixels = true;
      Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

      this.state.start('Loading');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;
;

},{}]},{},[1]);
