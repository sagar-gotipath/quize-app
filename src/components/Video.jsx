import Plyr from "plyr";
import "/node_modules/plyr/dist/plyr.css";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import CenterWrapper from "./CenterWrapper";

const Video = ({ src }) => {
    const videoPlayerRef = useRef();

    const [isEnded, setIsEnded] = useState(false);

    const handleVideoEnded = () => {
        console.log("clicked");
    };

    useEffect(() => {
        const player = new Plyr(videoPlayerRef.current);
        player.on("ended", (e) => {
            setIsEnded(true);
        });
    }, []);
    return (
        <CenterWrapper>
            <img
                src="/assets/images/mujib.png"
                alt="mujib logo"
                className="mx-auto w-24 block mb-16"
            />
            <h2 className="text-3xl text-center mb-10">
                সম্পূর্ণ ভিডিওটি দেখে কুইজ শুরু করুন
            </h2>
            <div className="max-w-2xl mx-auto w-full">
                <div
                    className="plyr__video-embed"
                    id="player"
                    ref={videoPlayerRef}
                    data-plyr-provider="youtube"
                >
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/hqByNH96e1I"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="pt-16 ">
                {isEnded ? (
                    <button
                        className={clsx(
                            "bg-orange-600 tex text-white w-[250px] py-2.5 rounded-3xl mx-auto block transition cursor-pointer"
                        )}
                        disabled={isEnded}
                        onClick={handleVideoEnded}
                    >
                        কুইজ শুরু করুন
                    </button>
                ) : (
                    <button
                        className={clsx(
                            "bg-orange-600 tex text-white w-[250px] py-2.5 rounded-3xl mx-auto block transition opacity-50"
                        )}
                    >
                        কুইজ শুরু করুন
                    </button>
                )}
            </div>
        </CenterWrapper>
    );
};

export default Video;

// <ReactPlayer
//                 className="react-player"
//                 url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
//                 width="100%"
//                 height="100%"
//             />
