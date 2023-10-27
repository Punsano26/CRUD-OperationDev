import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const StudentList = () => {
  const [stdData, setStdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:9999/student")
      .then(
        // convert เป็น jason
        (res) => {
          return res.json();
        }
      )
      // เรียกใช้ State
      .then((response) => {
        setStdData(response);
      })
      // เปลี่ยนเป็น messsage
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/student/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/student/detail/" + id);
  };
  const removeStudent = (id) => {
    alert("delete" + id);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Student List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <link to="/student/create" className="btn btn-success">
              Add New (+)
            </link>
          </div>
          <br />
          
          <table className="table-bordered"></table>
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Major</td>
                <td>Admission Year</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {stdData &&
                stdData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.major}</td>
                    <td>{item.admissionYear}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a className="btn btn-dager">Remove</a>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table-bordered>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
