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
                board[i][j].setAttribute('onclick', "boardGenerator(this); identifier(this); revealer(this)")
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
function boardGenerator(clicked)
{
    
    let rows = 5//document.getElementById("height").value;             //fix it so the values get taken once
    let columns = 5//document.getElementById("width").value
    let bombAmount = 0
    let bombAmountGoal = ((rows * columns)*16)/100
    let temp = 0
    console.log(bombAmountGoal)
    for(let i=0;i < rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            document.getElementById(i+"-"+j).setAttribute("value", temp)
            //let value = Math.floor(Math.random() * 2)
            //console.log(value)
            //document.getElementById(i+"-"+j).setAttribute('value',value)
            //document.getElementById(elementID).innerHTML = value
            
        }
    }
    let a = 0
    while(bombAmount != bombAmountGoal)
    {
        console.log(a)
        a++
        console.log(bombAmount, bombAmountGoal, "asd");
        let height = Math.floor(Math.random() * 4)
        let width = Math.floor(Math.random() * 4)
        const id = height+"-"+width;
        isBomb = parseInt(document.getElementById(id).getAttribute('value'))
        if(isBomb == 0 && clicked.id != id)
        {
            document.getElementById(id).setAttribute('value', 1)
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
    element.innerHTML = element.getAttribute('value')
}
/*
TO-DO
    --only one square gets revealed--
   --generate bombs on only 16% of board--
    --always start on a 0--
    bomb detection protocol(make the numbers show how many bombs around)
    make right click place "flags"
    death and win screen

*/





//board[i][j].setAttribute