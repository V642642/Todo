import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const [inputlist, setinputlist] = useState("");
  const [data, setdata] = useState(localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : []);

  const item = (e) => {
    setinputlist(e.target.value);
  };

  const add = () => {
    const getdata = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];
    let bucket = [...getdata, inputlist]
    localStorage.setItem('Data', JSON.stringify(bucket));
    setdata(JSON.parse(localStorage.getItem('Data')))
    setinputlist("");
  };

  const del = (id) => {
    const getdata = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];
    const update = getdata.filter((ind, index) => {
      return index !== id;
    });
    let bucket = [...update]
    localStorage.setItem('Data', JSON.stringify(bucket));
    setdata(JSON.parse(localStorage.getItem('Data')))
  };

  return (
    <div className="Todo   flex justify-center  bg-gray-400 h-[100vh] lg:p-0  p-4">
      <div className="bg-white lg:w-[30%] w-full h-[70vh]   pt-5 mt-10 rounded-lg  ">
        <div className="text-white text-4xl bg-purple-700 text-center  p-2 ">
          {" "}
          Todo List
        </div>

        <div className="search_bar  flex justify-center mt-20  ">
          <div className="space-x-7 flex items-center ">
            <input
              type="text"
              placeholder="Add a items"
              className="p-3 outline-none border border-b-8 w-full"
              value={inputlist}
              onChange={item}
            />
            <button
              className="bg-orange-500 w-16 h-10  rounded-full text-3xl text-center"
              onClick={add}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* maping list///////////// */}
        <div className="flex justify-center items-center  mt-8  flex-col  space-y-7">
          {data?.map((items, index) => {
            return (
              <div
                className="showdata flex  items-center space-x-20  w-[60%] justify-between"
                key={index}
              >
                <span className="text-2xl tet-bold text-blue-500">{items}</span>
                <button
                  className="bg-yellow-500 w-12 h-10  rounded-full text-3xl text-center  "
                  onClick={() => del(index)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
