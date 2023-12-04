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
                board[i][j].setAttribute('onclick', "boardGenerator(); identifier(this); revealer(this)")
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
    let bombAmount = 0
    let bombAmountGoal = ((rows * columns)*16)/100
    console.log(bombAmountGoal)
    for(let i=0;i < rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            document.getElementById(i+"-"+j).setAttribute("value", 0)
            //let value = Math.floor(Math.random() * 2)
            //console.log(value)
            //document.getElementById(i+"-"+j).setAttribute('value',value)
            //document.getElementById(elementID).innerHTML = value
            
        }
    }
    while(bombAmount != bombAmountGoal)
    {
        console.log(bombAmount, bombAmountGoal);
        let height = Math.floor(Math.random() * 4)
        let width = Math.floor(Math.random() * 4)
        console.log(document.getElementById(height+"-"+width).value) // fix this
        isBomb = parseInt(document.getElementById(height+"-"+width).value)
        if(isBomb == 0)
        {
            document.getElementById(height+"-"+width).value = 1
            bombAmount++
        }
    }
    [...document.getElementsByClassName("square")].map(e=>e.setAttribute('onclick', "identifier(this); revealer(this)"))
    //identifier() // check target
}
function revealer(currentElement)
{
    elementID = currentElement.id
    element = document.getElementById(elementID)
    console.log(element.value)
    element.innerHTML = elementID
}
/*
TO-DO
    --only one square gets revealed--
    generate bombs on only 16% of board
    always start on a 0
    bomb detection protocol(make the numbers show how many bombs around)
    make right click place "flags"
    death and win screen

*/





//board[i][j].setAttribute