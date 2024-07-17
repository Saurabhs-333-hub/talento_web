'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const FeedCard = ({ post }: any) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === post.imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? post.imageUrls.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-slate-950 shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <img src={post.imageUrls[0]} alt="profile" className="h-10 w-10 bg-cover bg-no-repeat rounded-full mr-3" />
                    <h1 className="text-white font-bold">{post.userId}</h1>
                </div>

                <div className="relative w-full h-64 mb-4 overflow-hidden">
                    {post.imageUrls.map((url: string, index: number) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${index === currentImageIndex
                                ? 'translate-x-0'
                                : index === (currentImageIndex - 1 + post.imageUrls.length) % post.imageUrls.length
                                    ? `-translate-x-full`
                                    : 'translate-x-full'
                                }`}
                            style={{
                                transform: `translateX(${(index - currentImageIndex) * 100 + direction * 100}%)`,
                            }}
                        >
                            <Image
                                src={url}
                                alt={`Post image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                    {post.imageUrls.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                <div className="flex justify-center space-x-2 mb-4">
                    {post.imageUrls.map((_: any, index: number) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-white' : 'bg-gray-600'}`}
                            onClick={() => {
                                setDirection(index > currentImageIndex ? 1 : -1);
                                setCurrentImageIndex(index);
                            }}
                        ></div>
                    ))}
                </div>

                <div className="mt-4">
                    <p className="text-white">{post.caption}</p>
                    <p className="text-white text-xs mt-2">
                        Posted: {new Date(parseInt(post.createdAt)).toLocaleString()}
                    </p>
                    <p className="text-white text-sm mt-2">Post ID: {post.postId}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard