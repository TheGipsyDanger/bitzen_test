import {Home} from './Home';
import {RegisterPet} from './RegisterPet';
// import views here

const views: {[key: string]: any} = {
  RegisterPet,
  Home,
  // add viewsName here
};

export const routes = Object.keys(views).map(route => ({
  options: {headerShown: false},
  name: route,
  key: route,
  component: views[route],
}));
