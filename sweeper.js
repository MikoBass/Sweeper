const rows = 15
const columns = 15
document.getElementById("myGrid").style.width = 32 * columns + "px"
let board = Array(rows).fill(0).map(()=> Array(columns).fill(0))
myGrid = document.getElementById("myGrid")
if(myGrid) {
    for(let i=0;i < rows;i++)
    {
        board[i] = []
            for(let j=0;j<columns;j++)
            {
                let value = Math.floor(Math.random() * 2)
                console.log(value)
                board[i][j] = document.createElement("div")
                board[i][j].setAttribute('id',i+"-"+j)
                board[i][j].setAttribute('class','square')
                board[i][j].innerHTML = value
                myGrid.appendChild(board[i][j])
            }
            myGrid.innerHTML += "<br>"
        }
}



//board[i][j].setAttribute