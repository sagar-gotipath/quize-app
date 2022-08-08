import React from "react";
import Button from "./Button";
import CenterWrapper from "./CenterWrapper";

const Certificate = () => {
    return (
        <CenterWrapper>
            <img
                src="/assets/images/mujib.png"
                alt="mujib logo"
                className="mx-auto w-24 block mb-14"
            />
            <article className="text-center mb-6">
                <p>অভিনন্দন</p>
                <h2 className="text-xl">আপনার সার্টিফিকেট</h2>
            </article>
            <div>
                <img
                    src="/assets/images/certificate.png"
                    alt="certificate"
                    className="max-w-[646px] h-auto object-cover mx-auto mb-10"
                />
            </div>
            <div className="flex space-x-6 justify-center mt-10">
                <div>
                    <Button>ডাউনলোড করুন</Button>
                </div>
                <div>
                    <Button className="bg-blue-800">শেয়ার করুন</Button>
                </div>
            </div>
        </CenterWrapper>
    );
};

export default Certificate;
