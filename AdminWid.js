export class AdminWid{
    constructor(){
    }

    viewA(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<center><h1 style="margin:35px;">Applicants</h1></center>
        <div id="lay"></div>`;

        const dataset = [
            {
                "sNo": "1",
                "applicantId": "1534",
                "applicantName": "D Vamshi Krishna",
                "status": "verified",
            },
            {
                "sNo": "2",
                "applicantId": "1496",
                "applicantName": "Manasa",
                "status": "pending",
            },
            {
                "sNo": "3",
                "applicantId": "0156",
                "applicantName": "Mohan",
                "status": "verified",
            },
            {
                "sNo": "4",
                "applicantId": "1535",
                "applicantName": "kalyan",
                "status": "Failed",
            },
        ];

        const grid = new dhx.Grid("lay", {
            autoWidth:100,
            height:"auto",
            margin:"auto",
            columns: [
                //width:250,width: 450,width: 450,width: 350, 
                {    id: "sNo", header: [{ text: "S.No", css: "bold-header" }] },
                {  id: "applicantId", header: [{ text: "Applicant Id", css: "bold-header" }] },
                {  id: "applicantName", header: [{ text: "Applicant Name", css: "bold-header" }] },
                { id: "status", header: [{ text: "Status", css: "bold-header" }], editable:true },
            ],
            data: dataset
        });
    }

    
    verifyA(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<center><h1 style="margin:35px;">To be Verified Applicants</h1></center>
        <div id="veri"></div>`;
        console.log("Hello");

        const gridData=[
            {sno:"1",ApplicantId:"A100",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show profile</a>",Remarks:"",dateofverify:""},
            {sno:"2",ApplicantId:"A101",ssc:"<a href='Resume.pdf' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"3",ApplicantId:"A102",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"4",ApplicantId:"A103",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"5",ApplicantId:"A104",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"6",ApplicantId:"A105",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"7",ApplicantId:"A106",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"8",ApplicantId:"A107",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"9",ApplicantId:"A108",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"10",ApplicantId:"A109",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"11",ApplicantId:"A110",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"12",ApplicantId:"A111",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"13",ApplicantId:"A112",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"14",ApplicantId:"A113",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},
            {sno:"15",ApplicantId:"A114",ssc:"<a href='newfile.txt' target='_blank'>Show Certificate</a>" ,inter:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",Degree:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",pg:"<a href='newfile.txt' target='_blank'>Show Certificate</a>",profile:"<a href='newfile.txt' target='_blank'>Show Profile</a>",Remarks:"",dateofverify:""},

        ];
        // const dataSet=new dhx.DataCollection();
        // dataSet.parse(gridData);
        const grid = new dhx.Grid("veri", {
            height:"auto",
           // width:"auto",
            columns: [
                { id: "sno",header: [{text:"S.NO"}], editable: false },
                { id: "ApplicantId", header: [{ text: "Applicant Id" }] },
                { id: "ssc",header: [{ text: "SSC Certificate" }],type:"link",htmlEnable:true},
                { id: "inter", header: [{ text: "Inter Certificate" }],type:"link",htmlEnable:true },
                { id: "Degree", header: [{ text: "Degree Certificate" }],type:"link",htmlEnable:true },
                { id: "pg", header: [{ text: "Pg Certificate" }],type:"link",htmlEnable:true },
                { id: "profile", header: [{ text: "Profile " }],htmlEnable:true},
                { id: "Remarks", header: [{ text: "Remarks" }],editable: true },
                { id: "dateofverify", header: [{ text: "Date of Verify" }],editable:true }
            ],
            editable: true,
            autoWidth: true,
            data:gridData
        });
    }

    viewReport(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<div id="arc"></div>`;
        const layout = new dhx.Layout("arc", {

            type: "line",
            height:"content",
            rows: [
                {
                    id:"VR1",
                    header: "View Verified Applicants",
                    collapsable: true,
                    height:"450"
                   

                    
                },
                {
                    id:"VR2",
                    header: "View Pending Applicants",
                    collapsable: true,
                    height:"450"
                },
                {
                    id:"VR3",
                    header: "View Failed Applicants",
                    collapsable: true,
                    height:"450"
                }
            ]
        });
        
        
        const grid1=new dhx.Grid(null,{
            columns:[
                { 
                    id: "Sno",
                    header: [{text:"S.NO"}], 
                    editable: false 
                },
                {
                    id:"AppId",
                    header:[{text:"Applicant Id"}]
                },
                {
                    id:"name",
                    header:[{text:"Name"}]
                }
            ],
            data:[
                {Sno:"1",AppId:"A1",name:"mohan"},
                {Sno:"2",AppId:"A2",name:"vamshi"},
                {Sno:"3",AppId:"A3",name:"manasa"},
                {Sno:"4",AppId:"A4",name:"pavithra"},
                {Sno:"5",AppId:"A5",name:"balu"},
                {Sno:"6",AppId:"A6",name:"raghu"},
            ]
        
        });
        const grid2=new dhx.Grid(null,{
        
            columns:[
                { 
                    id: "Sno",
                    header: [{text:"S.NO"}], 
                    editable: false 
                },
                {
                    id:"AppId",
                    header:[{text:"Applicant Id"}]
                },
                {
                    id:"name",
                    header:[{text:"Name"}]
                }
            ],
            data:[
                {Sno:"1",AppId:"A7",name:"prathap"},
                {Sno:"2",AppId:"A8",name:"bharathi"},
                {Sno:"3",AppId:"A9",name:"venkat"},
                {Sno:"4",AppId:"A10",name:"sai"},
                {Sno:"5",AppId:"A11",name:"ram"},
                {Sno:"6",AppId:"A12",name:"sita"},
            ]
        
        });
        const grid3=new dhx.Grid(null,{
        
            columns:[
                { 
                    id: "Sno",
                    header: [{text:"S.NO"}], 
                    editable: false 
                },
                {
                    id:"AppId",
                    header:[{text:"Applicant Id"}]
                },
                {
                    id:"name",
                    header:[{text:"Name"}]
                }
            ],
            data:[
                {Sno:"1",AppId:"A24",name:"bhanu"},
                {Sno:"2",AppId:"A25",name:"veeresh"},
                {Sno:"3",AppId:"A26",name:"manju"},
                {Sno:"4",AppId:"A27",name:"khalid"},
                {Sno:"5",AppId:"A28",name:"jagga"},
                {Sno:"6",AppId:"A29",name:"purushotham"},
            ]
        
        });
        layout.getCell("VR1").attach(grid1);
        layout.getCell("VR2").attach(grid2);
        layout.getCell("VR3").attach(grid3);
    }
}