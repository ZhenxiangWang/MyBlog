import { fromJS } from "immutable";
import * as constants from "./constants.js";
//把js对象转化为immutable对象
const defaulState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = defaulState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state;
  }
};