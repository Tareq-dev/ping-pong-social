import React from "react";
import { FcAddImage } from "react-icons/fc";
import { useForm } from "react-hook-form";
import auth from "./../firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import useProfile from "../Hooks/useProfile";
import { toast } from "react-toastify";

function Post() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [profile] = useProfile([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const image = data.picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageStorageKey = "1b2c7037c7c3024a88877acb8b2cd8fd";
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const postData = {
            name: user?.displayName || profile?.name,
            picture: img,
            userPicture: profile.picture,
            content: data.content,
            email: email,
            love: 0,
            comments: [],
          };
          fetch("https://ping-pong-social.onrender.com/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged === true) {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border p-2 md:p-6 my-2 rounded-md shadow-sm"
    >
      <textarea
        {...register("content")}
        placeholder="What's on your mind?"
        className="textarea textarea-bordered textarea-lg w-full"
      ></textarea>
      <div className="flex w-full justify-center items-center">
        <label className="label w-1/2 md:w-1/3">
          <input {...register("picture")} type="file" required />
          <div className="flex md:px-4">
            <FcAddImage size={24} className="mr-2" />
            Add Photo
          </div>
        </label>
        <input
          className="w-1/2 md:w-2/3 border font-bold bg-green-300 h-9 rounded-md"
          type="submit"
        />
      </div>
    </form>
  );
}

export default Post;
