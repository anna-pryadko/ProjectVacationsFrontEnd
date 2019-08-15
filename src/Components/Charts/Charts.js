import React, { Component } from 'react'
import {Bar , Line , Pie} from 'react-chartjs-2' //i can import any kind of charts from this library
import {  Route, Link } from 'react-router-dom';
import axios from "axios";
import { isNull } from 'util';

class Charts extends Component {
   constructor(props){
   super(props);
   this.state={
    sortFollowersArr:[],
    AllVacations:[],
    chartData:{}
              }
             }  
 
 componentDidMount=()=>{
    {     
    axios.get(`http://localhost:5000/getVacationsForChart`)
    .then(response => {  
     this.setState({AllVacations: response.data});
    //  console.log("this.state.AllVacations",this.state.AllVacations)
    let allLocationsArr = [] 
    let followersArr=[];
    let sortLocationsArr = [] 
    let sortFollowersArr = [] 
    let found=false;
    let FollowingCounter=0;

    
    for (let item of this.state.AllVacations){ //first For to sort all locations from users
     allLocationsArr.push(item.title)  
     followersArr.push(item.user_id)            
      }
    
      for (let item1 of allLocationsArr)  //second For to sort locations no duplicate for lables
      {
         if(sortLocationsArr.length==0){
          sortLocationsArr.push(item1)
          } 
         else{
            for(let item2 of sortLocationsArr){
                if(item1===item2){
                    found=true; 
                   }
                  } 
               if(found==false){
               sortLocationsArr.push(item1)
               }
               found=false;
                }
              }
      this.state.chartData.labels=sortLocationsArr; // push to chart locations headers after sort

      for (let item3 of sortLocationsArr){       //thired For to count how many followers for each loaction
        FollowingCounter=0;
        for (let item4 of allLocationsArr){
          if(item3===item4){
              FollowingCounter+=1;
            }
            }
            sortFollowersArr.push(FollowingCounter)
            console.log("sortFollowersArr : ", sortFollowersArr);
            console.log("sortLocationsArr : ", sortLocationsArr);
      }
      this.setState({ chartData:{
        labels:sortLocationsArr,
        lablesColor:'white',
              datasets:[
                  {
                   label:'Followers',
                   data: sortFollowersArr,
                   backgroundColor: [
                    'rgba(255, 255, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                   ],
                  }
                ]
               }})
             })
    .catch(error => {
      console.log("error: ", error);
       })  
      }
     }


  render () {
      if(this.state.chartData.labels==""){ //if lables stiil empty go ti componentDidMount
          this.componentDidMount()
      }
    return (
    <div>
        <div style={{textAlign: "center" }}>
        <button type="button" class="mt-2 btn btn-outline-success"><Link to="/HomeAdmin" style={{color: "white"}}>Back to Admin page</Link></button>
        </div>
        <div>
               <h1 style={{textAlign: "center" , color:"white"}} >Number of vacation followers</h1>
            </div>
     <div className="chart">
      <Bar
  data={this.state.chartData}
  width={100}
  height={600}
  options={{ maintainAspectRatio: false ,
        // title:{
        // display:true,
        // text:'here put title',
        // fontSize:40,
        // fontColor:'white'
        // } ,
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 18,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 25,
                    stepSize: 1,
                }
            }]
        }
  }}
/>
     </div>
     </div>
    )
  }
}
export default Charts;


    //   for (let item3 of followersArr)  //thired For to sort Users no duplicate for data in chart
    //   {
    //     // console.log("item1",item1)
    //      if(sortFollowersArr.length==0){
    //       sortFollowersArr.push(item3)
    //       } 
    //      else{
    //         for(let item4 of sortFollowersArr){
    //             if(item3===item4){
    //                 found1=true; 
    //                }
    //               } 
    //            if(found1==false){
    //               sortFollowersArr.push(item3)
    //            }
    //            found1=false;
    //             }
    //        }
    //        console.log("followersArr = ",followersArr) 
    //        console.log("sortFollowersArr = ",sortFollowersArr) 
    //        this.state.chartData.data=sortFollowersArr;