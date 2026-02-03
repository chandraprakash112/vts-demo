import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardIcon from '../assets/images/sub-headers/dashboard.svg';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import '../App.css';

function SubHeader({ data }) {
const { title, subTitle, back, filters } = data;
    return (
        <>
            <div className="subHeaders">
                <div>
                    <h1 className="subHeaders-title">{title}</h1>
                    <p className="subHeaders-sub-title">
                        <img src={dashboardIcon} alt="Dashboard" style={styles.imagesIcon} />
                        {subTitle}
                    </p>
                </div>
                <div>
                    <div className="relative w-full max-w-sm mx-auto" style={styles.dropdowns}>
                        <select className="w-full appearance-none px-3 py-2  border border-gray-300 rounded-lg
                                focus:outline-none focus:ring-2  focus:ring-blue-500
                                focus:border-blue-500 bg-white " >
                            <option value="">All Channal</option>
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="mango">Mango</option>
                        </select>

                        <ChevronDownIcon className="w-5 h-5 text-gray-500 absolute right-3  pointer-events-none" style={styles.dropdownIcon} />
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    imagesIcon: {
        window: "10%",
    },
    dropdowns: {
        width:'150px'
    },
     dropdownIcon: {
        top:'12px'
    },
};

export default SubHeader;