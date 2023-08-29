export class ApplicantWid{
    constructor(){
    }

    details(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<div id="lay"></div>`;

        const layout = new dhx.Layout("B1", {
            type: "space",
            rows: [
                {
                    id: "С1",
                    html: `
            <center><h1>Details</h1><center>
            <br>
            <div class="container">
 
<form id="form">
       <table class="customers">

       <tr>

       <th colspan="4">Personal Details</th>

     </tr>
            <tr>
                <td>Applicant ID:</td>

 

                <td><input type="text" name="applicantId" /></td>

 

                <td>First Name:</td>

 

                <td><input type="text" name="firstName" /></td>

 

            </tr>

 

            <tr>

 

                <td>Last Name:</td>

 

                <td><input type="text" name="lastName" /></td>


 

                <td>Father's Name:</td>

 

                <td><input type="text" name="fatherName" /></td>

 

            </tr>

 

            <tr>

 

                <td>Mother's Name:</td>

 

                <td><input type="text" name="motherName" /></td>
 

                <td>Date of Birth:</td>

 

                <td><input type="date" name="dob" /></td>

 

            </tr>

 

            <tr>

 

                <td>Gender:</td>

 

                <td>

 

                    <label><input type="radio" name="gender" value="male" /> Male</label>

 

                    <label><input type="radio" name="gender" value="female" /> Female</label>

 

                    <label><input type="radio" name="gender" value="other" /> Other</label>

 

                </td>

 

                <td>Address:</td>

 

                <td><textarea id="address"></textarea></td>

 

            </tr>

 

            <tr>

 

                <td>Aadhar Number:</td>

 

                <td><input type="number" name="aadharNumber" /></td>

 

                <td>Mobile Number:</td>

 

                <td><input type="tel" name="mobileNumber" /></td>

 

            </tr>

 

            <tr>

 

                <td>Speaking Languages:</td>

 

                <td>

 

                    <label><input type="checkbox" name="speakingLanguages" value="english" /> English</label>

 

                    <label><input type="checkbox" name="speakingLanguages" value="telugu" /> Telugu</label>

 

                    <label><input type="checkbox" name="speakingLanguages" value="hindi" /> Hindi</label>

 

                </td>

 

                <td>Hobbies:</td>

 

                <td>

 

                    <label><input type="checkbox" name="hobbies" value="reading" /> Reading</label>

 

                    <label><input type="checkbox" name="hobbies" value="sports" /> Sports</label>

 

                    <label><input type="checkbox" name="hobbies" value="cooking" /> Cooking</label>

 

                    <label><input type="checkbox" name="hobbies" value="gardening" /> Gardening</label>

 

                    <label><input type="checkbox" name="hobbies" value="music" /> Music</label>

 

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

 

                <td align="center"><b>Sl.No.</b></td>

 

                <td align="center"><b>Examination</b></td>

 

                <td align="center"><b>Board</b></td>

 

                <td align="center"><b>Percentage</b></td>

 

                <td align="center"><b>Year of Passing</b></td>

 

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

 

                <td>Job Title:</td>

 

                <td><input type="text" name="jobTitle" /></td>


 

                <td>Company Name:</td>

 

                <td><input type="text" name="companyName" /></td>

 

            </tr>

 

            <tr>

 

                <td>Location:</td>

 

                <td><input type="text" name="location" /></td>

 

                <td>Employment Type:</td>

 

                <td>

 

                    <select name="employmentType">

 

                        <option value="full-time">Full-time</option>

 

                        <option value="part-time">Part-time</option>

 

                        <option value="contract">Contract</option>

 

                    </select>

 

                </td>

 

            </tr>

 

            <tr>

 

                <td>Start Date:</td>

 

                <td><input type="date" name="startDate" /></td>

 

                <td>End Date:</td>

 

                <td><input type="date" name="endDate" /></td>

 

            </tr>

 

            <tr>

 

                <td>Experience:</td>

 

                <td><input type="number" name="experience" /></td>

 
                <td>Role:</td>

 

                <td><input type="text" name="role" /></td>

 

            </tr>

 

            <tr>

 

                <td>Projects Handled:</td>

 

                <td><textarea name="projectsHandled"></textarea></td>

 

            </tr>

 

           

 

                <tr>

 

           <th colspan="4">Skill Set</th>

 

           </tr>

 

           <tr>

 

 

 

     <td>Skill Name:</td>

 

 

 

        <td><input type="text" name="skillName"/></td>

 

 

 

        <td>Areas of Interest:</td>

 

 

 

        <td><textarea name="areaofinterest"></textarea></td>

 

    
        </tr>

 

    <tr>
    <td>Proficiancy:</td>
  <td><input type="number" name="proficiency"/></td>
    </tr>
    <tr>

    <th colspan="4">Certifications Details:</th>

    </tr>

    <tr>

    <td>Course Name:</td>

  <td><input type="text" name="course"/></td>

   <td>Certificate Name:</td>
   <td><input type="text" name="course"/></td>

 

    </tr>

 

    <tr>

 

 

 

    <td>Year:</td>

 

 

 

    <td><input type="number" name="year"/></td>

 

    </tr>

   

    </table>
    <br>
    <br>
   <center> <button type="submit">Submit</button><center>
    </form>

</div>

 `,
                    height:"content"
                },
            ]
        });
    }
}