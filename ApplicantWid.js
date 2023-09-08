export class ApplicantWid{
    constructor(){
    }


    Home(){

    }

    details(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<div id="lay"></div>`;
        if (!window.formDataObject){
        const layout = new dhx.Layout("B1", {

            type: "space",
            css: "container",
            rows: [
                {
                    id: "С1",
                    html: `
          <center>  <h2>Applicant Details</h2></center>
            <div class="container">
 
<form id="form">
       <table class="customers">
         <tr>
             <th colspan="4">Personal Details</th>
              </tr>
            <tr>
                <td><label>Applicant ID:</label></td>
                <td><input type="text" name="ApplicantId" id="applicantId"  value="1236454" readonly></td>
                 <td><label>First Name:</label></td>
                  <td><input type="text" name="FirstName" value="Jhon" readonly></td>
                   </tr>
                   <tr>
                     <td><label>Last Name:</label></td>
                      <td><input type="text" name="LastName" value="Doe" readonly></td>
                       <td><label>Father's Name:</label></td>
                        <td><input type="text" name="FatherName" value="John mars"></td>
                          </tr>
                           <tr>
                          <td><label>Mother's Name:</label></td>
                        <td><input type="text" name="MotherName"value="Rose marry"></td>
                         <td><label>Date of Birth:</label></td>
                          <td><input type="date" name="DateOfBirth" value=2/4/2000/></td>
                          </tr>
                          <tr>
                             <td><label>Gender:</label></td>
                              <td>
                         <label><input type="radio" name="gender" value="male" /> Male</label>
                         <label><input type="radio" name="gender" value="female" /> Female</label>
                         <label><input type="radio" name="gender" value="other" /> Other</label>
                         </td>
                         <td><label>Address:</label></td>
                         <td><textarea id="address"></textarea></td>
                          </tr>
                           <tr>
                        <td><label>Aadhar Number:</label></td>
                         <td><input type="number" name="AadharNumber" /></td>
                         <td><label>Mobile Number:</label></td>
                          <td><input type="tel" name="MobileNumber" value="7849736258" readonly/></td>
                           </tr>
                            <tr>
                                  <td><label>Speaking Languages:</label></td>
                                  <td>
                    <label><input type="checkbox" name="SpeakingLanguages1" value="english" /> English</label>
                    <label><input type="checkbox" name="SpeakingLanguages2" value="telugu" /> Telugu</label>
                    <label><input type="checkbox" name="SpeakingLanguages3" value="hindi" /> Hindi</label>
                </td>
                <td><label>Hobbies:</label></td>
                <td>
                    <label><input type="checkbox" name="Hobbies1" value="reading" /> Reading</label>
                    <label><input type="checkbox" name="Hobbies2" value="sports" /> Sports</label>
                    <label><input type="checkbox" name="Hobbies3" value="cooking" /> Cooking</label>
                    <label><input type="checkbox" name="Hobbies4" value="gardening" /> Gardening</label>
                    <label><input type="checkbox" name="Hobbies5" value="music" /> Music</label>
                </td>
            </tr>
        </table>

        <table class="customers">

<tr>
           <th colspan="4">Educational Details</th>
           </tr>

<tr>
    <td>QUALIFICATION <br /><br /><br /><br /><br /><br /><br /></td>
    <td>
        <table class="customers">
            <tr>
                <label><td align="center"><b>Sl.No.</b></td></label>
                <label><td align="center"><b>Examination</b></td></label>
                <label><td align="center"><b>Board</b></td></label>
                <label><td align="center"><b>Percentage</b></td><label>
                <label><td align="center"><b>Year of Passing</b></td></label>
            </tr>
            <tr>
                <td>1</td>
                <td>Class X</td>
                <td><input type="text" name="ClassX_Board" maxlength="30" /></td>
                <td><input type="text" name="ClassX_Percentage" maxlength="30" /></td>
                <td><input type="text" name="ClassX_YrOfPassing" maxlength="30" /></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Intermediate</td>
                <td><input type="text" name="Intermediate_Board" maxlength="30" /></td>
                <td><input type="text" name="Intermediate_Percentage" maxlength="30" /></td>
                <td><input type="text" name="Intermediate_YrOfPassing" maxlength="30" /></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Graduation</td>
                <td><input type="text" name="Graduation_Board" maxlength="30" /></td>
                <td><input type="text" name="Graduation_Percentage" maxlength="30" /></td>
                <td><input type="text" name="Graduation_YrOfPassing" maxlength="30" /></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Masters</td>
                <td><input type="text" name="Masters_Board" maxlength="30" /></td>
                <td><input type="text" name="Masters_Percentage" maxlength="30" /></td>
                <td><input type="text" name="Masters_YrOfPassing" maxlength="30" /></td>
            </tr>
        </table>
    </td>
    </tr>
    </table>
            <!-- Professional Details -->

            <table class="customers">
                <tr>

        
<th colspan="4">Professional Details</th>
</tr>
<tr>
<td colspan="4">
    <div id="professionalDetails"></div>
    <button type="button" id="addprofessionaldetails">+ Add Professional Details</button>
</td>
</tr>
                <tr>
           <th colspan="4">Skill Set</th>
           </tr>
           <tr>
            <td colspan="4">
                <div id="skillSets">
                    </div>
     <button type="button"id="addSkills">+Add Skill Set</button>
     </td>
    </tr>
    <tr>

        
                                    <th colspan="4">Certifications Details</th>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <div id="certificationDetails"></div>
                                        <button type="button" id="addCertification">+ Add Certifications</button>
                                    </td>
                                </tr>


                                <table class="customers">

<tr>
           <th colspan="4">Upload Certificates</th>
           </tr>

                                <tr>
        <td colspan="4">
            <label for="sscCertificate"> SSC Certificate:</label><br><br>
            <input type="file" id="sscCertificate" name="sscCertificate" accept=".pdf, .doc, .docx">
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <label for="interCertificate"> Intermediate Certificate:</label><br><br>
            <input type="file" id="interCertificate" name="interCertificate" accept=".pdf, .doc, .docx">
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <label for="degreeCertificate"> Degree Certificate:</label><br><br>
            <input type="file" id="degreeCertificate" name="degreeCertificate" accept=".pdf, .doc, .docx">
        </td>
    </tr>
    <tr>
        <td colspan="4">
            <label for="Resume"> Resume:</label><br><br>
            <input type="file" id="mastersCertificate" name="mastersCertificate" accept=".pdf, .doc, .docx">
        </td>
    </tr>
    </table><br><br>
   <center> <button type="submit">Submit</button><center>
    </form>

</div>

 `,
         height:"content"
                },
            ]

        });
        const addSkillsButton = document.getElementById("addSkills");
        const skillSetsContainer = document.getElementById("skillSets");
let i=1;
    addSkillsButton.addEventListener("click", () => {
        const skillSet = document.createElement("div");
        skillSet.innerHTML = `
            Skill Name: <input type="text" name="skillName${i}" />
            Proficiency: <input type="number" name="proficiency${i}" />
            Areas of Interest: <input type="text" name="areaofinterest${i}"> 
            <button type="button" class="removeSkill">Remove</button><br><br>
        `;
        skillSetsContainer.appendChild(skillSet);

        const removeSkillButton = skillSet.querySelector(".removeSkill");
        removeSkillButton.addEventListener("click", () => {
            skillSetsContainer.removeChild(skillSet);
        });
        i++;
    });
    const addCertificationButton = document.getElementById("addCertification");
    const certificationDetailsContainer = document.getElementById("certificationDetails");
let j=1;
    addCertificationButton.addEventListener("click", () => {
        const certification = document.createElement("div");
        certification.innerHTML = `
            Course Name: <input type="text" name="course${j}" />
            Certificate Name: <input type="text" name="certificate${j}" />
            Year: <input type="number" name="year${j}" />
            <button type="button" class="removeCertification">Remove</button><br><br>
        `;
        certificationDetailsContainer.appendChild(certification);

        const removeCertificationButton = certification.querySelector(".removeCertification");
        removeCertificationButton.addEventListener("click", () => {
            certificationDetailsContainer.removeChild(certification);
        });
        j++;
    });
    const addProfessionalDetailsButton = document.getElementById("addprofessionaldetails");
const professionalDetailsContainer = document.getElementById("professionalDetails");

addProfessionalDetailsButton.addEventListener("click", () => {
    const professionalDetails = document.createElement("div");
    professionalDetails.innerHTML = `
        Job Title: <input type="text" name="jobTitle" />
        Company Name: <input type="text" name="companyName" />
        Location: <input type="text" name="location" />
        Employment Type:
        <select name="employmentType">
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
        </select>
        Start Date: <input type="date" name="startDate" />
        End Date: <input type="date" name="endDate" /><br>
        Experience: <input type="number" name="experience" />
        Role: <input type="text" name="role" />
        Projects Handled: <textarea name="projectsHandled"></textarea>
        <button type="button" class="removeProfessionalDetails">Remove</button><br><br>
    `;
    professionalDetailsContainer.appendChild(professionalDetails);

    const removeProfessionalDetailsButton = professionalDetails.querySelector(".removeProfessionalDetails");
    removeProfessionalDetailsButton.addEventListener("click", () => {
        professionalDetailsContainer.removeChild(professionalDetails);
    });
});

   
        // addEventListener("submit", (event) => {
        //     event.preventDefault();
        //     const form = document.getElementById("form");
        //     const formData = {};
        //     for (let i = 0; i < form.elements.length; i++) {

        //         const element = form.elements[i];

        //         if (element.tagName === 'INPUT') {

        //             formData[element.name] = element.value;
        //         }
        //     }

        //     console.log(formData);
        //    // window.formData=formData;
        //     console.log(window.applicantId.value);
        // });

        document.getElementById('form').addEventListener('submit', function (e) {
            e.preventDefault(); 
            console.log(e.target);
            const form = e.target;
            const formData = new FormData(form);
            const formDataObject = {};
            const labelObject={};


            formData.forEach(function (value, key) {
                formDataObject[key] = value;
            });

            //console.log(formDataObject);
            window.formDataObject = formDataObject;

            const formElements = form.elements;
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = true;
            }
        });
}
else{
    alert('Already Submitted the Details');
    B1.innerHTML=`<h1 style="margin-top:10%; margin-left:40%;">Already Submitted the Details<h1>`;
}
    }
    

view(){
    const B1=document.getElementById("B1");
    B1.innerHTML=`<div id="see"></div>    
    
`;

const applicationDataContainer = document.getElementById('see');
if (window.formDataObject) {
    const applicationHTML = document.createElement('div');
    applicationHTML.innerHTML = '<center><h2>Applicant Data</h2></center>';

    // Create a table element
    const table = document.createElement('table');
    for (const key in window.formDataObject) {
        if (window.formDataObject.hasOwnProperty(key)) {
            const row = document.createElement('tr');
            
            const keyCell = document.createElement('td');
            keyCell.textContent = key;

            const valueCell = document.createElement('td');
            valueCell.textContent = window.formDataObject[key];
           // valueCell.textContent = document.querySelector(`label[for="${element.id}"]`).textContent;

            //valueCell.textContent = document.querySelector(`[name="${window.formDataObject[key]}"]`).getAttribute('label');

            row.appendChild(keyCell);
            row.appendChild(valueCell);
            table.appendChild(row);
        }
    }
    applicationHTML.appendChild(table);
    applicationDataContainer.innerHTML = '';
    applicationDataContainer.appendChild(applicationHTML);
    applicationDataContainer.style.display = 'block';
}


else {
    alert('Please submit the details first.');
    applicationDataContainer.innerHTML=`<h1 style="margin-top:10%; margin-left:40%;"> Submit all details First<h1>`
}
    // const windowHtml = "<p>Submit the Details First.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://snippet.dhtmlx.com/codebase/data/common/img/01/developer-01.svg'>";
    // const dhxwindow = new dhx.Window({
    //     width: 440,
    //     height: 520,
    //     title: "Window",
    //     html: windowHtml,
    //     closable:true
    // });
    
   // dhxwindow.show();
}

uploadDetails(){
    const B1=document.getElementById("B1");
    B1.innerHTML=`        <h1 style="text-align:center;">Upload Details</h1>
    <div id="UD"></div>    
    
`;
    var myForm = new dhx.Form("UD", {
        css: "dhx_widget--bg_white dhx_widget--bordered",
height:"content",
        width:"35%",
        // height:"1500px",
        rows:[
            {
                name: "applicantId", // Set the name to "applicantId"
                type: "input",
                label: "Applicant ID:", // Label for the field
                labelPosition: "top",
               
                required: true,
                validation: function (value) {
                    // You can add validation rules for the Applicant ID if needed
                    return true; // Modify this validation as per your requirements
                },
                errorMessage: "Invalid Applicant ID", // Error message
            },
            {
                name: "userName",
                type: "input",
                label: "UserName:",
                labelPosition: "top",
                
                required: true, // Make the field required
                validation: function(value) {
                    return value && value.length >= 6; // Validate the input
                },
                errorMessage: "Username must be at least 6 characters long", // Error message
            },
            
            {
                name: "email",
                type: "input",
                label: "Email Address:",
                labelPosition: "top",
               
                required: true, // Make the field required
                validation: function(value) {
                    // Simple email validation regex
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                errorMessage: "Invalid email address", // Error message
            },
            
            // {
            //     name: "avatar",
            //     type: "avatar",
            //     size: "medium", // "small" | "medium" | "large" | number
            //     required: true,
            //     helpMessage: "Help information",
            //     labelWidth: 140,
            //     label: "Employee photo",
            //     labelPosition: "top",
            //     icon: "dxi dxi-person",
            //     placeholder: "Add a photo",
            //     alt: "Employee photo",
            //     value: {
            //         src: "C:\Users\HP\Pictures\Camera Roll\WIN_20230826_10_29_59_Pro.jpg",
            //     },
            //     target: "https://docs.dhtmlx.com/suite/backend/upload",
            // },
            
            {
                name: "simplevault",
                type: "simpleVault",
                helpMessage: "Help information",
                required: true,
                label: "Upload Profile/Other files",
                accept: ".pdf,.doc,.docx",
                labelPosition: "top",
                labelWidth: 140,
                target: "https://docs.dhtmlx.com/suite/backend/upload",
                value: [
                    {
                        id: "image",
    
                        name: "image.jpg",
    
                        status: "uploaded",
                    }
    
                ]  
                
            },
            
            {
                type: "button",
                text: "Submit",
                submit: true,
                size: "medium",
                view: "flat",
                color: "primary",
                align:"center",
                
            
        }
        ]
        
        
    });
}

status(){
    const B1=document.getElementById("B1");
    B1.innerHTML=`<div id="stat"></div>`;
    // var statusForm = new dhx.Form("stat", {
    //     container: "statusForm",
    //     width: "100%",
    //     rows: [
    //         {
    //             name: "applicantId",
    //             type: "input",
    //             label: "Applicant ID:",
    //             labelPosition: "top",
                
    //             required: true,
    //             validation: function (value) {
    //                 return true; // Modify this validation as per your requirements
    //             },
    //             errorMessage: "Invalid Applicant ID",
    //         },
    //         {
    //             name: "status",
    //             type: "input",
    //             label: "Status:",
    //             labelPosition: "top",
                
    //             value: "Verified", // Set the initial value to "Verified"
    //             readonly: true, // Make the field read-only
    //             required:true,
    //         },
    //         {
    //             name: "remarks",
    //             type: "input",
    //             label: "Remarks:",
    //             labelPosition: "top",
    //             height: 60,
    //             required: true,
    //         }
    //     ]
    // });
document.getElementById("stat").innerHTML=`
<center><h1>Status</h1></center>
<table style="width:60%; margin:auto;">
<tr>
<td>
<center><h3>ApplicantId</h3></center>
</td>
<td><center><h4>ITXH1534</h4></center></td>
</tr>
<tr>
<td>
<center><h3>Status</h3></center>
</td>
<td><center><h4>Failed</h4></center></td>
</tr>
<tr>
<td>
<center><h3>Remarks</h3></center>
</td>
<td><center><h4>Verification Failed at Educational Details</h4></center></td>
</tr>
`;
}
}