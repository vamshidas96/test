export class Widget{
    constructor(){
       
    }
   
    Login(){
       const layout1Content = document.getElementById('B1');
        layout1Content.innerHTML = `<div id="login"> 
        <h1 style="text-align: center;">Login Form</h1>
        <div id="loginform"></div>
        </div>`;
      
    const form = new dhx.Form("loginform", {
      css: "dhx_widget--bg_white dhx_widget--bordered",
        padding: 40,
        width: 600,
        height:399,
        rows: [
          
          {
            type: "input",
            label: "User Name",
            // value: "John",
            placeholder: "",
            required:true,
            validation: function(value) {
                return value && value.length >= 6;
              },
              errorMessage: "Too short",
              successMessage: "Correctly",
              preMessage: "At least 8 characters",
              name: "username",
          },
          {
            type: "input",
            label: "Password",
            inputType:"password",
            placeholder: "",
            required:true,
            errorMessage: "Invalid Password",
            successMessage: "Valid Password",
            validation: function(value) {
                return value && value.length >= 6;
              },
            name: "password",
                  },
          {
            type: "checkbox",
            text: "I agree",
            value: "agree",
            id:"checkbox",
            required:true   
          },
          {
            type: "button",
            text: "Send",
            submit: true,
            size: "medium",
            view: "flat",
            color: "primary"
          },
        ]
      });
      
    //   const email = form.getItem("email");
      
    //   email.events.on("input", function(value) {
    //     email.validate(false, value);
    //   });

    form.events.on("click", function(id,e){
        e.preventDefault();
        console.log(form.getValue());
        if(form.getValue().username==="vamshi" && form.getValue().password==="vamshi" && form.getValue().checkbox==="agree"){
            sessionStorage.setItem("username",form.getValue().username);
           window.location.href="Applicant.html";
        }
        else  if(form.getValue().username==="admin" && form.getValue().password==="admin" && form.getValue().checkbox==="agree"){
          sessionStorage.setItem("username",form.getValue().username);
         window.location.href="Admin.html";
      }
        else{
        form.clear();
        }
      });
      
    }

    Registration(){
      const layout1Content = document.getElementById('B1');
      layout1Content.innerHTML = `<div id="reg"> 
        <h1 style="text-align: center;">Registartion Form</h1>
        <div id="registrationform"></div>
        </div>`;
      const form = new dhx.Form("registrationform", {
        css: "dhx_widget--bg_white dhx_widget--bordered",
        padding: 40,
        width: 600,
       // height: 550,
       
        rows: [
          {
            type: "input",
            label: "First Name",
            placeholder: "",
            validation: function(value) {
              return value && value.length >= 2; // Modify validation criteria as needed
            },
            errorMessage: "Too short",
            successMessage: "Correctly",
            preMessage: "At least 6 characters",
            name: "firstName",
          },
          {
            type: "input",
            label: "Middle Name",
            placeholder: "",
            validation: function(value) {
              // Add your validation logic here
              return true; // Modify validation criteria as needed
            },
            name: "middleName",
          },
          {
            type: "input",
            label: "Last Name",
            placeholder: "",
            validation: function(value) {
              return value && value.length >= 2; // Modify validation criteria as needed
            },
            errorMessage: "Too short",
            successMessage: "Correctly",
            preMessage: "At least 6 characters",
            name: "lastName",
          },
          {
            type: "input",
            label: "Mobile Number",
            placeholder: "",
            validation: function(value) {
              // Add your validation logic here
              return true; // Modify validation criteria as needed
            },
            name: "mobileNumber",
          },
          {
            type: "input",
            label: "Email",
            placeholder: "",
            validation: function(value) {
              // Add email validation logic here
            //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            errorMessage: "Invalid Email",
            successMessage: "Valid Email",
            name: "email",
          },
          {
            type: "input",
            label: "Password",
            placeholder: "",
            validation: function(value) {
              // Add your password validation logic here
              return true; // Modify validation criteria as needed
            },
            errorMessage: "Invalid Password",
            successMessage: "Valid Password",
            name: "password",
          },
          {
            type: "checkbox",
            text: "I agree",
            value: "checkboxvalue",
          },
          {
            type: "button",
            text: "Register",
            submit: true,
            size: "medium",
            view: "flat",
            color: "primary"
          },
        ]
      });
      form.events.on("click", function(id,e){
        e.preventDefault();
        console.log(form.getValue());
        this.Login();
      });

    }

    Growth(){
      const layout1Content = document.getElementById('B1');
      layout1Content.innerHTML="";
layout1Content.innerHTML=`<h1 style="text-align:center";>Growth</h1>
<div id="chart"></div>
<br>
<br>
<h1 style="text-align:center";>Users By Month</h1>
<div id="scal"></div>`;


const config = {
  type: "bar",
  css:"char",
  scales: {
      "bottom": {
          text: "month"
      },
      "left": {
          maxTicks: 10,
          max: 100,
          min: 0
      }
  },
  series: [
      {
          id: "A",
          value: "company A",
          color: "#81C4E8",
          fill: "#81C4E8"
      },
      {
          id: "B",
          value: "company B",
          color: "#74A2E7",
          fill: "#74A2E7"
      },
      {
          id: "C",
          value: "PVS",
          color: "#5E83BA",
          fill: "#5E83BA"
      }
  ],
  legend: {
      series: ["A", "B", "C"],
      halign: "right",
      valign: "top"
  }
};
const chart=new dhx.Chart("chart",config);

const companiesData = [
  { month: "01", "company A": 20, "company B": 52, "PVS": 72, "company D": 34 },
  { month: "02", "company A": 5, "company B": 33, "PVS": 90, "company D": 55 },
  { month: "03", "company A": 55, "company B": 30, "PVS": 81, "company D": 66 },
  { month: "04", "company A": 30, "company B": 11, "PVS": 62, "company D": 22 },
  { month: "05", "company A": 27, "company B": 14, "PVS": 68, "company D": 70 },
  { month: "06", "company A": 32, "company B": 31, "PVS": 64, "company D": 50 },
];

chart.data.parse(companiesData);

const conf={
  type: "line",
  css: "char",
  scales: {
      "bottom": {
          text: "month",
          textTemplate: function (month) {
              return "m:" + month;
          }
      },
      "left": {
          maxTicks: 10,
          max: 100,
          min: 0
      }
  },
  series: [
      {
          id: "A",
          value: "PVS",
          color: "#5E83BA",
          strokeWidth: 2
      }
  ]
};

const scal=new dhx.Chart("scal",conf);
scal.data.parse(companiesData);

    }
}