//const rows = 15
//const columns = 15
function builder(rows, columns, exist)
{
    
    if(exist)
    {
        myGrid.remove()
    }
    myGrid = document.createElement("div")
    myGrid.setAttribute("id", "myGrid")
    myGrid.setAttribute("class", "grid")
    document.body.appendChild(myGrid)
    document.getElementById("myGrid").style.width = 32 * columns + "px"
    let board = Array(rows).fill(0).map(()=> Array(columns).fill(0))
    myGrid = document.getElementById("myGrid")
    if(myGrid) 
    {
        for(let i=0;i < rows;i++)
        {
            board[i] = []
            for(let j=0;j<columns;j++)
            {
                board[i][j] = document.createElement("div")
                board[i][j].setAttribute('id',i+"-"+j)
                board[i][j].setAttribute('class','square')
                board[i][j].setAttribute('onclick', "boardGenerator(); identifier(this)")
                myGrid.appendChild(board[i][j])
            }
            myGrid.innerHTML += "<br>"
        }
    }
}

const identifier = e => {
    console.log(e.id)
    let clickedCell = e.id
}
function sizer()
{
    let rows = 5//document.getElementById("height").value;
    let columns = 5//document.getElementById("width").value
    let exist = document.getElementById("0-0")
    builder(rows, columns, exist)
}
function boardGenerator()
{
    let rows = 5//document.getElementById("height").value;             //fix it so the values get taken once
    let columns = 5//document.getElementById("width").value
    for(let i=0;i < rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            let value = Math.floor(Math.random() * 2)
            console.log(value)
            document.getElementById(i+"-"+j).setAttribute('value',value)
            document.getElementById(i+"-"+j).innerHTML = value
            
        }
    }
    //identifier() // check target
}


//board[i][j].setAttribute

/*const funkcja = e => {
                    console.log(e.target.id)
                }
                document.getElementById("28734").addEventListener("click", funkcja)*/
// to do tego id wybierania z clickniętego