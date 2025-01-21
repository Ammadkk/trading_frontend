import { Button } from '@/components/ui/button';
import { fetchMarketChart } from '@/State/Coin/Action';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';

const timeSeries=[
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Time Series (Daily)",
        label:"1 day",
        value:"1",
    },

    {
        keyword:"DIGITAL_CURRENCY_WEEKLY",
        key:"Weekly Time Series",
        label:"1 week",
        value:"7",
    },

    {
        keyword:"DIGITAL_CURRENCY_MONTHLY",
        key:"Monthly Time Series",
        label:"1 month",
        value:"30",
    },

    {
        keyword:"DIGITAL_CURRENCY_YEARLY",
        key:"Yearly Time Series",
        label:"1 year",
        value:"365",
    },

];



const StockChart = ({coinId}) => {
    const dispatch = useDispatch()
    const {coin}=useSelector(store => store)

    const [activeLabel,setActiveLabel]=useState(timeSeries[0])
    const series=[
        {
            data:coin.marketChart.data,
        },
        
    ];

    const options = {
        chart:{
            id:"area-datetime",
            type:"area",
            height:400,
            zoom:{
                autoScaleYaxis:true
            }

        },
        dataLabels:{
            enabled:false
        },
        xaxis:{
            type:"datetime",
            tickAmount:6
        },
        markers:{
            colors:["##FFA726"],
            strokeColor:"#fff",
            // size:0,
            strokeWidth:2,
            // style:"hollow"
            hover:{size:7,},
        },
        tooltip:{
            theme:"dark"
        },
        fill:{
            type:"gradient",
            gradient:{
                shade:"dark",
                type:"vertical",
                shadeIntensity:0.5,
                gradientToColors: ['#FDD835'],
                inverseColors: false,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100]

            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true
        },
        
    }

    const handleActiveLabel=(value)=>{
        setActiveLabel(value)
    }

    useEffect(()=>{
        dispatch(fetchMarketChart({coinId,days:activeLabel.value,jwt:localStorage.getItem("jwt")}))
    },[coinId,dispatch,activeLabel])

  return ( <div>
    <div className="space-x-3">
{timeSeries.map((item)=> <Button variant={activeLabel.label==item.label? "":"outline"}
onClick={()=>handleActiveLabel(item)} key={item.label}
className="rounded-full">
    {item.label}
</Button>)}
    </div>
    <div id="chart-timelines">
        <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
        />
        
    </div>
  </div>);
};

export default StockChart;

