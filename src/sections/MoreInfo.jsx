import React from "react";

const MoreInfo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <div className="max-w-[500px] text-wrap space-y-10">
        <div className="space-y-6">
          <h1 className="text-[40px] font-bold">High Performance Cars</h1>
          <span className="text-[40px] font-bold">in your hands</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            libero harum assumenda voluptate, consectetur perferendis ipsam
            incidunt! Nulla reiciendis, sapiente, dicta ullam earum neque
            assumenda eum praesentium, provident aut esse.
          </p>
        </div>
        <div className="flex gap-6">
          <button className="bg-[#AAF528] border-[#AAF528] border-2 py-4 px-10 rounded-md text-[#1E1E1E] font-semibold hover:bg-[#1E1E1E] hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative left-20">
        <img
          src="https://d2qldpouxvc097.cloudfront.net/image-by-path?bucket=a5-gallery-serverless-prod-chromebucket-1iz9ffi08lwxm&key=433338%2Fprofile%2Flg%2F303337"
          alt="car"
          className=""
          width={800}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
