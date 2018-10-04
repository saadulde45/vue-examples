import Home from './components/Home';

import User from './components/user/User';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import UserStart from './components/user/UserStart';

export const routes = [{
  path: '',
  component: Home
},{
  path: '/user',
  // path: '/user/:id',
  component: User
},{
  path: '/user-detail',
  component: UserDetail
},{
  path: '/user-edit',
  component: UserEdit
},{
  path: '/user-start',
  component: UserStart
}];