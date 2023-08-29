export class AdminWid{
    constructor(){
    }

    viewA(){
        const B1=document.getElementById("B1");
        B1.innerHTML=`<div id="lay"></div>`;

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
            height:"auto",
            columns: [
                { width:250, id: "sNo", header: [{ text: "S.No" }] },
                { width: 450, id: "applicantId", header: [{ text: "Applicant Id" }] },
                { width: 450, id: "applicantName", header: [{ text: "Applicant Name" }] },
                { width: 350, id: "status", header: [{ text: "Status" }] },
            ],
            data: dataset
        });
    }
}