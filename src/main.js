import Cell from "./modules/Cell";

const cols = 10
const rows = 10
let grid = new Array(cols)

for (let x = 0; x < cols; ++x) {
  grid[x] = new Array(rows)
  for (let y = 0; y < rows; ++y) {
    grid[x][y] = new Cell(x, y)
  }
}

for (let x = 0; x < cols; ++x) {
  for (let y = 0; y < rows; ++y) {
    grid[x][y].findNeighbors(grid)
  }
}

// Simulation
grid[5][4].isAlive = true
grid[4][5].isAlive = true
grid[5][5].isAlive = true
grid[6][5].isAlive = true
grid[5][6].isAlive = true

let next = new Array(cols)

for (let x = 0; x < cols; ++x) {
  next[x] = new Array(rows)
  for (let y = 0; y < rows; ++y) {
    next[x][y] = new Cell(x, y)
  }
}

console.log(grid)

for (let x in grid) {
  for (let y in grid[x]) {
    let cell = grid[x][y]
    next[x][y].isAlive = cell.isAlive

    if (cell.isAlive === true && cell.shouldDie()) {
      next[x][y].isAlive = false
      console.log(`x: ${x}, y: ${y}, is alive: ${cell.isAlive}, Should die ${cell.shouldDie()}`)
    }
    
    if (cell.isAlive === false && cell.shouldBorn()) {
      next[x][y].isAlive = true
      console.log(`x: ${x}, y: ${y}, is alive: ${cell.isAlive}, Should born ${cell.shouldBorn()}`)
    }
  }
}

grid = next

console.log(grid)
