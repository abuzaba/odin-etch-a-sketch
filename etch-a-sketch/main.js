
const resetButton = document.querySelector('button');

/* Selects the CLASS type of container hence the (.)container */
const container = document.querySelector('.container');
const sizeOfGrid = 16;

const createGrid = (sizeOfGrid) => {
  for (let i = 0; i < sizeOfGrid; i++){
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < sizeOfGrid; j++){
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
}

createGrid(sizeOfGrid);
