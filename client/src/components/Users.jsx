import React, { use, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const fatherName = e.target.FatherName.value;
    const motherName = e.target.MotherName.value;
    const dateOfBirth = e.target.DateOfBirth.value;
    const nationality = e.target.Nationality.value;
    const bloodGroup = e.target.BloodGroup.value;
    const nationalID = e.target.NationalID.value;
    const mobileNumber = e.target.MobileNumber.value;
    const email = e.target.EmailAddress.value;
    const presentAddress = e.target.PresentAddress.value;
    const skills = e.target.Skills.value;
    const social = e.target.Social.value;

    const newUser = {
      name,
      fatherName,
      motherName,
      dateOfBirth,
      nationality,
      bloodGroup,
      nationalID,
      mobileNumber,
      email,
      presentAddress,
      skills,
      social,
    };

    fetch("https://certificate-backend-zeta.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          newUser._id = data.insertedId;
          setUsers([...users, newUser]);

          // ✅ SweetAlert Success
          Swal.fire({
            icon: "success",
            title: "Added!",
            text: "User added successfully",
            timer: 2000,
            showConfirmButton: false,
          });

          e.target.reset();
        }
      });
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://certificate-backend-zeta.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);

              // ✅ SweetAlert Delete Success
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "User deleted successfully",
                timer: 2000,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  return (
    <div className="text-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <h1 className="text-4xl text-center my-4 font-semibold ">
        Programing <span className="text-orange-400 font-bold">Hero</span>
      </h1>
      <div className="max-w-xl mx-auto bg-black/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          👥 Users: {users.length}
        </h2>

        {/* Form */}
        <form
          onSubmit={handleAddUser}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white"
        >
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="FatherName"
            placeholder="Father's Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="MotherName"
            placeholder="Mother's Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="date"
            name="DateOfBirth"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="Nationality"
            placeholder="Nationality"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="BloodGroup"
            placeholder="Blood Group"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="NationalID"
            placeholder="National ID"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="MobileNumber"
            placeholder="Mobile Number"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="EmailAddress"
            placeholder="Email Address"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="PresentAddress"
            placeholder="Present Address"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="Skills"
            placeholder="Skills"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="url"
            name="Social"
            placeholder="Social Profile Link"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Submit Button takes full width */}
          <button
            type="submit"
            className="md:col-span-2 py-2 rounded bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition font-semibold text-white"
          >
            Add User
          </button>
        </form>

        {/* Users List */}
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex justify-between items-center bg-slate-800/70 p-3 rounded-xl border border-purple-500 text-white"
            >
              <span className="font-medium">{user.name}</span>
              <div className="flex gap-2">
                <Link
                  to={`/users/${user._id}`}
                  className="px-3 py-1 text-sm rounded bg-yellow-400 text-black hover:bg-yellow-300"
                >
                  Details
                </Link>
                <Link
                  to={`/update/${user._id}`}
                  className="px-3 py-1 text-sm rounded bg-cyan-400 text-black hover:bg-cyan-300"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="px-3 py-1 text-sm rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
