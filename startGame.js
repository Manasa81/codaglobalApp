
var selectedList = JSON.parse(localStorage.getItem('selectedList'))
var overallList = JSON.parse(localStorage.getItem('overallList'))
var originalList=[].concat(selectedList)
if (selectedList.length === 0) {
    alert("please select players in the home page")
    window.location.href = "/"
} else {
    var x = Math.floor((Math.random() * 10) + 1);
    if (x === 10) {
        x = x - 1
    }

    document.getElementById("random").innerHTML += `<h1>YOUR BET IS "${x}"</h1>`
    display(selectedList,false)
}
function display(sl,filter) {
    let tab = ``
    for (let r of sl) {
        let index = parseInt(r[6])
        if (parseInt(r[1]) === x) {
            if (filter === false) {
                overallList[index]["Price"] = overallList[index]["Price"] * 2
                overallList[index]["fate"] = "WON"
                overallList[index]["winnings"] = overallList[index]["winnings"] + 1
                r[2] = overallList[index]["Price"]
            }
              tab+= `<div class="card" style="border:4px solid green";>

            <div class="image">
                <img
                    src="${r[3]}" >
            </div>
                <div class="title">
                    <p>
                        ${getName(r[0])}</p>
                        <p> <i class="fa fa-bullseye"></i>${r[1]} <img height="16px"src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0NiAwYy05MC45NjcgMC0xNjUgNzUuMDE5LTE2NSAxNjZzNzQuMDMzIDE2NSAxNjUgMTY1IDE2Ni03NC4wMTkgMTY2LTE2NS03NS4wMzMtMTY2LTE2Ni0xNjZ6bTAgMjI5LjYzMy02My42MzMtNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzIDYzLjYzM3oiIGZpbGw9IiNmZmRmNDAiLz48cGF0aCBkPSJtNTEyIDE2NmMwLTkwLjk4MS03NS4wMzMtMTY2LTE2Ni0xNjZ2MTAyLjM2N2w2My42MzMgNjMuNjMzLTYzLjYzMyA2My42MzN2MTAxLjM2N2M5MC45NjcgMCAxNjYtNzQuMDE5IDE2Ni0xNjV6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTQyMC4yMzggMTU1LjM5NS02My42MzMtNjMuNjMzYy0yLjkzLTIuOTMtNi43NjgtNC4zOTUtMTAuNjA1LTQuMzk1cy03LjY3NiAxLjQ2NS0xMC42MDUgNC4zOTVsLTYzLjYzMyA2My42MzNjLTUuODU5IDUuODU5LTUuODU5IDE1LjM1MiAwIDIxLjIxMWw2My42MzMgNjMuNjMzYzIuOTMgMi45MyA2Ljc2OCA0LjM5NSAxMC42MDUgNC4zOTVzNy42NzYtMS40NjUgMTAuNjA1LTQuMzk1bDYzLjYzMy02My42MzNjNS44Ni01Ljg2IDUuODYtMTUuMzUyIDAtMjEuMjExem0tNzQuMjM4IDUzLjAyNy00Mi40MjItNDIuNDIyIDQyLjQyMi00Mi40MjIgNDIuNDIyIDQyLjQyMnoiIGZpbGw9IiNmZmJlNDAiLz48cGF0aCBkPSJtNDIwLjIzOCAxNzYuNjA1YzUuODU5LTUuODU5IDUuODU5LTE1LjM1MiAwLTIxLjIxMWwtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXYzNi4yMTFsNDIuNDIyIDQyLjQyMy00Mi40MjIgNDIuNDIydjM2LjIxMWMzLjgzOCAwIDcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NXoiIGZpbGw9IiNmZjlmNDAiLz48cGF0aCBkPSJtMTY2IDE4MWMtOTAuOTY3IDAtMTY2IDc0LjAxOS0xNjYgMTY1czc1LjAzMyAxNjYgMTY2IDE2NiAxNjUtNzUuMDE5IDE2NS0xNjYtNzQuMDMzLTE2NS0xNjUtMTY1em0wIDIyOC42MzMtNjMuNjMzLTYzLjYzMyA2My42MzMtNjMuNjMzIDYzLjYzMyA2My42MzN6IiBmaWxsPSIjZmZkZjQwIi8+PHBhdGggZD0ibTMzMSAzNDZjMC05MC45ODEtNzQuMDMzLTE2NS0xNjUtMTY1djEwMS4zNjdsNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzdjEwMi4zNjdjOTAuOTY3IDAgMTY1LTc1LjAxOSAxNjUtMTY2eiIgZmlsbD0iI2ZmYmU0MCIvPjxwYXRoIGQ9Im0yNDAuMjM4IDMzNS4zOTUtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXMtNy42NzYgMS40NjUtMTAuNjA1IDQuMzk1bC02My42MzMgNjMuNjMzYy01Ljg1OSA1Ljg1OS01Ljg1OSAxNS4zNTIgMCAyMS4yMTFsNjMuNjMzIDYzLjYzM2MyLjkzIDIuOTMgNi43NjggNC4zOTUgMTAuNjA1IDQuMzk1czcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NWw2My42MzMtNjMuNjMzYzUuODYtNS44NiA1Ljg2LTE1LjM1MiAwLTIxLjIxMXptLTc0LjIzOCA1My4wMjctNDIuNDIyLTQyLjQyMiA0Mi40MjItNDIuNDIyIDQyLjQyMiA0Mi40MjJ6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTI0MC4yMzggMzU2LjYwNWM1Ljg1OS01Ljg1OSA1Ljg1OS0xNS4zNTIgMC0yMS4yMTFsLTYzLjYzMy02My42MzNjLTIuOTMtMi45My02Ljc2OC00LjM5NS0xMC42MDUtNC4zOTV2MzYuMjExbDQyLjQyMiA0Mi40MjMtNDIuNDIyIDQyLjQyMnYzNi4yMTFjMy44MzggMCA3LjY3Ni0xLjQ2NSAxMC42MDUtNC4zOTV6IiBmaWxsPSIjZmY5ZjQwIi8+PC9nPjwvc3ZnPg==" /> ${overallList[index]["Price"]}</i></p>
                        <p>Fate:"Win" winnings:${overallList[index]["winnings"]}</p>

                </div>

                    <div class="des"><button id=button1 style="background-color:green">WON</button></div>

            </div>`

        } else {
            tab += `<div class="card" style="border:1px solid red";>

            <div class="image">
                <img
                    src="${r[3]}">
            </div>
                <div class="title">
                        <p>
                        ${getName(r[0])}</p>
                        <p> <i class="fa fa-bullseye"></i>${r[1]} <img height="16px"src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0NiAwYy05MC45NjcgMC0xNjUgNzUuMDE5LTE2NSAxNjZzNzQuMDMzIDE2NSAxNjUgMTY1IDE2Ni03NC4wMTkgMTY2LTE2NS03NS4wMzMtMTY2LTE2Ni0xNjZ6bTAgMjI5LjYzMy02My42MzMtNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzIDYzLjYzM3oiIGZpbGw9IiNmZmRmNDAiLz48cGF0aCBkPSJtNTEyIDE2NmMwLTkwLjk4MS03NS4wMzMtMTY2LTE2Ni0xNjZ2MTAyLjM2N2w2My42MzMgNjMuNjMzLTYzLjYzMyA2My42MzN2MTAxLjM2N2M5MC45NjcgMCAxNjYtNzQuMDE5IDE2Ni0xNjV6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTQyMC4yMzggMTU1LjM5NS02My42MzMtNjMuNjMzYy0yLjkzLTIuOTMtNi43NjgtNC4zOTUtMTAuNjA1LTQuMzk1cy03LjY3NiAxLjQ2NS0xMC42MDUgNC4zOTVsLTYzLjYzMyA2My42MzNjLTUuODU5IDUuODU5LTUuODU5IDE1LjM1MiAwIDIxLjIxMWw2My42MzMgNjMuNjMzYzIuOTMgMi45MyA2Ljc2OCA0LjM5NSAxMC42MDUgNC4zOTVzNy42NzYtMS40NjUgMTAuNjA1LTQuMzk1bDYzLjYzMy02My42MzNjNS44Ni01Ljg2IDUuODYtMTUuMzUyIDAtMjEuMjExem0tNzQuMjM4IDUzLjAyNy00Mi40MjItNDIuNDIyIDQyLjQyMi00Mi40MjIgNDIuNDIyIDQyLjQyMnoiIGZpbGw9IiNmZmJlNDAiLz48cGF0aCBkPSJtNDIwLjIzOCAxNzYuNjA1YzUuODU5LTUuODU5IDUuODU5LTE1LjM1MiAwLTIxLjIxMWwtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXYzNi4yMTFsNDIuNDIyIDQyLjQyMy00Mi40MjIgNDIuNDIydjM2LjIxMWMzLjgzOCAwIDcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NXoiIGZpbGw9IiNmZjlmNDAiLz48cGF0aCBkPSJtMTY2IDE4MWMtOTAuOTY3IDAtMTY2IDc0LjAxOS0xNjYgMTY1czc1LjAzMyAxNjYgMTY2IDE2NiAxNjUtNzUuMDE5IDE2NS0xNjYtNzQuMDMzLTE2NS0xNjUtMTY1em0wIDIyOC42MzMtNjMuNjMzLTYzLjYzMyA2My42MzMtNjMuNjMzIDYzLjYzMyA2My42MzN6IiBmaWxsPSIjZmZkZjQwIi8+PHBhdGggZD0ibTMzMSAzNDZjMC05MC45ODEtNzQuMDMzLTE2NS0xNjUtMTY1djEwMS4zNjdsNjMuNjMzIDYzLjYzMy02My42MzMgNjMuNjMzdjEwMi4zNjdjOTAuOTY3IDAgMTY1LTc1LjAxOSAxNjUtMTY2eiIgZmlsbD0iI2ZmYmU0MCIvPjxwYXRoIGQ9Im0yNDAuMjM4IDMzNS4zOTUtNjMuNjMzLTYzLjYzM2MtMi45My0yLjkzLTYuNzY4LTQuMzk1LTEwLjYwNS00LjM5NXMtNy42NzYgMS40NjUtMTAuNjA1IDQuMzk1bC02My42MzMgNjMuNjMzYy01Ljg1OSA1Ljg1OS01Ljg1OSAxNS4zNTIgMCAyMS4yMTFsNjMuNjMzIDYzLjYzM2MyLjkzIDIuOTMgNi43NjggNC4zOTUgMTAuNjA1IDQuMzk1czcuNjc2LTEuNDY1IDEwLjYwNS00LjM5NWw2My42MzMtNjMuNjMzYzUuODYtNS44NiA1Ljg2LTE1LjM1MiAwLTIxLjIxMXptLTc0LjIzOCA1My4wMjctNDIuNDIyLTQyLjQyMiA0Mi40MjItNDIuNDIyIDQyLjQyMiA0Mi40MjJ6IiBmaWxsPSIjZmZiZTQwIi8+PHBhdGggZD0ibTI0MC4yMzggMzU2LjYwNWM1Ljg1OS01Ljg1OSA1Ljg1OS0xNS4zNTIgMC0yMS4yMTFsLTYzLjYzMy02My42MzNjLTIuOTMtMi45My02Ljc2OC00LjM5NS0xMC42MDUtNC4zOTV2MzYuMjExbDQyLjQyMiA0Mi40MjMtNDIuNDIyIDQyLjQyMnYzNi4yMTFjMy44MzggMCA3LjY3Ni0xLjQ2NSAxMC42MDUtNC4zOTV6IiBmaWxsPSIjZmY5ZjQwIi8+PC9nPjwvc3ZnPg==" /> ${overallList[index]["Price"]}</i></p>
                        <p>Fate:"Lost" winnings:${overallList[index]["winnings"]}</p>
                </div>

                    <div class="des"><button id=button2 style="background-color:red">LOST</button></div>

            </div>`

        }
    }
    document.getElementById("main").innerHTML = tab
    localStorage.setItem("overallList", JSON.stringify(overallList))


}
function resetAll() {
    display(originalList,true)
}
function sortByBet() {
    var sortedList = selectedList.sort((a, b) => (parseInt(a[1]) > parseInt(b[1])) ? 1 : -1)
    display(sortedList,true)
}
function sortByPrice() {
    var sortedList = selectedList.sort((a, b) => (parseInt(a[2]) > parseInt(b[2])) ? 1 : -1)
    display(sortedList,true)
}
function goBack() {
    // params = JSON.stringify(overallList);
    window.location.href = "/";
}
function search() {
    field = document.getElementById("search")
    val = field.value
    if (field != null && val != "") {
        var list = []
        for (let r of selectedList) {
            if (r[0].toLowerCase().includes(val.toLowerCase())) {
                list.push(r)
            }
        }
        display(list,true)
    }
}
function getName(name) {
    if (name.indexOf('_') >= 0) {
        name = name.split('_').join(' ');
        return name
    } else {
        return name
    }
}