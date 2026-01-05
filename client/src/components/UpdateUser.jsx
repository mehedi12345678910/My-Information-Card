import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      name: e.target.Name.value,
      fatherName: e.target.FatherName.value,
      motherName: e.target.MotherName.value,
      dateOfBirth: e.target.DateOfBirth.value,
      nationality: e.target.Nationality.value,
      bloodGroup: e.target.BloodGroup.value,
      nationalID: e.target.NationalID.value,
      mobileNumber: e.target.MobileNumber.value,
      email: e.target.EmailAddress.value,
      presentAddress: e.target.PresentAddress.value,
      skills: e.target.Skills.value,
      social: e.target.Social.value,
    };

    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "User info updated successfully",
            timer: 2000,
            showConfirmButton: false,
          });
          navigate("/"); // go back to home
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-black/50 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          ✏️ Update User Info
        </h2>

        {/* Form */}
        <form
          onSubmit={handleUpdateUser}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white"
        >
          <input
            type="text"
            name="Name"
            defaultValue={user.name}
            placeholder="Full Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="FatherName"
            defaultValue={user.fatherName}
            placeholder="Father's Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="MotherName"
            defaultValue={user.motherName}
            placeholder="Mother's Name"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="date"
            name="DateOfBirth"
            defaultValue={user.dateOfBirth}
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="Nationality"
            defaultValue={user.nationality}
            placeholder="Nationality"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="BloodGroup"
            defaultValue={user.bloodGroup}
            placeholder="Blood Group"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="NationalID"
            defaultValue={user.nationalID}
            placeholder="National ID"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="MobileNumber"
            defaultValue={user.mobileNumber}
            placeholder="Mobile Number"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="EmailAddress"
            defaultValue={user.email}
            placeholder="Email Address"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="PresentAddress"
            defaultValue={user.presentAddress}
            placeholder="Present Address"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="Skills"
            defaultValue={user.skills}
            placeholder="Skills"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="url"
            name="Social"
            defaultValue={user.social}
            placeholder="Social Profile Link"
            className="w-full p-2 rounded border border-purple-500 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Submit Button full width */}
          <button
            type="submit"
            className="md:col-span-2 py-2 rounded bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition font-semibold text-white"
          >
            Update User
          </button>
        </form>

        {/* Home Link */}
        <Link
          to="/"
          className="block text-center mt-4 text-purple-400 hover:text-pink-600 underline"
        >
          🏠 Home
        </Link>
      </div>
    </div>
  );
};

export default UpdateUser;
