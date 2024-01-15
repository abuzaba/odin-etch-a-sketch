/* Selects the CLASS type of container hence the (.)container */
const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
const sizeOfGrid = 16

const createGrid = (sizeOfGrid) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  for (let i = 0; i < sizeOfGrid; i++){
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j = 0; j < sizeOfGrid; j++){
      const widthAndHeight = 960/sizeOfGrid;
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      gridBox.addEventListener("mouseover", (event) => {
        gridBox.style.backgroundColor = '#3a647d';
      });
      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
}


resetButton.addEventListener('click', () => {
  let userCreateGridSize = Number(prompt('Please enter the size of grid you want (Maximum grid size is 100'));

  while(userCreateGridSize > 101){
  userCreateGridSize = Number(prompt('Please enter the size of grid you want (Maximum grid size is 100)'));

  }
  const wrapper = document.querySelector('.wrapper');

  if (!wrapper){
    createGrid(userCreateGridSize)
  } else {
    wrapper.remove();
  }
});
