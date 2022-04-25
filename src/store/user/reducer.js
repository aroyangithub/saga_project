import { state } from "./state";
import {
  TYPE_ALBUMS,
  TYPE_COMMENTS,
  TYPE_PHOTOS,
  TYPE_USERS,
  TYPE_POSTS,
  TYPE_TODOS,
} from "./type";
const reducer = (data = state, action) => {
  const temp = { ...data };
  switch (action.type) {
    case TYPE_USERS:
      temp.users = action.value;
      break;
    case TYPE_PHOTOS:
      temp.photos = action.value;
      break;
    case TYPE_COMMENTS:
      temp.comments = action.value;
      break;
    case TYPE_ALBUMS:
      temp.albums = action.value;
      break;
    case TYPE_TODOS:
      temp.todos = action.value;
      break;
    case TYPE_POSTS:
      temp.posts = action.value;
      break;

    default:
      break;
  }
  return temp;
};
export default reducer;
