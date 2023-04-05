import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EmployeePage() {
  const [dataShow, setDataShow] = useState({});
  const navigate = useNavigate();
  console.log(dataShow);
  const { id } = useParams(); // Use destructuring to get the id parameter from the URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3031/users/${id}`);
        const data = response.data;
        setDataShow(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3031/users/${id}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {dataShow && (
        <div className="px-20 py-20">
          <div className="bg-white  drop-shadow-md w-full">
            <div className="flex col justify-end">
              <div className="">
                <button
                  className=" bg-blue-200 border rounded-md h-10 w-60"
                  onClick={() =>
                    navigate(`/edit/${id}`, {
                      state: {
                        dataShow,
                        id,
                      },
                    })
                  }
                >
                  Edit Employee Profile
                </button>
              </div>
              <div className="">
                <button
                  className=" bg-red-600 border rounded-md h-10 w-60"
                  onClick={() => handleDelete(id)}
                >
                  Delete Employee Profile
                </button>
              </div>
            </div>
            <div>
              <table className="table-auto border-separate border-spacing-2 border border-slate-400">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Geo</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Catch Phrase</th>
                    <th>BS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{dataShow.id}</td>
                    <td>{dataShow.name}</td>
                    <td>{dataShow.username}</td>
                    <td>{dataShow.email}</td>
                    <td>{dataShow.address?.street}</td>
                    <td>{dataShow.address?.suite}</td>
                    <td>{dataShow.address?.city}</td>
                    <td>{dataShow.address?.zipcode}</td>
                    <td>{`${dataShow.address?.geo?.lat}, ${dataShow.address?.geo?.lng}`}</td>
                    <td>{dataShow.phone}</td>
                    <td>{dataShow?.website}</td>
                    <td>{dataShow.company?.name}</td>
                    <td>{dataShow.company?.catchPhrase}</td>
                    <td>{dataShow.company?.bs}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
