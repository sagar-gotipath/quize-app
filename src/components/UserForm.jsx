import React from "react";
import Button from "./Button";
import CenterWrapper from "./CenterWrapper";

const UserForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    };
    return (
        <CenterWrapper>
            <img
                src="/assets/images/mujib.png"
                alt="15 august"
                className="mx-auto"
            />
            <form className="bg-white p-10 max-w-lg mx-auto rounded-lg">
                <h2 className="text-3xl text-center mb-14">
                    কুইজে অংশগ্রহণ করতে আপনার নাম এবং ফোন নাম্বার দিন
                </h2>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="নাম"
                        className="px-5 py-3 border border-neutral-400 w-full rounded-3xl mb-10 focus:outline-none relative transition after:content['নাম'] after:z-30  after:absolute after:left-0 focus:after:-top-1/2"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="ফোন নাম্বার "
                        className="px-5 py-3 border border-neutral-400 w-full rounded-3xl mb-10 focus:outline-none relative transition"
                    />
                </div>
                <Button>অংশগ্রহণ করুন</Button>
            </form>

            <div className="flex justify-center space-x-5 my-10">
                <img
                    src="/assets/images/deepto_logo.png"
                    alt="deepto TV logo"
                    className="w-[130px] h-auto"
                />
                <img
                    src="/assets/images/gotipath_logo.png"
                    alt="deepto TV logo"
                    className="w-[130px] h-auto"
                />
            </div>
        </CenterWrapper>
    );
};

export default UserForm;
