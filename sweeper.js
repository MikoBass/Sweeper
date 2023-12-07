//const rows = 15
//const columns = 15
let board = []
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
    board = Array(rows).fill(0).map(()=> Array(columns).fill(0))
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
    let rows = 11//document.getElementById("height").value;
    let columns = 11//document.getElementById("width").value
    let exist = document.getElementById("0-0")
    builder(rows, columns, exist)
}
function boardGenerator(clicked)
{
    
    let rows = 11//document.getElementById("height").value;             //fix it so the values get taken once
    let columns = 11//document.getElementById("width").value
    let bombAmount = 0
    let bombAmountGoal = ((rows * columns)*16)/100
    let temp = 0
    for(let i=0;i < rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            document.getElementById(i+"-"+j).setAttribute("value", "n")
            //let value = Math.floor(Math.random() * 2)
            //console.log(value)
            //document.getElementById(i+"-"+j).setAttribute('value',value)
            //document.getElementById(elementID).innerHTML = value
            
        }
    }
    let a = 0
    while(bombAmount < bombAmountGoal)
    {
        a++
        let height = Math.floor(Math.random() * rows)
        let width = Math.floor(Math.random() * columns)
        const id = height+"-"+width;
        isBomb = document.getElementById(id).getAttribute('value')
        if(isBomb == "n" && clicked.id != id)
        {
            document.getElementById(id).setAttribute('value', "B")
            bombAmount++
        }
    }
    [...document.getElementsByClassName("square")].map(e=>e.setAttribute('onclick', "identifier(this); revealer(this)"))
    //identifier() // check target
}
function revealer(currentElement)
{
    let elementID = currentElement.id
    let idi = parseInt(elementID.split("-")[0])
    let idj = parseInt(elementID.split("-")[1])
    console.log(idi, idj)
    let element = document.getElementById(elementID)
    element.innerHTML = element.getAttribute('value')
    let bombs = 0
    for(let i = idi - 1;i < idi+2; i++)
    {
        for(let j = idj-1; j < idj+2; j++)
        {
            let checkedElement = document.getElementById(i+"-"+j)
            if(checkedElement)
            {
                if(checkedElement.getAttribute('value') == "n")
                {
                    checkedElement.innerHTML = checkedElement.getAttribute('value')
                }
                else if(checkedElement.getAttribute('value') == "B" && element.getAttribute('value') != "B")
                {

                    bombs += 1
                    element.setAttribute('value', bombs)
                    element.innerHTML = element.getAttribute('value')
                }
                bombs = 0
                let moreidi = i
                let moreidj = j
                element = document.getElementById(i+"-"+j)
                for(let k = moreidi - 1;k < moreidi+2; k++)
                {
                    for(let l = moreidj-1; l < moreidj+1; l++)
                    {
                        let checkedElement = document.getElementById(k+"-"+l)
                        if(checkedElement)
                        {
                            if(checkedElement.getAttribute('value') == "n")
                            {
                                checkedElement.innerHTML = checkedElement.getAttribute('value')
                            }
                            else if(checkedElement.getAttribute('value') == "B" && element.getAttribute('value') != "B")
                            {

                                bombs += 1
                                element.setAttribute('value', bombs)
                                element.innerHTML = element.getAttribute('value')//help napraw zobacz co sie psuje i to napraw bo wtf nie wiem
                            }
    
                        }
                    }
                }
                bombs = 0
            }
        }
    }
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