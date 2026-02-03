import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mic from '../assets/images/chatbot/mic.svg';
import arrowUup from '../assets/images/chatbot/arrow-up.svg';
import '../App.css';

function AiAnalyticsHeader() {
    const navigate = useNavigate();
    function gotoAiAnalytics() {
        navigate("/ai-analytics");
    }
    return (
        <>
            <div style={styles.containerMain}>
                <div className="aiHeaders">
                    <div>
                        <h1 className="ai-header-title">Ask our AI anything</h1>
                    </div>
                    <div className="aiHeaders-right">
                        <img src={mic} alt="micro-phone" style={styles.imagesIcon} />
                        <img src={arrowUup} alt="arrow-up" style={styles.imagesIcon} className="cursor-pointer"
                            onClick={gotoAiAnalytics} />
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    containerMain: {
        display: 'flex',
        justifyContent: 'space-around'
    }
};

export default AiAnalyticsHeader;