// SHOW LOGIN

function showLogin(){

document.getElementById(
"registerPage"
).style.display="none";

document.getElementById(
"loginPage"
).style.display="flex";

}



// REGISTER

function registerUser(){

let username=
document.getElementById(
"registerUsername"
).value;

let password=
document.getElementById(
"registerPassword"
).value;

if(username==="" || password===""){

alert("Fill all fields");

return;
}

localStorage.setItem(
"waterUser",
username
);

localStorage.setItem(
"waterPass",
password
);

alert("Registration Successful");

showLogin();

}



// STUDENT LOGIN

function loginStudent(){

let username=
document.getElementById(
"loginUsername"
).value;

let password=
document.getElementById(
"loginPassword"
).value;

let savedUser=
localStorage.getItem(
"waterUser"
);

let savedPass=
localStorage.getItem(
"waterPass"
);

if(username===savedUser &&
password===savedPass){

document.getElementById(
"loginPage"
).style.display="none";

document.getElementById(
"mainSystem"
).style.display="block";

document.getElementById(
"menuList"
).innerHTML=`

<li onclick="showPage('dashboard')">
📊 Dashboard
</li>

<li onclick="showPage('reports')">
🚨 Report Issue
</li>

`;

}else{

alert("Wrong Login");
}
}



// WARDEN LOGIN

function loginWarden(){

let pass=
prompt(
"Enter Warden Password"
);

if(pass==="warden123"){

document.getElementById(
"loginPage"
).style.display="none";

document.getElementById(
"mainSystem"
).style.display="block";

document.getElementById(
"menuList"
).innerHTML=`

<li onclick="showPage('dashboard')">
📊 Dashboard
</li>

<li onclick="showPage('hostel')">
🏢 Hostel Monitoring
</li>

<li onclick="showPage('reports')">
🚨 Student Reports
</li>

`;

}else{

alert("Wrong Password");
}
}



// PAGE NAVIGATION

function showPage(page){

document.getElementById(
"dashboardPage"
).style.display="none";

document.getElementById(
"hostelPage"
).style.display="none";

document.getElementById(
"reportsPage"
).style.display="none";

if(page==="dashboard"){

document.getElementById(
"dashboardPage"
).style.display="block";
}

if(page==="hostel"){

document.getElementById(
"hostelPage"
).style.display="block";
}

if(page==="reports"){

document.getElementById(
"reportsPage"
).style.display="block";
}
}



// REPORT ISSUE

function submitIssue(){

let room=
document.getElementById(
"roomNumber"
).value;

let issue=
document.getElementById(
"issueText"
).value;

let type=
document.getElementById(
"issueType"
).value;

if(room==="" || issue===""){

alert("Fill all details");

return;
}

let div=
document.createElement("div");

div.className="room-card";

div.innerHTML=`

<h3>
🚨 Room ${room}
</h3>

<p>
Issue Type:
${type}
</p>

<p>
${issue}
</p>

`;

document.getElementById(
"reportList"
).appendChild(div);

alert("Emergency Report Sent");

document.getElementById(
"roomNumber"
).value="";

document.getElementById(
"issueText"
).value="";
}



// WATER CHART

const waterCtx=
document.getElementById(
'waterChart'
);

new Chart(waterCtx,{

type:'line',

data:{

labels:[
'Mon',
'Tue',
'Wed',
'Thu',
'Fri',
'Sat',
'Sun'
],

datasets:[{

label:'Water Quality',

data:[
7,
7.2,
6.9,
7.5,
7.1,
7.3,
7
],

borderColor:'#22d3ee',

borderWidth:3,

tension:0.4
}]
}
});



// USAGE CHART

const usageCtx=
document.getElementById(
'usageChart'
);

new Chart(usageCtx,{

type:'bar',

data:{

labels:[
'Mon',
'Tue',
'Wed',
'Thu',
'Fri',
'Sat',
'Sun'
],

datasets:[{

label:'Water Usage',

data:[
300,
400,
350,
500,
450,
420,
390
],

backgroundColor:'#38bdf8'
}]
}
});



// LIVE DATA

function updateData(){

let ph=
(6+Math.random()*3)
.toFixed(1);

let temp=
Math.floor(
25+Math.random()*10
);

let turbidity=
Math.floor(
1+Math.random()*10
);

let usage=
Math.floor(
300+Math.random()*400
);

let prediction=
Math.floor(
350+Math.random()*300
);

let tank=
Math.floor(
40+Math.random()*60
);

document.getElementById(
"ph"
).innerHTML=ph;

document.getElementById(
"temp"
).innerHTML=temp+"°C";

document.getElementById(
"turbidity"
).innerHTML=turbidity+" NTU";

document.getElementById(
"usage"
).innerHTML=usage+" L";

document.getElementById(
"prediction"
).innerHTML=prediction+" L";

document.getElementById(
"tankLevel"
).innerHTML=tank+"%";



// LEAKAGE

if(usage>550){

document.getElementById(
"leakage"
).innerHTML="High";

document.getElementById(
"aiAlert"
).innerHTML=
"Leakage Suspected";

}else{

document.getElementById(
"leakage"
).innerHTML="Low";

document.getElementById(
"aiAlert"
).innerHTML=
"Normal";
}



// MOTOR STATUS

if(tank<50){

document.getElementById(
"motorStatus"
).innerHTML="ON";

}else{

document.getElementById(
"motorStatus"
).innerHTML="OFF";
}



// WATER QUALITY

if(ph<6.5 || ph>8.5){

document.getElementById(
"qualityStatus"
).innerHTML="UNSAFE";

}else{

document.getElementById(
"qualityStatus"
).innerHTML="SAFE";
}

}

setInterval(updateData,3000);



// HOSTEL ROOM GENERATOR

function generateFloor(
floorId,
startRoom
){

const floor=
document.getElementById(
floorId
);

floor.innerHTML="";

for(let i=0;i<20;i++){

let roomNo=
startRoom+i;

let usage=
Math.floor(
80+Math.random()*700
);

let ph=
(6+Math.random()*3)
.toFixed(1);

let status=
"Normal";

let statusClass=
"normal-status";

if(usage>500){

status="High Usage";

statusClass=
"high-status";
}

if(usage>650){

status=
"Leakage Suspected";

statusClass=
"leakage-status";
}

let room=
document.createElement("div");

room.className=
"room-card";

room.innerHTML=`

<h3>
Room ${roomNo}
</h3>

<p>
Usage:
${usage} L
</p>

<p>
pH Level:
${ph}
</p>

<span class="
room-status
${statusClass}
">

${status}

</span>
`;

floor.appendChild(room);
}
}



// GENERATE FLOORS

generateFloor(
"groundFloor",
1
);

generateFloor(
"floor1",
101
);

generateFloor(
"floor2",
201
);

generateFloor(
"floor3",
301
);

generateFloor(
"floor4",
401
);

generateFloor(
"floor5",
501
);



// AUTO UPDATE FLOORS

setInterval(()=>{

generateFloor(
"groundFloor",
1
);

generateFloor(
"floor1",
101
);

generateFloor(
"floor2",
201
);

generateFloor(
"floor3",
301
);

generateFloor(
"floor4",
401
);

generateFloor(
"floor5",
501
);

},5000);
