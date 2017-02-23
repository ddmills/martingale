import entities from './index';

export default class EntityFactory {
  tower(x, y) {
    return entities.tower(x, y);
  }
  shrub(x, y) {
    return entities.shrub(x, y);
  }
  pineTree(x, y) {
    return entities.pineTree(x, y);
  }
  fox(x, y) {
    return entities.fox(x, y);
  }
}
