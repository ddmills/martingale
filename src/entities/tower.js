import { entity } from 'geotic';
import { app } from './../app';


export default (x, y) => {
  const worldX = app.constants.TILE_SIZE * x;
  const worldY = app.constants.TILE_SIZE * y;

  return entity()
    .add('sprite', worldX, worldY, 16, 32, 'tower');
};
