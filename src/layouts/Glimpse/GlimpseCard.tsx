'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const GlimpseCard = ({ glimpse }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log(glimpse);
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(prev => prev + 1);
            } else {
                clearInterval(timer);
                if (currentIndex < glimpse.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                    setProgress(0);
                }
            }
        }, 30); // Adjust this value to change the speed of the progress bar

        return () => clearInterval(timer);
    }, [currentIndex, progress, glimpse.length]);

    const nextGlimpse = () => {
        if (currentIndex < glimpse.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setProgress(0);
        }
    };

    const prevGlimpse = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setProgress(0);
        }
    };

    return (
        <div className={`w-1/2 mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden ${glimpse.videoLinks.length > 0 ? 'h-[600px]' : 'h-[200px]'} relative`}>
            <div className="absolute top-0 left-0 right-0 z-10 flex">
                {glimpse.videoLinks.length > 0 && glimpse.videoLinks.map((_: any, index: number) => (
                    <div key={index} className="flex-1 h-1 bg-gray-700 mr-1">
                        <div
                            className="h-full bg-white transition-all duration-100 ease-linear"
                            style={{ width: `${index === currentIndex ? progress : index < currentIndex ? 100 : 0}%` }}
                        ></div>
                    </div>
                ))}
            </div>

            {glimpse.videoLinks.length > 0 && <div className="relative w-full h-full">
                {glimpse.videoLinks.map(
                    (videoLink: string, index: number) => (
                        <Image
                            key={index}
                            src={videoLink}
                            className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${index === currentIndex
                                ? 'translate-x-0'
                                : index === (currentIndex - 1 + glimpse.videoLinks.length) % glimpse.videoLinks.length
                                    ? `-translate-x-full`
                                    : 'translate-x-full'
                                }`}
                            alt='Glimpse'
                            width={500}
                            height={500}
                            style={{
                                transform: `translateX(${(index - currentIndex) * 100}%)`,
                            }}
                        />
                    )
                )}


            </div>
            }
            {glimpse.caption && (
                <div className={`absolute  bottom-0 left-0 right-0 p-4 ${glimpse.videoLinks.length == 0 && 'flex justify-center items-center top-0'}  bg-gradient-to-t from-black to-transparent`}>
                    <p className="text-white text-center  text-lg">{glimpse.caption}</p>
                </div>
            )}

            {glimpse.videoLinks.length > 0 && <div className="absolute top-4 left-4 flex items-center z-10">
                <img src={glimpse.videoLinks[0] || '/api/placeholder/40/40'} alt="User" className="w-10 h-10 rounded-full mr-2" />
                <span className="text-white font-semibold">{glimpse.userName}</span>
            </div>
            }

            {glimpse.videoLinks.length > 0 && <>  <button
                onClick={prevGlimpse}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
            >
                <ChevronLeft size={24} />
            </button>
                <button
                    onClick={nextGlimpse}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
                >
                    <ChevronRight size={24} />
                </button>
            </>
            }
        </div>
    )
}

export default GlimpseCard