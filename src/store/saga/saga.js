import { SAGA_PHOTOS, SAGA_POSTS, SAGA_USERS,SAGA_TODOS,SAGA_ALBUMS,SAGA_COMMENTS } from "./sagaType";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { LINK_PHOTOS, LINK_POSTS, LINK_USERS,LINK_TODOS,LINK_ALBUMS,LINK_COMMENTS } from "./link";
import { allPhotos, allPosts,allTodos,allUser,allAlbums,allComments } from "../user/action";

function* mySaga(){

yield takeEvery(SAGA_POSTS,getPosts)
yield takeEvery(SAGA_PHOTOS,getPhotos)
yield takeEvery(SAGA_TODOS,getTodos)
yield takeEvery(SAGA_USERS,getUsers)
yield takeEvery(SAGA_ALBUMS,getAlbums)
yield takeEvery(SAGA_COMMENTS,getComments)


}

export default mySaga


function* axiosLink({links,fun}){
const res=yield axios({

  method:'get',
  url:links


})

yield put(fun(res.data))


}


function* getPosts(){

yield call(axiosLink,{links:LINK_POSTS,fun:allPosts})

}
function* getPhotos(){

  yield call(axiosLink,{links:LINK_PHOTOS,fun:allPhotos})
  
  }
  function* getTodos(){

    yield call(axiosLink,{links:LINK_TODOS,fun:allTodos})
    
    }
    function* getUsers(){

      yield call(axiosLink,{links:LINK_USERS,fun:allUser})
      
      }
  
      function* getAlbums(){

        yield call(axiosLink,{links:LINK_ALBUMS,fun:allAlbums})
        
        }      
        function* getComments(){

          yield call(axiosLink,{links:LINK_COMMENTS,fun:allComments})
          
          }      
  
