import React, {useState, useEffect} from "react";
import "./Board.css";

const Board = () => {
  const [snake, setSnake] = useState([
    {x:2, y:0},
    {x:1, y:0},
    {x:0, y:0}
  ]);
const [direction, setDirection] = useState("RIGHT");
const[food,setFood] = useState({x:10, y:10});
const [score, setScore] = useState(0);
useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.keyCode === 37 && direction !== "RIGHT") {
          setDirection("LEFT");
        } else if (event.keyCode === 38 && direction !== "DOWN") {
          setDirection("UP");
        } else if (event.keyCode === 39 && direction !== "LEFT") {
          setDirection("RIGHT");
        } else if (event.keyCode === 40 && direction !== "UP") {
          setDirection("DOWN");
        }
      };
  
    document.addEventListener("keydown", handleKeyPress);
    const moveSnake = setInterval(() => {
      const head = { ...snake[0] };
      switch (direction) {
        case "RIGHT":
          head.x += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        default:
          break;
      }
  
      const newSnake = [head, ...snake.slice(0, -1)];
  
      // Check collision with boundaries
      if (
        head.x < 0 ||
        head.x >= 25 ||
        head.y < 0 ||
        head.y >= 25 ||
        isSnakeCollision(newSnake)
      ) {
        clearInterval(moveSnake);
        document.removeEventListener("keydown", handleKeyPress);
        alert("Game Over!");
      }
  
      // Check if snake eats the food
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore((prevScore) => prevScore + 1);
        newSnake.push({});
      }
  
      setSnake(newSnake);
    }, 200);

    return () => {
      clearInterval(moveSnake);
      document.removeEventListener("keydown", handleKeyPress);
    };
}, [direction, snake, food]);
   
 
const isSnakeCollision = (newSnake) => {
    const [head, ...body] = newSnake;
    for (const segment of body) {
      if (segment.x === head.x && segment.y === head.y) {
        return true;
      }
    }
    return false;
};
const generateFood = () =>{
    const x = Math.floor(Math.random() * 25);
    const y = Math.floor(Math.random() * 25);
    return{x,y};
}
  return(
    <div className="board">
        {snake.map((segment, index) => (
            <div
            key={index}
            className="snake-segment"
            style={{top:segment.y * 20, left:segment.x * 20}}
            />
        ))}
        <div className="food" style={{ top: food.y * 20, left: food.x * 20 }}></div>
    </div>
  )
}
export default Board;