import { AdminWid } from "./AdminWid.js";
const App=new AdminWid();

if(sessionStorage.getItem("username")==="admin"){
  const layo=document.getElementById("layout");
  const layout=new dhx.Layout("layout",{
      type:"none",
      rows:[
          {
          id:"R1",
          html:"<div id='header'></div>",
          height:"160",
          css:"lay1",
          },
          {
              id:"R2",
              html:"<div id='B1'></div>",
              height:"content",
          },
          {
            id:"R3",
            html:"<div id='B2'></div>",
            height:"content",
          }
          //,{
          //   height:"content",
          //   cols:[
             
              
          //   ]
          // }
      ]
  });
  
  
  
  const header=document.getElementById('header');
  header.innerHTML=`<div id='head'>
  <h1>Profile Verification Services<h1>
  <h2>Hello ${sessionStorage.getItem("username")} !</h2>
  <div id='tab'><div>
  
  </div>`;
  
  const tab=new dhx.Tabbar("tab",{
      css:"tabone",
      tabAlign: "center",
      height:"auto",
      views:[
          {id:"dashboard", tab: "Home" },
          {id:"viewA", tab:"View Applicants"},
          { id:"verifyA", tab: "Verification of Applicant" },
          { id:"viewReport", tab: "View Report" },
          { id:"logout",tab: "LogOut" },
      ]
  });
  tab.events.on("change", function(id, prev){
      AddWidgets(id);
    });
  
    // window.onscroll = function() {myFunction()};
    //   function observe() {        
    // var header1 = document.getElementById("head");
    
    // if(header1){
    //   var sticky = header1.offsetTop;
    //   console.log("hi");
    // }
    // else{
    //   setTimeout(observe,100);
    // }
    //   }
    //   observe();
    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }
  
    const B1=document.getElementById('B1');
  B1.innerHTML=`<div class="box">
  <div class="content">
  <h1 style='font-size:30px';> IDENTITY VERIFICATION<br><br>
  TO ACCELERATE TRUST<br><br>
  WORLDWIDE</h1>
  <h3>Unleash the power of AI-driven identity verification solutions that<br>
   surpass traditional KYC & AML checks to boost conversions by <br>deterring fraud and ensuring global compliance.</h3>
   </div>
   <div class="image">
   <img src="main1.png" alt="logo" width="600px" height="300px">
    </div>
    </div>
  
  `;
  
  
  const BR1=document.getElementById("B2");
  BR1.innerHTML=`<div class="B2">
  <h1 style="text-align:center";>Growth of Clients</h1>
  <div id="C4"></div>
  </div>
  `;
  const config = {
    type: "donut",
    css: "char",
    series: [
        {
            value: "value",
            color: "color",
            text: "month"
        }
    ],
    legend: {
        values: {
            text: "id",
            color: "color"
        },
        halign: "right",
        valign: "top"
    }
};

const chart = new dhx.Chart("C4", config);
const pieData = [
  { id: "Jan", value: 1400, color: "#394E79", month: "Jan" },
  { id: "Feb", value: 2200, color: "#5E83BA", month: "Feb" },
  { id: "Mar", value: 3210, color: "#C2D2E9", month: "Mar" },
  { id: "Apr", value: 4225, color: "#9A8BA5", month: "Apr" },
  { id: "May", value: 5259, color: "#E3C5D5", month: "May" }
];
chart.data.parse(pieData);

//const layout1con=layoutCont;
function AddWidgets(id) {
    const layout1Content = document.getElementById('B1');
    const layout1cont=layout1Content;
    console.log(id);
    
    if (id === "logout") {
        sessionStorage.removeItem("username");
        window.location.href="index.html";
      layout1Content.innerHTML = `<h1>Login Form</h1>`;
    } else if (id==="viewA") {
      layout.removeCell("R3");
      App.viewA();
    } 
    else if (id==="educationalDetails") {
        layout1Content.innerHTML = `<h1>Registration Educational Details</h1>`;
      }
      else if (id==="professionalDetails") {
        layout1Content.innerHTML = `<h1>Registration Professional Details</h1>`;
      }
      else if (id === "dashboard") {
      location.reload();
    }
  }
}
else{
    alert(`Please Login First`);
    window.location.href="index.html";
}