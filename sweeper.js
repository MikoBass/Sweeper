const rows = 5
const columns = 5
let board = Array(rows).fill(0).map(()=> Array(columns).fill(0))
let value = 0
console.log(value)
for(i=0;i < rows;i++)
{
    board[i] = []
    board[i].appendChild(board)//dodaj appendchild tego na dole i potem to na dole do tego na górze
    console.log(value)
    for(j=0;j<columns;j++)
    {
        console.log(value)
        board[i][j] = document.createElement("div")
        board[i][j].setAttribute('id',i+"-"+j)
        board[i][j].setAttribute('class','squere')
        // board[i][j].setAttribute('value',value + "")
        board[i][j].innerHTML = value
        value++
    }
    document.write("<br>")
}



//board[i][j].setAttribute