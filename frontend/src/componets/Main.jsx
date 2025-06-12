import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import axios from 'axios';
import Data from './Data';
import eye from "../images/eye.png";
import hide from "../images/hide.png";

function Main() {
  const [showPassword, setShowPassword] = useState(false);
  const [Form, setform] = useState({});
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(0);
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:3000/api/mongo_data")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [reload]);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

   const handleChange = (e) => {
    setform({ ...Form, [e.target.name]: e.target.value });
  };

  const handleEdit = (entry) => {
    setform({
      appname: entry.appname,
      username: entry.username,
      email: entry.email,
      password: entry.password,
    });
    setEditId(entry._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
      toast(res.data.message, { position: "top-center", theme: "dark", transition: Bounce });
      setReload(r => r + 1);
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { appname, username, email, password } = Form;
  if (!appname || !username || !email || !password) {
    toast("All fields must be filled!", {
      position: "top-center",
      theme: "dark",
      transition: Bounce,
    });
    return; // stop the form from submitting
  }
    try {
      let response
      if (editId) {
        response = await axios.put(`http://localhost:3000/api/update/${editId}`, Form);
      } else {
        response = await axios.post("http://localhost:3000/api/form_data", Form);
      }

      if (response.data.message) {
        toast(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }

      setform({});
      setEditId(null);
      setReload(r => r + 1);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <form className="flex flex-col relative text-white gap-2 rounded-2xl w-[90vw] md:w-[70vw] max-h-[60vh] m-auto bg-gray-950 overflow-auto p-6" onSubmit={handleSubmit}>
        <span className='text-md text-center m-auto font-bold md:text-lg lg:text-xl'>
          <span className="text-green-600">You</span>
          <span className="text-white">r ow</span>
          <span className="text-green-600">n Pas</span>
          <span className="text-white">swo</span>
          <span className="text-green-600">rd M</span>
          <span className="text-white">ana</span>
          <span className="text-green-600">ger</span>
        </span>

        <div className="flex items-center gap-4 w-full">
          <label className="font-extrabold text-sm w-24 sm:text-lg sm:w-28 md:text-xl md:w-32">App</label>
          <input className="border-white border-2 text-center rounded-2xl h-12 flex-1"
            onChange={handleChange}
            type='text'
            placeholder="Enter App Name"
            name="appname"
            value={Form["appname"] || ""}
          />
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="font-extrabold text-sm w-24 sm:text-lg sm:w-28 md:text-xl md:w-32">User Name</label>
          <input className="border-white border-2 text-center rounded-2xl h-12 flex-1"
            onChange={handleChange}
            type='text'
            placeholder="Enter User Name"
            name="username"
            value={Form["username"] || ""}
          />
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="font-extrabold text-sm w-24 sm:text-lg sm:w-28 md:text-xl md:w-32">Email</label>
          <input className="border-white border-2 text-center rounded-2xl h-12 flex-1"
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            name="email"
            value={Form["email"] || ""}
          />
        </div>

        <div className="flex items-center gap-4 relative">
          <label className="font-extrabold text-sm w-24 sm:text-lg sm:w-28 md:text-xl md:w-32">Password</label>
          <input className="border-white border-2 text-center rounded-2xl h-12 flex-1"
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            name="password"
            value={Form["password"] || ""}
          />
          <img
            src={showPassword ? hide : eye}
            onClick={togglePasswordVisibility}
            className="absolute right-3 sm:right-5 w-5 h-5 cursor-pointer invert-100"
            alt="toggle"
          />
        </div>

        <div className="flex justify-end">
          <input
            className="w-15 h-8 md:w-20 md:h-10 bg-green-800 rounded-lg md:rounded-2xl cursor-pointer hover:font-bold"
            type="submit"
            value={editId ? "Update" : "Add"}
          />
        </div>
      </form>

      {data.length > 0 && <Data data={data} handleEdit={handleEdit} handleDelete={handleDelete} />}

      <ToastContainer />
    </>
  );
}

export default Main;
