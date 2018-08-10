class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.neighbors = new Array()
    this.isAlive = false
  }

  findNeighbors(grid) {
    const cols = grid.length
    const rows = grid[0].length
    for (let i = -1; i < 2; ++i) {
      for (let j = -1; j < 2; ++j) {
        const col = (this.x + i + cols) % cols
        const row = (this.y + j + rows) % rows
        if (col !== this.x || row !== this.y) {
          this.neighbors.push(grid[col][row])
        }
      }
    }
  }

  shouldDie() {
    let livingNeighbors = this.neighbors.filter(cell => cell.isAlive)

    if (livingNeighbors.length < 2 || livingNeighbors.length > 3) {
      return true
    }

    return false
  }

  shouldBorn() {
    let livingNeighbors = this.neighbors.filter(cell => cell.isAlive)

    if (livingNeighbors.length === 3) {
      return true
    }

    return false
  }
}

export default Cell
