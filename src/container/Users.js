
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SAGA_USERS } from "../store/saga/sagaType";
import { useEffect } from "react";
import '../app.css'

const Users = () => {

  const dispatch=useDispatch()
  const data=useSelector((st)=>st.user)
  // console.log(data.users)
  useEffect(() => {
 dispatch({type:SAGA_USERS})
  }, [])
    return (
      <div>
 {data.users.map((e,i)=>{

return(
<table className="table table-sm table-dark" key={i}>
<thead>
<tr>
<td>{e.name}</td>
<td>{e.username}</td>
<td>{e.email}</td>
<td>{e.website}</td>
</tr>


</thead>

</table>
  
)


 })}
    </div>
    );
  };
  export default Users;