import './phaser/bootstrap';
import Preload from './states/preload';
import Loading from './states/loading';
import Game from './states/game';
import './components';
import './entities';

class Boot extends Phaser.Game {
  constructor() {
    super(16 * 16, 16 * 16, Phaser.AUTO, 'game-container', null, false, false);

    this.state.add('Preload', Preload);
    this.state.add('Loading', Loading);
    this.state.add('Game', Game);

    this.state.start('Preload');
  }
};

new Boot;
