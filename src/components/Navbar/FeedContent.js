import React from "react";
import { FcAddImage } from "react-icons/fc";
import { ImHeart } from "react-icons/im";
import { FaRegCommentDots } from "react-icons/fa";

function FeedContent() {
  const post = [
    {
      userName: "Tarequl Islam",
      contetnt:
        "How do you know that an element on the website is pressable? Firstly, the element should communicate a feeling that you can tap or click on it. Secondly, the cursor icon should change to an appropriate one when hovering the element.",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      userName: "Ayshu Islam",
      contetnt:
        "How do you know that an element on the website is pressable? Firstly, the element should communicate a feeling that you can tap or click on it. Secondly, the cursor icon should change to an appropriate one when hovering the element.",
      image:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
        <div className="mx-4">
          <div class="avatar">
            <div class="w-14 rounded-full ring ring-blue-200 ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-center">Alexa</p>
        </div>
      </div>
      <form className="border p-6 my-6 rounded-md shadow-sm">
        <textarea
          placeholder="What's on your mind?"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
        <div className="flex w-full justify-center items-center">
          <label className="label w-1/3">
            <input type="file" required />
            <div className="flex px-4">
              <FcAddImage size={24} className="mr-2" />
              Add Photo
            </div>
          </label>
          <input
            className="w-2/3 border font-bold bg-green-300 h-9 rounded-md"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {/*---------------------------- post------------------------------  */}
      <div className="border shadow-sm p-2 rounded-md my-4">
        <div className="flex">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <div className="flex justify-center items-center ml-2 text-md">
            <p className="font-bold text-xl">Tarequl Islam</p>
          </div>
        </div>
        <p className="text-md text-justify px-5 py-1">
          How do you know that an element on the website is pressable? Firstly,
          the element should communicate a feeling that you can tap or click on
          it. Secondly, the cursor icon should change to an appropriate one when
          hovering the element.
        </p>
        <img
          className="px-4 py-2"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="image"
        />
        <div className="flex py-4 justify-between px-14">
          <ImHeart size={24} />

          <FaRegCommentDots size={24} />

          <p>Details</p>
        </div>
      </div>
    </div>
  );
}

export default FeedContent;
