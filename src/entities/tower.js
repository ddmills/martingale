import { entity } from 'geotic';
import { app } from './../app';


export default () => {
  return entity()
    .add('sprite', 16, 32, 16, 32, 'tower');
};
