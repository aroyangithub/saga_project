import { SAGA_TODOS } from "../store/saga/sagaType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Todos = () => {
    const dispatch = useDispatch();
    const data = useSelector((st) => st.user);
    // console.log(data.todos);
    useEffect(() => {
      dispatch({ type: SAGA_TODOS });
    }, []);
  
  
    return (
      <div>
{data.todos.map((e,i)=>{

return(
<table key={i} className="table table-sm table-dark">
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
  export default Todos;