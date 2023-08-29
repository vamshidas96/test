import { Widget } from "./widget.js";
const wid=new Widget();
const layo=document.getElementById("layout");
const layout=new dhx.Layout("layout",{
    type:"none",
    rows:[
        {
        id:"R1",
        html:"<div id='header'></div>",
        height:"130",
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
        },
        {
          id:"R4",
          html:"<div id='B3'></div>",
          height:"content",
        },
        {
          id:"R5",
          html:`<hr style="width:1450px";>  <p style="margin-left:30px";>Copyright &copy 2017-2023<p>`,
          height: "content",
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
<div id='tab'><div>
</div>`;

const tab=new dhx.Tabbar("tab",{
    css:"tabone",
    tabAlign: "center",
    height:"auto",
    views:[
        {id:"home", tab: "Home" },
        { id:"login", tab: "Login" },
        { id:"registration", tab: "Registration" },
        {id:"growth", tab:"Growth"},
        { id:"aboutus",tab: "About Us" },
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


const BR2=document.getElementById("B3");
BR2.innerHTML=`<div class="B3">
<h1 style="text-align:center";>SHUFTI PRO'S UNIQUE IDENTITY<br><br>VERIFICATION BENEFITS</h1>
<h2 style="text-align:center";>Shufti Pro's industry leading KYC, KYB and AML compliance <br> solutions provide the greatest global coverage, speed and <br> accuracy for verifying your customer's identity</h2>
<div id="B3C"></div>
</div>
`;
const B3=new dhx.Layout("B3C",{
  height:"content",
 
  cols:[
    {
      id:"B3C1",
      html:"<div id='B3C11'></div>",
          
    },
    {
      id:"B3C2",
      html:"<div id='B3C22'></div>",
      

    },
    {
      id:"B3C3",
      html:"<div id='B3C33'></div>",
     

    },
    {
      id:"B3C4",
      html:"<div id='B3C44'></div>",
      

    },
  ]
});

const B3C11=document.getElementById("B3C11");
B3C11.innerHTML=`<div class="pa">
<h2 style="margin:0; font-size:20px";>Flawless Onboarding</h2>
<h4>Verify and onboard every<br>
legitimate customer<br>
seamlessly.</h4>
<img src="pic1.jpg" alt="logo" style="border-radius:8px"; >
</div>
`;

const B3C22=document.getElementById("B3C22");
B3C22.innerHTML=`<div class="pa">
<h2 style="margin:0; font-size:20px";>Enhanced Due Diligence</h2>
<h4>Go beyond basic verification<br>
for comprehensive compliance<br>
checks & risk assessments</h4>
<img src="pic2.jpg" alt="logo" style="border-radius:8px"; >

</div>
`;

const B3C33=document.getElementById("B3C33");
B3C33.innerHTML=`<div class="pa">
<h2 style="margin:0; font-size:20px";>Zero Integration</h2>
<h4>Integration without complex<br>
development, saving time and<br>
resources.</h4>
<img src="pic3.jpg" alt="logo" style="border-radius:8px";>

</div>
`;

const B3C44=document.getElementById("B3C44");
B3C44.innerHTML=`<div class="pa">
<h2 style="margin:0; font-size:20px";>Streamlined Verification</h2>
<h4>Achieve 99% accuracy with<br>
10,000+ ID types, 150<br>
languages, and 230+ countries</h4>
<img src="pic4.jpg" alt="logo" style="border-radius:8px"; width="auto">

</div>
`;


  function AddWidgets(id) {
    const layout1Content = document.getElementById('B1');
    //const layout1cont=layout1Content;
    
    if (id === "login") {
      layout.removeCell("R3");
      layout.removeCell("R4");
      wid.Login();
    } else if (id === "registration") {
      layout.removeCell("R3");
      layout.removeCell("R4");
      wid.Registration();
    }else if(id==="growth"){
      layout.removeCell("R3");
      layout.removeCell("R4");
      wid.Growth();
    }
    else if (id === "home") {
      location.reload();
    }
  }
