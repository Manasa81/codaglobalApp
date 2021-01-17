const api_url =
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json";
var selectedList = []

async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
        if (data[i].Name.indexOf(' ') >= 0) {
            data[i].Name = data[i]["Name"].split(' ').join('_');
        }
        data[i].winnings = 0;
        data[i].fate = "NA"
        data[i].id=i
    }
    overallList = data
    console.log(overallList);
    this.peristData()
    show(data);
}
getapi(api_url)

// Function to define innerHTML for HTML table
async function show(data) {
    // document.getElementById("loading").innerHTML = ""
    let tab =
        `<thead>
        <tr>
        <th>select</th>
          <th>Player Name</th>
          <th>Avatar</th>
          <th>Bet</th>
          <th>Price</th>
         </tr></thead>
         <tbody>`;

    // Loop to access all rows
    for (let r of data) {
        tab += `<tr height="50%">
        <td>
        <input type="checkbox" id="myCheck" name=${this} value=${[r.Name, r.Bet, r.Price, r["Profile Image"],r["winnings"],r["fate"],r["id"]]} onclick='handleClick(this);'/>
        </td>
    <td>${getName(r.Name)} </td>
    <td>
    <span style="display:inline;"><img height="20%" src="${r["Profile Image"]}"></span></td>
    <td>${r.Bet} </td>
    <td>${r.Price}</td>
</tr>`;
    }


    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab + `</tbody>`;



}
function getName(name) {
    if (name.indexOf('_') >= 0) {
        name = name.split('_').join(' ');
        return name
    } else {
        return name
    }
}
function handleClick(cb) {
    let details = cb.value.split(",")
    if (cb.checked === true) {

        selectedList.push(details)
    } else {
        var filtered = selectedList.filter(function (el) { return el[3] != details[3]; });
        selectedList = filtered;
    }
    this.peristData();
    let tab = ``
    for (let r of selectedList) {
        tab += `<thead>

            <tr>
            <th><img height="30%";width:50px; src="${r[3]}" ></th>
            <th style="height:20%;width:200px">${r[0]}</th>
            <th style="height:20%;width:10px" ><img height="16px"src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0NiAwYy05MC45NjcgMC0xNjUgNzUuMDE5LTE2NSAxNjZzNzQuMDMzIDE2NSAxNjUgMTY1IDE2Ni03NC4wMTkgMTY2LTE2NS03NS4wMzMtMTY2LTE2Ni0xNjZ6bTAgMjI5LjYzMy02My42MzMtNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzIDYzLjYzM3oiIGZpbGw9IiNmZmRmNDAiLz48cGF0aCBkPSJtNTEyIDE2NmMwLTkwLjk4MS03NS4wMzMtMTY2LTE2Ni0xNjZ2MTAyLjM2N2w2My42MzMgNjMuNjMzLTYzLjYzMyA2My42MzN2MTAxLjM2N2M5MC45NjcgMCAxNjYtNzQuMDE5IDE2Ni0xNjV6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTQyMC4yMzggMTU1LjM5NS02My42MzMtNjMuNjMzYy0yLjkzLTIuOTMtNi43NjgtNC4zOTUtMTAuNjA1LTQuMzk1cy03LjY3NiAxLjQ2NS0xMC42MDUgNC4zOTVsLTYzLjYzMyA2My42MzNjLTUuODU5IDUuODU5LTUuODU5IDE1LjM1MiAwIDIxLjIxMWw2My42MzMgNjMuNjMzYzIuOTMgMi45MyA2Ljc2OCA0LjM5NSAxMC42MDUgNC4zOTVzNy42NzYtMS40NjUgMTAuNjA1LTQuMzk1bDYzLjYzMy02My42MzNjNS44Ni01Ljg2IDUuODYtMTUuMzUyIDAtMjEuMjExem0tNzQuMjM4IDUzLjAyNy00Mi40MjItNDIuNDIyIDQyLjQyMi00Mi40MjIgNDIuNDIyIDQyLjQyMnoiIGZpbGw9IiNmZmJlNDAiLz48cGF0aCBkPSJtNDIwLjIzOCAxNzYuNjA1YzUuODU5LTUuODU5IDUuODU5LTE1LjM1MiAwLTIxLjIxMWwtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXYzNi4yMTFsNDIuNDIyIDQyLjQyMy00Mi40MjIgNDIuNDIydjM2LjIxMWMzLjgzOCAwIDcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NXoiIGZpbGw9IiNmZjlmNDAiLz48cGF0aCBkPSJtMTY2IDE4MWMtOTAuOTY3IDAtMTY2IDc0LjAxOS0xNjYgMTY1czc1LjAzMyAxNjYgMTY2IDE2NiAxNjUtNzUuMDE5IDE2NS0xNjYtNzQuMDMzLTE2NS0xNjUtMTY1em0wIDIyOC42MzMtNjMuNjMzLTYzLjYzMyA2My42MzMtNjMuNjMzIDYzLjYzMyA2My42MzN6IiBmaWxsPSIjZmZkZjQwIi8+PHBhdGggZD0ibTMzMSAzNDZjMC05MC45ODEtNzQuMDMzLTE2NS0xNjUtMTY1djEwMS4zNjdsNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzdjEwMi4zNjdjOTAuOTY3IDAgMTY1LTc1LjAxOSAxNjUtMTY2eiIgZmlsbD0iI2ZmYmU0MCIvPjxwYXRoIGQ9Im0yNDAuMjM4IDMzNS4zOTUtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXMtNy42NzYgMS40NjUtMTAuNjA1IDQuMzk1bC02My42MzMgNjMuNjMzYy01Ljg1OSA1Ljg1OS01Ljg1OSAxNS4zNTIgMCAyMS4yMTFsNjMuNjMzIDYzLjYzM2MyLjkzIDIuOTMgNi43NjggNC4zOTUgMTAuNjA1IDQuMzk1czcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NWw2My42MzMtNjMuNjMzYzUuODYtNS44NiA1Ljg2LTE1LjM1MiAwLTIxLjIxMXptLTc0LjIzOCA1My4wMjctNDIuNDIyLTQyLjQyMiA0Mi40MjItNDIuNDIyIDQyLjQyMiA0Mi40MjJ6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTI0MC4yMzggMzU2LjYwNWM1Ljg1OS01Ljg1OSA1Ljg1OS0xNS4zNTIgMC0yMS4yMTFsLTYzLjYzMy02My42MzNjLTIuOTMtMi45My02Ljc2OC00LjM5NS0xMC42MDUtNC4zOTV2MzYuMjExbDQyLjQyMiA0Mi40MjMtNDIuNDIyIDQyLjQyMnYzNi4yMTFjMy44MzggMCA3LjY3Ni0xLjQ2NSAxMC42MDUtNC4zOTV6IiBmaWxsPSIjZmY5ZjQwIi8+PC9nPjwvc3ZnPg==" />${r[2]}</th>

            </tr>
            </thead>
            <tbody>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td></td>
            <td><i class="fa fa-bullseye"></i>${r[1]}</td>
            <td></td>
            </tr>
            </tbody>`

    }
    document.getElementById("selected").innerHTML = tab

}

function resetAll() {
    location.reload();
}
function sortByBet() {
    var sortedList = overallList.sort((a, b) => (parseInt(a.Bet) > parseInt(b.Bet)) ? 1 : -1)
    show(sortedList)
}
function sortByPrice() {
    var sortedList = overallList.sort((a, b) => (parseInt(a.Price) > parseInt(b.Price)) ? 1 : -1)
    show(sortedList)
}


function start() {
    if (selectedList.length > 9) {
        let len=selectedList.length-9
        alert("You shouldn't select more than 9 players.Please uncheck "+len+" players")
    } else {
        window.location.href = "start.html";
    }
}


function peristData() {

    localStorage.setItem("overallList", JSON.stringify(overallList))
    localStorage.setItem("selectedList",JSON.stringify(selectedList))
}
