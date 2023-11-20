const rows = 3
const columns = 3
board = []
value = 0
for(i=0;i < rows;i++)
{
    for(j=0;j<columns;j++)
    {
        board[i][j] = value
        value++
        document.write(board[i][j])
    }
}