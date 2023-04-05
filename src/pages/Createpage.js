import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Createpage() {
  const [input, setInput] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const navigate = useNavigate();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    const fieldNames = name.split('.'); // split the field name to access nested fields
    let newInput = { ...input };
    let field = newInput;

    // loop through the field names and update the nested fields
    for (let i = 0; i < fieldNames.length - 1; i++) {
      field = field[fieldNames[i]];
    }

    field[fieldNames[fieldNames.length - 1]] = value;
    setInput(newInput);
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3031/users/`, {
        name: input.name,
        username: input.username,
        email: input.email,
        address: {
          street: input.address.street,
          suite: input.address.suite,
          city: input.address.city,
          zipcode: input.address.zipcode,
          geo: { lat: input.address.geo.lat, lng: input.address.geo.lng },
          phone: input.phone,
          website: input.website,
          company: {
            name: input.company.name,
            catchPhrase: input.company.catchPhrase,
            bs: input.company.bs,
          },
        },
      });
      console.log(response.data);
      // redirect or show success message to user
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="py-4 px-8">
        <div className="flex justify-end">
          <Link to="/">
            <button className=" border-none rounded  bg-zinc-400 w-40">
              Back to homepage
            </button>
          </Link>
        </div>

        <div className="w-full h-full py-20 px-80">
          <div className="  bg-blue-200  border rounded-lg w-full h-full flex  justify-center">
            <div className="w-full px-10 py-4 space-y-4">
              <div className="flex justify-center"> Create Employees</div>
              <form onSubmit={onSubmit}>
                <div className="">
                  <div className="flex col space-x-6">
                    <div className="mb-6">
                      <label
                        for="name"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        value={input.name}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border w-60 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="username"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        username
                      </label>
                      <input
                        name="username"
                        value={input.username}
                        onChange={handleChangeInput}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        value={input.email}
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p>Address</p>
                    <div className="flex col space-x-2">
                      <div className="mb-6">
                        <label
                          htmlFor="street"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          street
                        </label>
                        <input
                          name="address.street"
                          value={input.address?.street}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="suite"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          suite
                        </label>
                        <input
                          name="address.suite"
                          value={input.address?.suite}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="city"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          city
                        </label>
                        <input
                          name="address.city"
                          value={input.address?.city}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="zipcode"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          zipcode
                        </label>
                        <input
                          name="address.zipcode"
                          value={input.address?.zipcode}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <p>Geo</p>
                    <div className="flex col space-x-2">
                      <div className="mb-6">
                        <label
                          for="geo"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          lat
                        </label>
                        <input
                          name="address.geo.lat"
                          value={input.address?.geo?.lat}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          for="geo"
                          className="block  text-sm font-medium text-gray-900 dark:text-white"
                        >
                          lng
                        </label>
                        <input
                          name="address.geo.lng"
                          value={input.address?.geo?.lng}
                          onChange={handleChangeInput}
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex col space-x-2">
                    <div className="mb-6">
                      <label
                        for="phone"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        phone
                      </label>
                      <input
                        name="phone"
                        value={input.phone}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        for="website"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        website
                      </label>
                      <input
                        name="website"
                        value={input.website}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex col space-x-2">
                    <div className="mb-6">
                      <label
                        for="company_name"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        name
                      </label>
                      <input
                        name="company.name"
                        value={input.company?.name}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        for="company.catchPhrase"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        catchPhrase
                      </label>
                      <input
                        name="company.catchPhrase"
                        value={input.company?.catchPhrase}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        for="bs"
                        className="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        bs
                      </label>
                      <input
                        name="company.bs"
                        value={input.company?.bs}
                        onChange={handleChangeInput}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="py-8 space-x-2 flex justify-center">
                    <button
                      type="button"
                      className=" border-none rounded  bg-zinc-400 w-40"
                      onClick={() => navigate('/')}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" border-none rounded  bg-emerald-500  w-40"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
