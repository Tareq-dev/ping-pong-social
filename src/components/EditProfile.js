import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function EditProfile() {
  const { register, handleSubmit, reset } = useForm();

  const imageStorageKey = "1b2c7037c7c3024a88877acb8b2cd8fd";

  const onSubmit = (data) => {
    const image = data.picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const userData = {
            name: data.name,
            email: data.email,
            course: data.course,
            subject: data.subject,
            university: data.university,
            address: data.address,
            picture: img,
          };
          console.log(userData);
          fetch("http://localhost:5000/profile", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Product added!", {
                  position: "top-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                reset();
              }
            });
        }
      });
  };
  return (
    <div className="flex justify-center py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col justify-center mx-auto px-4 "
      >
        <label htmlFor="" className="text-md mx-2">
          Full Name
        </label>
        <input
          {...register("name")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="text"
        />
        <label htmlFor="" className="text-md mx-2">
          Email
        </label>
        <input
          {...register("email")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="email"
        />
        <label htmlFor="" className="text-md mx-2">
          Study - Course Name
        </label>
        <input
          {...register("course")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="text"
        />
        <label htmlFor="" className="text-md mx-2">
          Study - Subject
        </label>
        <input
          {...register("subject")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="text"
        />
        <label htmlFor="" className="text-md mx-2">
          Study - University
        </label>
        <input
          {...register("university")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="text"
        />
        <label htmlFor="" className="text-md mx-2">
          Address
        </label>
        <input
          {...register("address")}
          className="border-2 rounded-lg px-4 py-2 block w-80"
          type="text"
        />
        <label htmlFor="" className="text-md mx-2">
          Profile Photo
        </label>
        <input
          {...register("picture")}
          type="file"
          className="file-input file-input-bordered  block file-input-sm w-full max-w-xs"
        />
        <input
          required
          className="border cursor-pointer bg-blue-200 w-80 py-2 rounded-lg shadow-sm my-1"
          type="submit"
        />
      </form>
    </div>
  );
}

export default EditProfile;
