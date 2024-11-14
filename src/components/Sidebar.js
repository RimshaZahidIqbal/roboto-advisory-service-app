"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { filterChats } from '../utils/filterChats';
import chatsData from '../../data/chatData';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const { todayChats, last7DaysChats, olderChats } = filterChats(chatsData);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-gray-100 p-4 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 z-40`}
            >
                <div className="space-y-8">
                    <div className="text-gray-600 font-semibold">Today</div>
                    <Swiper direction="vertical" spaceBetween={10} slidesPerView="auto">
                        {todayChats.map((chat, index) => (
                            <SwiperSlide key={index} className="text-gray-700 font-medium">
                                {chat.title}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-gray-500 font-semibold">Previous 7 Days</div>
                    <Swiper direction="vertical" spaceBetween={10} slidesPerView="auto">
                        {last7DaysChats.map((chat, index) => (
                            <SwiperSlide key={index} className="text-gray-700 font-medium">
                                {chat.title}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-gray-500 font-semibold">Previous 30 Days</div>
                    <Swiper direction="vertical" spaceBetween={10} slidesPerView="auto">
                        {olderChats.map((chat, index) => (
                            <SwiperSlide key={index} className="text-gray-700 font-medium">
                                {chat.title}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </aside>

            {/* Toggle Button for Mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 bg-blue-500 text-white p-2 rounded-lg z-50"
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>
        </div>
    );
}

