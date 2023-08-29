import { ApplicantWid } from "./ApplicantWid.js";
const App=new ApplicantWid();

if(sessionStorage.getItem("username")!=null){
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
          {id:"details", tab:"Details"},
          { id:"view", tab: "View Application" },
          { id:"status", tab: "Status" },
          { id:"logout",tab: "LogOut" },
      ]
  });
  tab.events.on("change", function(id, prev){
      console.log(id);
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
  <h1 style="text-align:center";>DRIVING TRUST GLOBALLY WITH SHUFTI PRO</h1>
  <div id="C4"></div>
  </div>
  `;
  
  const B2=new dhx.Layout("C4",{
    height:"content",
   
    cols:[
      {
        id:"B2C1",
        html:"<div id='BC1'></div>",
            
      },
      {
        id:"B2C2",
        html:"<div id='BC2'></div>",
        
  
      },
      {
        id:"B2C3",
        html:"<div id='BC3'></div>",
       
  
      },
      {
        id:"B2C4",
        html:"<div id='BC4'></div>",
        
  
      },
    ]
  });
  
  const BC1=document.getElementById("BC1");
  BC1.innerHTML=`<div class="pa">
  <p style="margin:0; font-size:20px";>End-user Happiness</p>
  <p style="margin:0; color:red; font-size:16px";>upto</p>
  <h1> 98.44% </h1>
  </div>
  `;
  
  const BC2=document.getElementById("BC2");
  BC2.innerHTML=`<div class="pa">
  <p style="margin:0; font-size:20px";>First-Go Pass Rate</p>
  <p style="margin:0; color:red; font-size:16px";>upto</p>
  <h1> 98.6% </h1>
  </div>
  `;
  const BC3=document.getElementById("BC3");
  BC3.innerHTML=`<div class="pa">
  <p style="margin:0; font-size:20px";>Verified Identities</p>
  <p style="margin:0; color:red; font-size:16px";>upto</p>
  <h1> 20M + </h1>
  </div>
  `;
  const BC4=document.getElementById("BC4");
  BC4.innerHTML=`<div class="pa">
  <p style="margin:0; font-size:20px";>Reduce compliance <br>violations</p>
  <p style="margin:0; color:red; font-size:16px";>upto</p>
  <h1> 60% </h1>
  </div>
  `;

//const layout1con=layoutCont;
function AddWidgets(id) {
    const layout1Content = document.getElementById('B1');
    const layout1cont=layout1Content;
    
    if (id === "logout") {
        sessionStorage.removeItem("username");
        window.location.href="index.html";
      layout1Content.innerHTML = `<h1>Login Form</h1>`;
    } else if (id==="details") {
      layout.removeCell("R3");
      App.details();
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