import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SAGA_ALBUMS } from "../store/saga/sagaType";
import '../app.css'
const Albums = () => {
const dispatch=useDispatch()
const data=useSelector((st)=>st.user)
// console.log(data.albums)
useEffect(() => {
 dispatch({type:SAGA_ALBUMS})
}, [])
  
  
    return (
      <div>
{data.albums.map((e,i)=>{
  return(
<table className="table table-sm table-dark" key={i}>
  <thead>
<tr>
  <td>{e.title}</td>
</tr>

  </thead>


</table>

  )
})}
      </div>
    );
  };
  export default Albums;