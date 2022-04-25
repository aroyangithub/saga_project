import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SAGA_PHOTOS } from "../store/saga/sagaType";
import "../app.css";

const Photos = () => {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.user);
  // console.log(data);
  useEffect(() => {
    dispatch({ type: SAGA_PHOTOS });
  }, []);

  return (
    <div>
      <table className="table table-sm table-dark">
        <thead>
          {data.photos.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.title}</td>
                <td>
                  <img src={e.url} width={"100px"}></img>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
};
export default Photos;
