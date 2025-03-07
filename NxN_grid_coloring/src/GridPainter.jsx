import { useState } from "react";

const GridPainter = ({ n = 5 }) => {
  const colors = ["red", "blue", "green", "yellow", "purple"]; // Color palette
  const [selectedColor, setSelectedColor] = useState(null);
  const [grid, setGrid] = useState(
    Array(n)
      .fill(null)
      .map(() => Array(n).fill(null))
  );

  const handleCellClick = (row, col) => {
    if (!selectedColor) return;
    const newGrid = [...grid];
    newGrid[row][col] = selectedColor;
    setGrid(newGrid);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Color Palette */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              width: "50px",
              height: "50px",
              background: color,
              border: selectedColor === color ? "3px solid black" : "1px solid gray",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${n}, 50px)`,
          gap: "5px",
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cellColor, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              style={{
                width: "50px",
                height: "50px",
                background: cellColor || "white",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GridPainter;
