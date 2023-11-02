import {Auth} from './Auth';
import {Register} from './Register';
import {ResetPassword} from './ResetPassword';
import {InputToken} from './InputToken';
import {InputPassword} from './InputPassword';
import {ResetPassordSuccess} from './ResetPassordSuccess';
// import views here

const views: {[key: string]: any} = {
  Auth,
  Register,
  ResetPassword,
  InputToken,
  InputPassword,
  ResetPassordSuccess,
  // add viewsName here
};

export const routes = Object.keys(views).map(route => ({
  options: {headerShown: false},
  name: route,
  key: route,
  component: views[route],
}));
