import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubHeader from '../../shared-components/sub-header';
import AiAnalyticsHeader from '../../shared-components/AI-Analytics-Header'
import TruckFrontIcon from '../../assets/images/dashboard/truck-front.svg';

import awardsIcon from '../../assets/images/dashboard/awards.svg';
import eyeButton from '../../assets/images/dashboard/eyeButton.svg';
import fileAttechment from '../../assets/images/dashboard/fileAttechment.svg';
import incrementsIcon from '../../assets/images/dashboard/increments.svg';
import schedulerColoredIcon from '../../assets/images/dashboard/scheduler-colored.svg';

import fileCheckWhiteIcon from '../../assets/images/dashboard/file-check-white.svg';
import releaseHoldIcon from '../../assets/images/dashboard/release-hold.svg';
import downloadIcon from '../../assets/images/dashboard/download.svg';
import gpsIcon from '../../assets/images/dashboard/gps.svg';
import fileColoredIcon from '../../assets/images/dashboard/file-colored.svg';
import shildBlankColoredIcon from '../../assets/images/dashboard/shild-blank-colored.svg';


import usersGroupIcon from '../../assets/images/SLAComplince/user-groups.svg';
import locationIcon from '../../assets/images/SLAComplince/location.svg';
import verifyUserIcon from '../../assets/images/SLAComplince/verify-users.svg';
import TruckRightIcon from '../../assets/images/SLAComplince/truck-right.svg';
import warningFrontIcon from '../../assets/images/SLAComplince/warning.svg';
import shiildIcon from '../../assets/images/SLAComplince/shiild.svg';
import FileListIcon from '../../assets/images/SLAComplince/file-list.svg';
import dealersIcon from '../../assets/images/SLAComplince/dealers.svg';
import circleCheckIcon from '../../assets/images/SLAComplince/circle-check.svg';

import circleCheckedGreenIcon from '../../assets/images/SLAComplince/success-circle-check.svg';
import warningColoredIcon from '../../assets/images/SLAComplince/warning-colored.svg';


import FinancialImpactIcon from '../../assets/images/SLAComplince/Financial-Impact.svg';
import locationColoredGreenIcon from '../../assets/images/SLAComplince/location-colored.svg';
import truckRightColoredIcon from '../../assets/images/SLAComplince/truck-right-colored.svg';
import '../../App.css';
import Table from "../../shared-components/Table";
import DynamicChart from '../../shared-components/Chart';



function Dashboard() {
    const progress = 20;
    const subHeaderData = {
        title: 'Dashboard',
        subTitle: 'Dashboard',
        back: true,
        filters: {}
    }


    const summary = [
        { label: 'Total billed', value: 21 },
        { label: 'Dispatched', value: 21 },
        { label: 'Pending for Dispatch', value: 21 },
        { label: 'Delivered', value: 21 },
        { label: 'In-transit', value: 21 },
    ];

    const categories = [
        { label: 'ALL', value: 3223, active: true },
        { label: 'HD', value: 1835 },
        { label: 'LMD', value: 608 },
        { label: 'SCV', value: 200 },
        { label: 'SUBST', value: 300 },
        { label: 'BUS', value: 280 },
    ];

    const sla = [
        // { label: '', total: 'Toal', percent: 'Percentage' },
        { label: 'TPT Allocation Pending', total: 55, percent: '47%', warn: true, url: usersGroupIcon },
        { label: 'Gate Exit/Firewall Pending', total: 55, percent: '47%', warn: true, url: locationIcon },
        { label: 'Driver Allocation Pending', total: 300, percent: '47%', url: verifyUserIcon },
        { label: 'In Transit Vehicles', total: 120, percent: '90%', success: true, url: TruckRightIcon },
        { label: 'Accident /Breakdown /Police custody', total: 55, percent: '47%', url: warningFrontIcon },
        { label: 'Hold Vehicles', total: 55, percent: '47%', url: shiildIcon },
        { label: 'Transporter EPOD', total: 55, percent: '47%', url: FileListIcon },
        { label: 'Dealer EPOD', total: 55, percent: '47%', url: dealersIcon },
        { label: 'PRN Approved', total: 55, percent: '47%', url: circleCheckIcon },
    ];
    const status = (key, el) => {
        const val = el?.[key];
        if (!val) return '';

        let bg = 'bg-[#D9231D]';
        let color = 'text-white';
        let border = '';

        if (val?.toLowerCase() == 'high') {
            bg = 'bg-[#FFE2E2]';
            color = 'text-[#E7000B]';
            border = 'border-[#FFC9C9]'

        } else if (val?.toLowerCase() == 'medium') {
            bg = 'bg-[#FEF9C2]';
            color = 'text-[#D08700]';
            border = 'border-[#FFF085]'

        }
        else if (val?.toLowerCase() == 'low') {
            bg = 'bg-[#DCFCE7]';
            color = 'text-[#00A63E]';
            border = 'border-[#B9F8CF]'
        }
        else {
            bg = 'bg-[#ECEEF2]';
            color = 'text-[#030213]';
            border = 'border-[#ECEEF2]'
        }

        return (
            <span className={`${bg} ${color} border ${border} px-2 py-0.5 rounded-md text-sm capitalize`}
            >
                {val}
            </span>
        );
    }

    const tableHead = [
        { key: 'Route', value: 'Route' },
        { key: 'RiskLevel', value: 'Risk Level', pipe: status },
        { key: 'Vehicles', value: 'Vehicles' },
        { key: 'PredictedETA', value: 'Predicted ETA' },
        { key: 'SLATarget', value: 'SLA Target' },
        { key: 'DelayTime', value: 'Delay Time' },
        { key: 'ExpectedTime', value: 'Expected Time' },
        {
            key: 'Action', value: 'Action', pipe: () => {
                return (
                    <button type="button" className="flex items-center gap-1 text-gray-500 border border-gray-200 px-4 py-1.5 rounded-md text-sm">
                        <img src={warningFrontIcon}></img>&nbsp;&nbsp;Alert
                    </button>
                );
            },
        }
    ];
    const rows = [
        {
            id: 1,
            Route: 'VIN001234567890',
            RiskLevel: 'high',
            Vehicles: '12',
            PredictedETA: '4.5h',
            SLATarget: '4h',
            DelayTime: '3h',
            ExpectedTime: '5h',
            Action: '',
        },
        {
            id: 2,
            Route: 'VIN001234567890',
            RiskLevel: 'medium',
            Vehicles: '15',
            PredictedETA: '4.5h',
            SLATarget: '4h',
            DelayTime: '3h',
            ExpectedTime: '5h',
            Action: '',
        },
        {
            id: 3,
            Route: 'VIN001234567890',
            RiskLevel: 'low',
            Vehicles: '5',
            PredictedETA: '4.5h',
            SLATarget: '3h',
            DelayTime: '3h',
            ExpectedTime: '5h',
            Action: '',
        },
    ];

    const tableHead2 = [
        { key: 'Transaction', value: 'Transaction' },
        { key: 'Created', value: 'Created' },
        { key: 'Pending', value: 'Pending', pipe: status },
        {
            key: 'CompletionRate', value: 'Completion Rate', pipe: () => {
                return (
                    <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden" >
                        <div className="h-full bg-gray-900 rounded-full" style={{ width: `${progress}%` }}></div><span>20%</span>
                    </div>
                );
            },
        }
    ];
    const rows2 = [
        {
            id: 1,
            Transaction: 'PNR',
            Created: '90',
            Pending: '20',
            Action: '',
        },
        {
            id: 2,
            Transaction: 'POP',
            Created: '90',
            Pending: '20',
            Action: '',
        },
        {
            id: 3,
            Transaction: 'SRN',
            Created: '90',
            Pending: '20',
            Action: '',
        },
    ];

    const yardData = [
        {
            name: "Mumbai Hub",
            occupancy: 78,
            idleDays: 2.3,
            color: "bg-orange-500",
        },
        {
            name: "Delhi Central",
            occupancy: 85,
            idleDays: 3.1,
            color: "bg-red-500",
        },
        {
            name: "Bangalore South",
            occupancy: 67,
            idleDays: 1.8,
            color: "bg-orange-500",
        },
        {
            name: "Chennai Port",
            occupancy: 92,
            idleDays: 4.2,
            color: "bg-red-500",
        },
        {
            name: "Ahmedabad West",
            occupancy: 71,
            idleDays: 2.7,
            color: "bg-orange-500",
        },
    ];

    const [dealerTransPort, setDealerTransPort] = useState('Dealer');
    const [chartType, setChartType] = useState('pie');
    const [chartTypeBar, setChartTypeBar] = useState('bar');

    const chartData = {
        labels: [
            "Delhi Express",
            "Gujarat Logistics",
            "Mumbai Transport",
            "LogiMove Express",
            "Swift Logistics",
        ],
        datasets: [
            {
                data: [2.1, 0.5, 1.8, 0.8, 1.2],
                backgroundColor: [
                    "#E15249", // Red
                    "#4F7CF3", // Blue
                    "#8B68F2", // Purple
                    "#55B57E", // Green
                    "#F2A93B", // Orange
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw}%`,
                },
            },
            datalabels: {
                color: (ctx) => ctx.dataset.backgroundColor[ctx.dataIndex],
                formatter: (value, ctx) =>
                    `${ctx.chart.data.labels[ctx.dataIndex]}: ${value}%`,
                font: {
                    size: 14,
                    weight: "600",
                },
                align: "end",
                anchor: "end",
                offset: 15,
                clamp: true,
            },
        },
    };


    const dataOnTimeDelivery = {
        labels: [
            "LogiMove Express",
            "Swift Logistics",
            "Delhi Express",
            "Gujarat Logistics",
            "Mumbai Transport",
        ],
        datasets: [
            {
                label: "On-Time Delivery % by Transporter",
                data: [12, 18, 26, 8, 22],
                backgroundColor: "#59b784",
                borderRadius: 6,
            },
        ],
    };

     const dataSLABreach = {
        labels: [
            "LogiMove Express",
            "Swift Logistics",
            "Delhi Express",
            "Gujarat Logistics",
            "Mumbai Transport",
        ],
        datasets: [
            {
                label: "SLA Breaches",
                data: [12, 18, 26, 8, 22],
                backgroundColor: "#e1524a",
                borderRadius: 6,
            },
        ],
    };

    const optionsOnTimeDelivery = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "SLA Breach Count by Route",
                font: { size: 18 },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 7 },
            },
        },
    };

    const tableHead3 = [
        { key: 'Dealer', value: 'Dealer' },
        { key: 'Vehicles', value: 'Vehicles' },
        { key: 'AvgEPODTime', value: 'Avg EPOD Time' },
        { key: 'Exceptions', value: 'Exceptions', pipe: status },
        { key: 'SLABreach', value: 'SLA Breach %', pipe: status },
        {
            key: 'Rating', value: 'Rating', pipe: (key,el) => {

                return (
                    <div style={{ color: "#f59e0b", fontWeight: 600 }}>
                        ★ <span>{el[key]}</span>
                    </div>
                );
            },
        },

    ];
    const rows3 = [
        {
            id: 1,
            Dealer: 'Maruti Mumbai Central',
            Vehicles: '67',
            AvgEPODTime: '2.5h',
            Exceptions: '5',
            SLABreach: '8%',
            Rating: '4.8',
        },
    ];

    const onChangeDearTranspor = (data) => {
       setDealerTransPort(data)
    };

    return (<>
        <SubHeader data={subHeaderData} />
        <AiAnalyticsHeader></AiAnalyticsHeader>
        {/* <Search /> */}
        <div className="space-y-7">
            <div className="bg-white rounded-lg border border-[#EBEBEB] p-4 space-y-4">
                <select className="w-full sm:w-[150px] bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Plant</option>
                    <option>Plant 1</option>
                    <option>Plant 2</option>
                    <option>Plant 3</option>
                </select>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {summary.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FBFBFB] rounded-xl p-4 flex flex-col items-center text-center"
                        >
                            <div className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
                                <img src={TruckFrontIcon} className="w-6 h-6" />
                                {item.value}
                            </div>
                            <div className="text-sm font-medium text-[#4A5A55]">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {categories.map((c, idx) => (
                    <div key={idx} className={`
                         min-w-[45%] sm:min-w-[20%] md:min-w-0 text-center border rounded-2xl py-3 px-4 
                         ${c.active ? 'border-red-500 text-red-600 bg-[#fef3f2]' : 'text-gray-700 bg-white border-gray-300'}`}>
                        <div className="text-sm font-medium">{c.label}</div>
                        <div className="text-2xl font-semibold text-red-600">{c.value}</div>
                    </div>
                ))}
            </div>

            <div className="bg-white shadow rounded-2xl p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <h2 className="flex gap-2 text-lg font-semibold"><img src={schedulerColoredIcon}></img>SLA Compliance Status</h2>
                    <span className="bg-[#EFF6FF] px-3 py-1 rounded-full text-center" style={styles.overAll}>
                        92% Overall
                    </span>
                </div>

                <div className="divide-y">
                    <div className="flex justify-between py-3 text-sm">
                        <span className="aiHeaders-right"></span>
                        <div className="flex gap-6 items-center">
                            <span className={`text-center totalsCon`} style={styles.width80}>
                                Toal
                            </span>
                            <span className="text-center totalsCon" style={styles.width80}>Percentage</span>
                        </div>
                    </div>
                    {sla.map((s, idx) => (
                        <div key={idx} className="flex justify-between py-3 text-sm">
                            <span className="aiHeaders-right">
                                <img src={s.url} />
                                {s.label}</span>

                            <div className="flex gap-6 items-center">
                                <span className={`${s.warn ? 'text-red-500' : s.success ? 'text-green-600' : 'text-gray-700'} text-center`} style={styles.width80}>
                                    <img src={s.warn ? warningColoredIcon : s.success ? circleCheckedGreenIcon : ''} />  {s.total}
                                </span>
                                <span className="text-gray-500 text-center" style={styles.width80}>{s.percent}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-white shadow rounded-2xl p-5 md:p-6">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">EPOD Discrepency</h2>
                    <p className="text-sm font-sm text-[#717182]">Categories of fraud attempts detected</p>
                </div>


                <div className="gap-1 grid lg:grid-cols-3">
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex">
                                <span style={styles.wdth70}>Geo Mismatch</span>
                                <span><img src={locationColoredGreenIcon}></img></span>
                            </div>
                            <h2 className="text-2xl font-semibold text-red-600">4</h2>
                            <div>
                                <p style={styles.EPODSubTitle}>EPOD location vs actual</p>
                                <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden" style={{ width: '75%' }} >
                                    <div className="h-full bg-gray-900 rounded-full" style={{ width: `${progress}%,` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex">
                                <span style={styles.wdth70}>Duplicate VIN</span>
                                <span><img src={truckRightColoredIcon}></img></span>
                            </div>
                            <h2 className="text-2xl font-semibold text-red-600" style={{ color: '#D08700' }}>4</h2>
                            <div>
                                <p style={styles.EPODSubTitle}>Double billing attempts</p>
                                <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden" style={{ width: '75%' }}>
                                    <div className="h-full bg-gray-900 rounded-full" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex">
                                <span style={styles.wdth70}>Other Anomalies</span>
                                <span><img src={warningColoredIcon}></img></span>
                            </div>
                            <h2 className="text-2xl font-semibold text-red-600">4</h2>
                            <div>
                                <p style={styles.EPODSubTitle}>Pattern-based detection</p>
                                <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden" style={{ width: '75%' }}>
                                    <div className="h-full bg-gray-900 rounded-full" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border rounded-2xl py-3 px-4 mt-3 text-gray-700 bg-[#F0FDF4] border-[#B9F8CF]-300" style={{ border: 'solid #B9F8CF 1px' }}>
                    <div className="text-sm font-medium">
                        <div className="flex gap-4">
                            <div>
                                <img src={FinancialImpactIcon} className="mt-2"></img>
                            </div>
                            <div>
                                <h2 className="mb-1" style={{ color: '#0D542B', fontWeight: '600', fontSize: '1.5rem' }}>Financial Impact</h2>
                                <p style={{ color: '#008236', fontWeight: '400', fontSize: '14px' }}>Prevented fraud cases saved approximately <span style={{ color: '#0D542B', fontWeight: '600' }}>₹8.4 Lakhs</span> this month</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="gap-2 grid lg:grid-cols-2">
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex gap-2 items-center">
                                <span><img src={awardsIcon}></img></span>
                                <span style={{ fontSize: '16', fontWeight: '400', color: '#0A0A0A' }}>Top Performer</span>
                            </div>

                            <div className="gap-2 grid grid-cols-2">
                                <div className="flex items-center">
                                    <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>Express Logistics Pvt Ltd</p>
                                </div>
                                <div className="mt-2 mb-2 items-right">
                                    <div className="flex gap-4 items-center" style={{ justifyContent: 'flex-end' }}>
                                        <span style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>On-Time:</span>
                                        <span style={{ fontSize: '14', fontWeight: '600', color: '#0A0A0A' }}>95%</span>
                                    </div>
                                    <div className="flex gap-4 items-center" style={{ justifyContent: 'flex-end' }}>
                                        <span style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>SLA Compliance:</span>
                                        <span style={{ fontSize: '14', fontWeight: '600', color: '#0A0A0A' }}>92%</span>
                                    </div>
                                    <div className="flex gap-4 items-center" style={{ justifyContent: 'flex-end' }}>
                                        <span style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>Accident Rate:</span>
                                        <span style={{ fontSize: '14', fontWeight: '600', color: '#00A63E' }}>9%</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold text-red-600" style={{ color: '#00A63E' }}>92/100</h2>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex gap-2 items-center">
                                <span><img src={incrementsIcon}></img></span>
                                <span style={{ fontSize: '16', fontWeight: '400', color: '#0A0A0A' }}>Most Improved</span>
                            </div>

                            <div className="gap-2 grid grid-cols-2">
                                <div className="flex items-center">
                                    <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>Swift Transport Solutions</p>
                                </div>
                                <div className="mt-2 mb-2 items-right">
                                    <div className="flex gap-4 items-center" style={{ justifyContent: 'flex-end' }}>
                                        <span style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>3-Month Trend:</span>
                                        <span style={{ fontSize: '14', fontWeight: '600', color: '#00A63E', width: '100px' }}>18 Points</span>
                                    </div>
                                    <div className="flex gap-4 items-center" style={{ justifyContent: 'flex-end' }}>
                                        <span style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>Key Improvement:</span>
                                        <span style={{ fontSize: '14', fontWeight: '600', color: '#0A0A0A', width: '100px' }}>EPOD Speed</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-semibold text-red-600" style={{ color: '#000000ff' }}>88/100</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Active SLA Breach Risk Predictions</h2>
                    <p className="text-sm font-sm text-[#717182]">Routes at risk of missing SLA targets</p>
                </div>
                <Table tableHead={tableHead} rows={rows} pagination={false} searchable="" sorting={false} tableContainer="tableBorderedColor" headerStyles="tableHeasersColor"/>
            </div>

            <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                <div className="mb-4 flex gap-4 item-center " style={{ alignItems: 'center' }}>
                    <div>
                        <img src={fileAttechment}></img>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Transaction Summary</h2>
                        <p className="text-sm font-sm text-[#717182]">Overview of document workflow status across all transactions</p>
                    </div>
                </div>
                <Table tableHead={tableHead2} rows={rows2} pagination={false} searchable="" sorting={false} headerStyles="tableHeasersColor border-bottom"/>
            </div>

            <div>
                <div className="gap-2 grid lg:grid-cols-2">
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="mb-4">
                                <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>Accident % by Transporter</p>
                                <p style={{ fontSize: '16', fontWeight: '400', color: '#717182' }}>Distribution of accident rates across transporters</p>
                            </div>

                            <div>
                                <div style={{ width:'50%', margin: 'auto' }}>
                                    <DynamicChart type={chartType} data={chartData} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="mb-4">
                                <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>Yard Occupancy & Idle Days Heat Map</p>
                                <p style={{ fontSize: '14', fontWeight: '400', color: '#717182' }}>Color-coded yard utilization and idle times</p>
                            </div>

                            <div className="space-y-4">
                                {yardData.map((yard, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between border rounded-xl p-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`w-6 h-6 rounded-md ${yard.color}`}
                                            ></span>

                                            <div>
                                                <p className="text-md font-semibold text-[#0A0A0A]-500">
                                                    {yard.name}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    {yard.occupancy}% occupancy • {yard.idleDays} avg idle days
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-40 h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-black to-gray-800 rounded-full"
                                                style={{ width: `${yard.occupancy}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="delaerAndTansporterPerFormance flex flex-col lg:flex-row sm:gap-4 mb-4">
                    <div className={`transporterBtn ${dealerTransPort == 'Dealer' ? 'isActveButtons' : ''}`} onClick={() => onChangeDearTranspor('Dealer')}><p>Dealer Performance</p></div>
                    <div className={`transporterBtn ${dealerTransPort == 'Transporter' ? 'isActveButtons' : ''}`} onClick={() => onChangeDearTranspor('Transporter')}><p>Transporter Performance</p></div>
                </div>
                <div className="gap-2 grid lg:grid-cols-2">
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="mb-4">
                                <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>{dealerTransPort == 'Dealer' ? 'Dealer EPOD Confirmation Times' : 'On-Time Delivery % by Transporter'}</p>
                                <p style={{ fontSize: '16', fontWeight: '400', color: '#717182' }}>{dealerTransPort == 'Dealer' ? 'Dealer EPOD Confirmation Times' : 'Average hours to confirm EPOD'}</p>
                            </div>

                            <div>
                                <div style={{ width:'100%', margin: 'auto' }}>
                                    <DynamicChart type={chartTypeBar} data={dataOnTimeDelivery} options={optionsOnTimeDelivery} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="mb-4">
                                <p style={{ fontSize: '16', fontWeight: '600', color: '#0A0A0A' }}>{dealerTransPort == 'Dealer' ? 'Dealer Feedback Rating Trend' : 'SLA Breach Count by Route'}</p>
                                <p style={{ fontSize: '16', fontWeight: '400', color: '#717182' }}>{dealerTransPort == 'Dealer' ? 'Customer Satisfaction ratings' : 'Transporter route-wise breaches'}</p>
                            </div>

                            <div style={{ width: '100%', margin: 'auto' }}>
                                <DynamicChart type={chartTypeBar} data={dataSLABreach} options={optionsOnTimeDelivery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-5 md:p-6 border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">{dealerTransPort == 'Dealer' ? 'Dealer Performance Summary' : 'Transporter Performance Summary'}</h2>
                    <p className="text-sm font-sm text-[#717182]">{dealerTransPort == 'Dealer' ? 'Comprehensive dealer metrics and KPIs' : 'Comprehensive transporter metrics and compliance'}</p>
                </div>
                <Table tableHead={tableHead3} rows={rows3} pagination={false} searchable="" sorting={false} headerStyles="tableHeasersColor" />
            </div>

            <div className="bg-white shadow rounded-2xl p-5 md:p-6">
                <div className="mb-4">
                    <div>
                        <h2 className="text-lg font-semibold flex gap-2 item-center"><img src={warningColoredIcon}></img> Exception Alerts</h2>
                        <p className="text-sm font-sm text-[#717182]">Critical alerts requiring immediate attention</p>
                    </div>
                </div>


                <div className="gap-4 grid lg:grid-cols-2 mb-4">
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex" style={{justifyContent: 'space-between'}}>
                                <div className="flex gap-2 item-center">
                                    <span style={{marginTop:'6px'}}><img src={warningColoredIcon}></img></span>
                                    <div>
                                        <p className="flex"><span>GPS signal lost for 35 minutes</span></p>
                                        <p className="text-[#717182]" style={{ fontSize: '12px', fontWeight: '400' }}>Vehicle: <span>MH14CD5678</span> <span>• 35 mins ago</span></p>
                                    </div>
                                </div>

                                <div className="flex gap-2 item-center justify-center" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                                   <span className={`bg-[#FEF9C2] text-[#D08700] border border-[#FFF085] px-1 py-0.5 rounded-md text-sm capitalize`} 
                                      style={{fontSize:'12px', height:'20px', padding:'2px 4px'}}>CRITICAL</span>
                                     <img src={eyeButton}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex" style={{justifyContent: 'space-between'}}>
                                <div className="flex gap-2 item-center">
                                    <span style={{marginTop:'6px'}}><img src={warningColoredIcon}></img></span>
                                    <div>
                                        <p className="flex"><span>PRN pending without transporter assignment</span></p>
                                        <p className="text-[#717182]" style={{ fontSize: '12px', fontWeight: '400' }}>Vehicle: <span>MH14CD5678</span> <span>• 35 mins ago</span></p>
                                    </div>
                                </div>

                                <div className="flex gap-2 item-center justify-center" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                                    <span className={`bg-[#FEF9C2] text-[#D08700] border border-[#FFF085] px-1 py-0.5 rounded-md text-sm capitalize`} 
                                      style={{fontSize:'12px', height:'20px', padding:'2px 4px'}}>CRITICAL</span>
                                     <img src={eyeButton}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-4 grid lg:grid-cols-2">
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex" style={{justifyContent: 'space-between'}}>
                                <div className="flex gap-2 item-center">
                                    <span style={{marginTop:'6px'}}><img src={gpsIcon}></img></span>
                                    <div>
                                        <p className="flex"><span>GPS signal lost for 35 minutes</span></p>
                                        <p className="text-[#717182]" style={{ fontSize: '12px', fontWeight: '400' }}>Vehicle: <span>MH14CD5678</span> <span>• 35 mins ago</span></p>
                                    </div>
                                </div>

                                <div className="flex gap-2 item-center justify-center" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                                   <span className={`bg-[#FEF9C2] text-[#D08700] border border-[#FFF085] px-1 py-0.5 rounded-md text-sm capitalize`} 
                                      style={{fontSize:'12px', height:'20px', padding:'2px 4px'}}>CRITICAL</span>
                                     <img src={eyeButton}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="flex" style={{justifyContent: 'space-between'}}>
                                <div className="flex gap-2 item-center">
                                    <span style={{marginTop:'6px'}}><img src={shildBlankColoredIcon}></img></span>
                                    <div>
                                        <p className="flex"><span>PRN pending without transporter assignment</span></p>
                                        <p className="text-[#717182]" style={{ fontSize: '12px', fontWeight: '400' }}>Vehicle: <span>MH14CD5678</span> <span>• 35 mins ago</span></p>
                                    </div>
                                </div>

                                <div className="flex gap-2 item-center justify-center" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                                    <span className={`bg-[#FEF9C2] text-[#D08700] border border-[#FFF085] px-1 py-0.5 rounded-md text-sm capitalize`} 
                                      style={{fontSize:'12px', height:'20px', padding:'2px 4px'}}>CRITICAL</span>
                                     <img src={eyeButton}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="bg-white shadow rounded-2xl p-5 md:p-6">
                <div className="mb-4">
                    <div>
                        <h2 className="text-lg font-semibold flex gap-2 item-center"><img src={warningColoredIcon}></img> Quick Actions Panel</h2>
                        <p className="text-sm font-sm text-[#717182]">Frequently used administrative actions</p>
                    </div>
                </div>


                <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 mb-4">
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300 quickActionActive">
                        <div className="text-sm font-medium">
                            <div className="quickActions">
                                <img src={fileCheckWhiteIcon}></img>
                                <div>
                                    <p>Approve PRN/SRN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="quickActions">
                                <img src={verifyUserIcon}></img>
                                <div>
                                    <p>Assign Transporter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="quickActions">
                                <img src={releaseHoldIcon}></img>
                                <div>
                                    <p>Release Hold Vehicle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-2xl py-3 px-4  text-gray-700 bg-white border-gray-300">
                        <div className="text-sm font-medium">
                            <div className="quickActions">
                                <img src={downloadIcon}></img>
                                <div>
                                    <p>Generate Report</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>);
}

const styles = {
    width80: {
        width: '90px',
        TextAlignCenter: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        gap: '0.3rem'
    },
    tota: {
        backgroundColor: '#F6F6F6'
    },
    overAll: {
        padding: '2px 13px',
        fontSize: '14px',
        fontWeight: '600'
    },
    wdth70: {
        width: '70%',
        fontSize: '16px',
        fontWeight: '600',
        color: '#0A0A0A'
    },
    EPODSubTitle: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#717182'
    }
};




export default Dashboard;
