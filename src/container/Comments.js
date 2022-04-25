import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SAGA_COMMENTS } from "../store/saga/sagaType";
import '../app.css'
const Comments = () => {
  const dispatch = useDispatch()
  const data = useSelector((st) => st.user)
  // console.log(data.comments)
  useEffect(() => {
    dispatch({ type: SAGA_COMMENTS })
  }, [])


  return (
    <div>
      {data.comments.map((e, i) => {

        return (

          <table className="table table-sm table-dark"  key={i}>
          <thead>
            <tr>
           <td>{e.name}</td>
           <td>{e.body}</td>
           <td>{e.email}</td>

            </tr>
          </thead>

          </table>
        )
      })}
    </div>
  );
};
export default Comments;