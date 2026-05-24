// SHOW LOGIN PAGE

function showLogin() {

    document.getElementById(
        "registerPage"
    ).style.display = "none";

    document.getElementById(
        "loginPage"
    ).style.display = "flex";
}





// REGISTER USER

function registerUser() {

    let username =
    document.getElementById(
        "registerUsername"
    ).value;

    let password =
    document.getElementById(
        "registerPassword"
    ).value;

    if(username === "" || password === "") {

        alert("Please fill all fields");

        return;
    }

    alert("Registration Successful");

    showLogin();
}





// STUDENT LOGIN

function loginStudent() {

    let username =
    document.getElementById(
        "loginUsername"
    ).value;

    let password =
    document.getElementById(
        "loginPassword"
    ).value;

    if(username === "" || password === "") {

        alert("Enter Username & Password");

        return;
    }

    document.getElementById(
        "loginPage"
    ).style.display = "none";

    document.getElementById(
        "mainSystem"
    ).style.display = "flex";

    loadMenu();

    createRooms();

    startLiveData();

    createCharts();
}





// WARDEN LOGIN

function loginWarden() {

    let username =
    document.getElementById(
        "loginUsername"
    ).value;

    let password =
    document.getElementById(
        "loginPassword"
    ).value;

    if(username === "" || password === "") {

        alert("Enter Username & Password");

        return;
    }

    document.getElementById(
        "loginPage"
    ).style.display = "none";

    document.getElementById(
        "mainSystem"
    ).style.display = "flex";

    loadMenu();

    createRooms();

    startLiveData();

    createCharts();
}





// MENU ITEMS

function loadMenu() {

    let menu = document.getElementById(
        "menuList"
    );

    menu.innerHTML = `

    <li onclick="showPage('dashboardPage')">
    📊 Dashboard
    </li>

    <li onclick="showPage('hostelPage')">
    🏢 Hostel Monitoring
    </li>

    <li onclick="showPage('reportsPage')">
    🚨 Reports
    </li>

    `;
}





// SHOW PAGES

function showPage(pageId) {

    let pages =
    document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.style.display = "none";

    });

    document.getElementById(
        pageId
    ).style.display = "block";
}





// CREATE HOSTEL ROOMS

function createRooms() {

    createFloor(
        "groundFloor",
        1,
        10
    );

    createFloor(
        "floor1",
        101,
        110
    );

    createFloor(
        "floor2",
        201,
        210
    );

    createFloor(
        "floor3",
        301,
        310
    );

    createFloor(
        "floor4",
        401,
        410
    );

    createFloor(
        "floor5",
        501,
        510
    );
}





// CREATE FLOOR DATA

function createFloor(id, start, end) {

    let container =
    document.getElementById(id);

    container.innerHTML = "";

    for(let i = start; i <= end; i++) {

        let usage =
        Math.floor(
            Math.random() * 500
        );

        let status =
        usage > 400
        ? "High"
        : "Normal";

        container.innerHTML += `

        <div class="room-card">

        <h3>
        Room ${i}
        </h3>

        <p>
        Usage: ${usage} L
        </p>

        <p>
        Status: ${status}
        </p>

        </div>

        `;
    }
}





// LIVE DATA UPDATE

function startLiveData() {

    setInterval(function() {

        document.getElementById(
            "ph"
        ).innerText =
        (6 + Math.random() * 2)
        .toFixed(1);

        document.getElementById(
            "temp"
        ).innerText =
        Math.floor(
            25 + Math.random() * 10
        ) + "°C";

        document.getElementById(
            "turbidity"
        ).innerText =
        Math.floor(
            1 + Math.random() * 5
        ) + " NTU";

        document.getElementById(
            "usage"
        ).innerText =
        Math.floor(
            300 + Math.random() * 300
        ) + " L";

        document.getElementById(
            "prediction"
        ).innerText =
        Math.floor(
            400 + Math.random() * 200
        ) + " L";

        document.getElementById(
            "tankLevel"
        ).innerText =
        Math.floor(
            50 + Math.random() * 50
        ) + "%";

    }, 3000);
}





// REPORT SUBMISSION

function submitIssue() {

    let room =
    document.getElementById(
        "roomNumber"
    ).value;

    let issue =
    document.getElementById(
        "issueType"
    ).value;

    let text =
    document.getElementById(
        "issueText"
    ).value;

    if(room === "" || text === "") {

        alert("Fill all details");

        return;
    }

    let reportList =
    document.getElementById(
        "reportList"
    );

    reportList.innerHTML += `

    <div class="notification">

    🚨 Room ${room}
    - ${issue}

    <br><br>

    ${text}

    </div>

    `;

    alert("Issue Submitted");

    document.getElementById(
        "roomNumber"
    ).value = "";

    document.getElementById(
        "issueText"
    ).value = "";
}





// CHARTS

function createCharts() {

    let ctx1 =
    document.getElementById(
        "waterChart"
    ).getContext("2d");

    new Chart(ctx1, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],

            datasets: [{

                label:
                "Water Quality",

                data: [
                    7.1,
                    7.4,
                    7.0,
                    7.3,
                    7.5,
                    7.2
                ],

                borderWidth: 3

            }]
        }
    });





    let ctx2 =
    document.getElementById(
        "usageChart"
    ).getContext("2d");

    new Chart(ctx2, {

        type: "bar",

        data: {

            labels: [
                "GF",
                "F1",
                "F2",
                "F3",
                "F4",
                "F5"
            ],

            datasets: [{

                label:
                "Water Usage",

                data: [
                    500,
                    700,
                    650,
                    800,
                    750,
                    600
                ],

                borderWidth: 2

            }]
        }
    });
}
