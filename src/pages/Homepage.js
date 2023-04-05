import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Homepage() {
  const [dataShow, setDataShow] = useState([]);
  console.log(dataShow);
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3031/users/?id_like=${searchValue}`,
        );
        const data = response.data;
        setDataShow(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(() => {
      searchValue !== '' && handleSearch();
    }, 500);

    handleSearch();
  }, [searchValue]);

  const handleInputChange = event => {
    setSearchValue(event.target.value);
    setShowSearch(true);
  };

  return (
    <>
      <div className="px-60 py-20">
        <div className="w-full h-full">
          <div className="bg-white  drop-shadow-md px-4 ">
            <div className="py-4">
              <div className="flex justify-end"></div>
              <div className="space-y-4">
                <div className="flex col space-x-6">
                  <div className="py-1 px-2 w-48">Emplyees List</div>
                  <div className="w-full">
                    <div className="flex col space-x-8">
                      <div>
                        <input
                          className=" box-content h-14  w-96 sm:h-10 bg-white border rounded"
                          type="text"
                          placeholder="Search..."
                          value={searchValue}
                          onChange={handleInputChange}
                        />
                        {searchValue !== '' &&
                          dataShow.length !== 0 &&
                          showSearch && (
                            <div>
                              {dataShow.map(el => (
                                <Link to={`/employee/${el.id}`}>
                                  <div className="bg-gray-200">{el.id}</div>
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                      <div>
                        <div className="">
                          <Link to="/create">
                            <button className=" bg-blue-200 border rounded-md h-10 w-60">
                              Create Employee Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
