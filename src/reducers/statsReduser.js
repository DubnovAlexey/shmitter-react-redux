import {CHANGE_STATS} from '../actions/statsAction.js';

export const statsReduser = (state, action) => {
  switch (action.type){
    case CHANGE_STATS:{
      const res = state[action.payload.statsType]+action.payload.sum;
      return {...state, [action.payload.statsType]:res >= 0? res: 0};
    }
  }
}