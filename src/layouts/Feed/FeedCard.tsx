import React from 'react'

const FeedCard = () => {
    return (
        <>
            <div className="flex flex-col bg-slate-950 w-1/2 justify-center items-center shadow-lg rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-fit w-96 overflow-clip rounded-lg m-2">
                    <video src="https://videos.pexels.com/video-files/8039797/8039797-uhd_1440_2732_25fps.mp4" autoPlay loop muted></video>
                </div>

            </div>
            <div className="relative 
                bottom-36
                left-0
                w-1/5
       h-fit
                overflow-hidden
                text-ellipsis
                bg-slate-950
                rounded-lg
                ">
                <div className="flex items-center">
                    <img src="https://images.pexels.com/photos/3662764/pexels-photo-3662764.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="h-10 w-10 bg-cover bg-no-repeat rounded-full m-2" />
                    <h1 className="text-white font-bold">Username</h1>
                </div>
                <div className="flex items-center mx-2">
                    <h1 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, laudantium.</h1>
                </div>
            </div>
        </>
    )
}

export default FeedCard