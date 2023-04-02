import React from "react";
import { useNavigate } from "react-router-dom";
import { banner, banner1, banner2, banner3 } from "../assets";
import { useStateContext } from "../context";
import CustomButton from "./CustomButton";

const Banner = () => {
  const navigate = useNavigate();

  const { connect, address } = useStateContext();

  return (
    <>
      <div className="hidden xl:flex items-center mb-9 w-full h-[260px] bg-banner bg-cover rounded-[10px] relative before:content-[''] before:absolute before:w-full before:h-full before:z-10 before:opacity-30 before:bg-black">
        {/* <img src={banner} alt="" /> */}
        <div className="py-6 pl-[80px] w-1/3">
          <div className="font-epilogue text-white text-[36px] relative z-20 font-semibold mb-5 leading-[45px]">
            <h2>Create Your</h2>
            <h2>Charity Campaign</h2>
          </div>

          <CustomButton
            btnType="button"
            title={"Create a campaign"}
            styles={"bg-gradient-primary relative z-20"}
            handleClick={() => {
              if (address) navigate("create-campaign");
              else connect();
            }}
          />
        </div>
        <div className="w-2/3">
          <div className="relative flex justify-center items-center gap-x-6 z-10">
            <img
              src={banner2}
              alt=""
              className="h-[150px] rounded-[6px] shadow border aspect-[4/3] object-cover"
            />
            <img
              src={banner1}
              alt=""
              className="h-[200px] rounded-[6px] z-10 shadow border aspect-[4/3] object-cover"
            />
            <img
              src={banner3}
              alt=""
              className="h-[150px] rounded-[6px] shadow border aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
      {/* <div className="h-[260px] w-full rounded-[10px] border border-[#ffffff14] shadow flex">
        <div className="w-2/4">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="w-2/4 p-5">
          <h2 className="text-white font-epilogue mt-3 text-[24px]">
            Quyên góp ủng hộ đồng bào lũ lụt miền Trung
          </h2>
          <p className="text-gray-500 mt-4 font-epilogue">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <div className="font-epilogue text-white">254 donators</div>
          <CustomButton
            title="Donate now"
            btnType={"button"}
            styles="bg-[#1dc071] mt-4"
          />
        </div>
      </div> */}
    </>
  );
};

export default Banner;
