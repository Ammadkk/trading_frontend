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
onClick={()=>handleActiveLabel(item)} key={item.label}>
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



// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const StockChart = () => {
//     const series = [
//         {
//             data: [
//                 [1721911127903, 64256.4412085477],
//                 [1721913467270, 64064.1929594326],
//                 [1721918168876, 64321.9065146895],
//                 [1721920860374, 64989.8651202757],
//                 [1721924034270, 64671.9825824998],
//                 [1721927634564, 65016.8566110603],
//                 [1721932693239, 64929.345488137],
//                 [1721936263185, 64980.2509222104],
//                 [1721939006199, 64641.0179404117],
//                 [1721941734219, 65383.7120983511],
//                 [1721947154866, 65781.1527483683],
//                 [1721949633957, 65728.5525582145],
//                 [1721954207605, 65934.3826297268],
//                 [1721957834551, 66229.384861919],
//                 [1721961073819, 66656.5111664197],
//                 [1721962906245, 67163.3467563934],
//                 [1721967213059, 67064.1253135048],
//                 [1721970886720, 66887.9992456702],
//                 [1721975885466, 66989.0719628806],
//                 [1721979755651, 66967.7620445672],
//                 [1721983261539, 67011.6378330144],
//                 [1721986942021, 67283.3943675265],
//                 [1721990485571, 67331.5572378671],
//                 [1721993979286, 67164.7415114625],
//                 [1721997637532, 67168.2305231633],
//                 [1721999025954, 67238.4185165369],
//                 [1722002446094, 67898.7821299574],
//                 [1722006436752, 67489.3488365316],
//                 [1722011812338, 67634.4838415563],
//                 [1722015395799, 67605.5458121054],
//                 [1722018325161, 67597.8787790872],
//             ],
//         },
//     ];

//     const options = {
//         chart: {
//             id: "area-datetime",
//             type: "area",
//             height: 350,
//             zoom: {
//                 autoScaleYaxis: true,
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         xaxis: {
//             type: "datetime",
//             tickAmount: 6,
//         },
//         markers: {
//             colors: ["#fff"],
//             strokeColor: "#fff",
//             size: 0,
//             strokeWidth: 1,
//             style: "hollow",
//         },
//         tooltip: {
//             theme: "dark",
//         },
//         fill: {
//             type: "gradient",
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.8,
//                 opacityTo: 0.9,
//                 stops: [0, 100],
//             },
//         },
//         grid: {
//             borderColor: "#47535E",
//             strokeDashArray: 4,
//             show: true,
//         },
//     };

//     return (
//         <div>
//             <div id="chart-timelines">
//                 <ReactApexChart
//                     options={options}
//                     series={series}
//                     type="area"
//                     height={350}
//                 />
//             </div>
//         </div>
//     );
// };

// export default StockChart;








