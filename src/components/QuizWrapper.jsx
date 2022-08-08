import React from "react";
import CenterWrapper from "./CenterWrapper";

const QuizWrapper = ({ item }) => {
    return (
        <CenterWrapper>
            <img
                src="/assets/images/mujib.png"
                alt="mujib logo"
                className="mx-auto w-24 block mb-16"
            />
            <div>
                <article className="bg-white p-8 rounded-md mb-6 text-center relative border-neutral-300 border">
                    <h3 className="text-2xl">
                        এদের মদ্ধে বঙ্গবন্ধু শেখ মুজিবর রহমানের হত্যাকারী কে?
                    </h3>
                    <div className=" bg-orange-600 px-2 py-1 text-sm text-white w-36 rounded-2xl absolute inset-x-1/2 -translate-y-1/2 top-0 -translate-x-1/2">
                        প্রশ্ন ১/১৪
                    </div>
                </article>

                <section className="flex flex-wrap justify-between">
                    <div className="bg-white p-4 rounded-md mb-8 border-neutral-300 border w-[48%] cursor-pointer">
                        <p>মেজর জিয়া</p>
                    </div>
                    <div className="bg-white p-4 rounded-md mb-8 border-neutral-300 border w-[48%] cursor-pointer">
                        <p>মেজর জিয়া</p>
                    </div>
                    <div className="bg-white p-4 rounded-md mb-8 border-neutral-300 border w-[48%] cursor-pointer">
                        <p>খালেদা জিয়া</p>
                    </div>
                    <div className="bg-white p-4 rounded-md mb-8 border-neutral-300 border w-[48%] cursor-pointer">
                        <p>মেজর জিয়া</p>
                    </div>
                </section>
            </div>
        </CenterWrapper>
    );
};

export default QuizWrapper;

// border-green-400 bg-green-600/20 --- right answer

// border-red-400 bg-red-600/20 ---> wrong answer
