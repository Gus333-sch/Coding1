const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const size = 10;
const cells = canvas.width / size;

let snake;
let direction;
let food;
let score;
let timer;

function startGame() {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 0, y: 0 };
  score = 0;
  document.getElementById("snakeScore").innerText = "Score: 0";
  placeFood();

  clearInterval(timer);
  timer = setInterval(update, 120);
  draw();
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * cells),
    y: Math.floor(Math.random() * cells),
  };

  // try again if the food landed on the snake
  for (const part of snake) {
    if (part.x === food.x && part.y === food.y) {
      placeFood();
      return;
    }
  }
}

function update() {
  // wait until the player presses a key
  if (direction.x === 0 && direction.y === 0) return;

  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  const hitWall = head.x < 0 || head.y < 0 || head.x >= cells || head.y >= cells;
  const hitSelf = snake.some(part => part.x === head.x && part.y === head.y);

  if (hitWall || hitSelf) {
    gameOver();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("snakeScore").innerText = "Score: " + score;
    placeFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = "#0F172A";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "orange";
  ctx.fillRect(food.x * size, food.y * size, size, size);

  ctx.fillStyle = "#37ad3f";
  for (const part of snake) {
    ctx.fillRect(part.x * size, part.y * size, size - 1, size - 1);
  }
}

function gameOver() {
  clearInterval(timer);
  ctx.fillStyle = "snow";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Game over", canvas.width / 2, canvas.height / 2);
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  let newX = direction.x;
  let newY = direction.y;

  if (key === "ArrowUp" || key === "w") { newX = 0; newY = -1; }
  else if (key === "ArrowDown" || key === "s") { newX = 0; newY = 1; }
  else if (key === "ArrowLeft" || key === "a") { newX = -1; newY = 0; }
  else if (key === "ArrowRight" || key === "d") { newX = 1; newY = 0; }
  else return;

  // stop the page from scrolling when using the arrow keys
  event.preventDefault();

  // the snake can't turn straight back into itself
  if (snake.length > 1 && newX === -direction.x && newY === -direction.y) return;

  direction = { x: newX, y: newY };
});

startGame();
