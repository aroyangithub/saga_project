import { TYPE_USERS,TYPE_PHOTOS, TYPE_ALBUMS, TYPE_POSTS, TYPE_TODOS, TYPE_COMMENTS } from "./type";


export const allUser = (other) => {
  return { type: TYPE_USERS, value: other };
};
export const allPhotos=(other)=>{

  return {type:TYPE_PHOTOS,value:other}
}
export const allAlbums=(other)=>{

  return {type:TYPE_ALBUMS,value:other}
}
export const allPosts=(other)=>{

  return {type:TYPE_POSTS,value:other}
}
export const allTodos=(other)=>{

  return {type:TYPE_TODOS,value:other}
}
export const allComments=(other)=>{

  return {type:TYPE_COMMENTS,value:other}
}



/** axios method */
// export const getData = () => {
//   return function (dispach) {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         console.log(res);
//         dispach(addUSer(res.data ))
//       })
//       .catch((e) => console.log(e));
//   };
// };
