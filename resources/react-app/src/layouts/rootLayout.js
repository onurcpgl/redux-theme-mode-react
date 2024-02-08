import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setWhiteMode } from "../redux/features/theme/themeSlice";
import { MdSunny, MdDarkMode } from "react-icons/md";

function RootLayout() {
    const themeMode = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    return (
        <div
            className={`h-screen w-full ${
                themeMode === true ? "bg-gray-700" : "bg-white"
            }`}
        >
            <div className="w-full h-20 bg-blue-500 text-white flex justify-between px-10  items-center">
                <div className="flex justify-start items-start gap-5">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                </div>
                <div className="">
                    {themeMode === true ? (
                        <MdSunny
                            className="cursor-pointer text-2xl"
                            onClick={() => dispatch(setWhiteMode())}
                        />
                    ) : (
                        <MdDarkMode
                            className="cursor-pointer text-2xl "
                            onClick={() => dispatch(setDarkMode())}
                        />
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Outlet />
            </div>
            {/* Footer */}
        </div>
    );
}

export default RootLayout;
