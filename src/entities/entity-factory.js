import entities from './index';

export default class EntityFactory {
  tower(x, y) {
    return entities.tower(x, y);
  }
  shrub(x, y) {
    return entities.shrub(x, y);
  }
}
