import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SAGA_POSTS } from "../store/saga/sagaType";
import { useEffect } from "react";
const Posts = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.user)
  // console.log('posts',data.posts)
  useEffect(() => {
    dispatch({type:SAGA_POSTS})
   
  }, [])
    return (
      <div>
 {data.posts.map((e,i)=>{
return(
<table key={i} className="table table-sm table-dark">
<thead>
<tr >
  <td>{e.body}</td>
  <td>{e.title}</td>


</tr>

</thead>

</table>


)

 })}
      </div>
    );
  };
  export default Posts;