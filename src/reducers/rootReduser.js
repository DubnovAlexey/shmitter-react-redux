import {userReducer} from './userReducer.js';
import {statsReduser} from './statsReduser.js';

export const rootReduser = (state, action) => {
  return{
    user: userReducer(state.user, action),
    stats: statsReduser(state.stats, action),
  }
}