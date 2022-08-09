import React from "react";
import Button from "./Button";
import CenterWrapper from "./CenterWrapper";

const Certificate = () => {
    return (
        <CenterWrapper>
            <img
                src="/assets/images/mujib.png"
                alt="mujib logo"
                className="block w-24 mx-auto mb-8"
            />
            <article className="mb-6 text-center">
                <p>অভিনন্দন</p>
                <h2 className="text-xl">আপনার সার্টিফিকেট</h2>
            </article>
            <div>
                <img
                    src="/assets/images/certificate.png"
                    alt="certificate"
                    className="max-w-[646px] h-auto object-cover mx-auto mb-8"
                />
            </div>
            <div className="flex justify-center mt-8 space-x-6">
                <div>
                    <Button className="flex items-center justify-center bg-orange-600">
                        ডাউনলোড করুন
                        <img
                            src="/assets/images/download_icon.svg"
                            alt="download icon"
                            className="w-4 inline-block ml-1.5"
                        />
                    </Button>
                </div>
                <div>
                    <Button className="flex items-center justify-center bg-blue-800">
                        শেয়ার করুন
                        <img
                            src="/assets/images/share_icon.svg"
                            alt="share icon"
                            className="w-4 inline-block ml-1.5"
                        />
                    </Button>
                </div>
            </div>
        </CenterWrapper>
    );
};

export default Certificate;
