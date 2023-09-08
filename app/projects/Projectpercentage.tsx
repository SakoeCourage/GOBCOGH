"use client"
import React, { useState, useCallback } from 'react'
import ReactApexChart from 'react-apexcharts'
import {Range,statsGroup,RangeoptionsProps} from './projects.td'
export const colors_sets:string[] = ['#0284c7', '#fb7185', '#fde047', '#92400e', '#15803d', '#312e81', '#fda4af', '#1e293b', '#84cc16', '#312e81']


let state = {
    series: [0, 85.7, 14.3],
    options: {
        legend: {
            fontSize: '20px'
        },
       
        labels: ["Commerical Projects", "Industrial Projects", "Civil Projects"],
        colors: [...colors_sets],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: "bottom"
                },

            }
        }]
    }
}


function Rangeoptions({ active = false, range ="2000-2005", setNewRange }: RangeoptionsProps) {
    return <button onClick={() => setNewRange(range)} className={`flex items-center gap-3 text-lg py-3 transition-transform duration-200 transform ${active == true ? '!text-primary-orange underline  scale-105 font-bold text-2xl' : 'text-gray-400 hover:text-primary-orange/60 hover:underline'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z" /></svg>
        <nav className=''>
            {active ? 'Showing' : 'Click here to see'} {range}
        </nav>
    </button>
}


function Projectpercentage() {
    const [currentState, setCurrentState] = useState(state);
    const [currentRange, setCurrentRange] = useState<Range>("2000-2005");

    function getSeriesFromRange(range: Range): Array<number> | undefined {
        return statsGroup.find(item => item.range === range)?.series
    }

    function setNewRange(range: Range) {
        let toSet = getSeriesFromRange(range);
        setCurrentRange(range)
        setCurrentState(cv => cv = { ...cv, series: toSet ?? [] });
    }

    const checkActive = (range: Range): boolean => {
        return (JSON.stringify(currentState.series) == JSON.stringify(getSeriesFromRange(range)))
    }

    return (

        <div className='container-content text-gray-400 py-16'>
            <nav className='flex items-center gap-8 mb-20'>
                <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
                <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >PROJECT STATS</h1>
            </nav>
            <div className=' grid grid-cols-2'>
                <ReactApexChart width="700px" height="700px" series={currentState?.series} options={currentState?.options} type="donut" />
                <nav className='flex flex-col gap-10' >
                    <nav className=' text-2xl '> Showing our stats for <b> {currentRange}</b></nav>
                    {
                        statsGroup.map((stat, i) => <Rangeoptions key={i} active={checkActive(stat.range)} range={stat.range} setNewRange={setNewRange} />)
                    }
                </nav>
            </div>
        </div>
    )
}

export default Projectpercentage