import { Snake } from './Snake';
import { Position } from '../coordinates/Position';

import { it, expect } from "vitest";

it('should initialize on parameterized position', () => {
    // Arrange
    const initialRow = 2;
    const initialCol = 4;
    const initialPositions = [new Position(initialRow, initialCol)];
    const snake = new Snake(initialPositions);

    // Act
    const head = snake.getHead();

    // Assert
    expect(head.row()).toEqual(initialRow);
    expect(head.column()).toEqual(initialCol);
});

it('should use first initial position as tail and last initial position as head', () => {
    // Arrange
    const initialRowTail = 2;
    const initialColTail = 4;
    const initialTail = new Position(initialRowTail, initialColTail);
    const initialRowHead = 2;
    const initialColHead = 5;
    const initialHead = new Position(initialRowHead, initialColHead);
    const snake = new Snake([initialTail, initialHead]);

    // Act
    const tail = snake.moveTail();
    const head = snake.getHead();

    // Assert
    expect(tail.row()).toEqual(initialRowTail);
    expect(tail.column()).toEqual(initialColTail);
    expect(head.row()).toEqual(initialRowHead);
    expect(head.column()).toEqual(initialColHead);
});

it('should update head when moving', () => {
    // Arrange
    const initialRow = 2;
    const initialCol = 4;
    const initialPositions = [new Position(initialRow, initialCol)];
    const snake = new Snake(initialPositions);
    const newHeadRow = 2;
    const newHeadCol = 5;
    const newHead = new Position(newHeadRow, newHeadCol);

    // Act
    snake.moveHead(newHead);
    const currentHead = snake.getHead();

    // Assert
    expect(currentHead.row()).toEqual(newHeadRow);
    expect(currentHead.column()).toEqual(newHeadCol);

});

it('should behave as FIFO when moving', () => {
   // Arrange
   const initialRowTail = 2;
   const initialColTail = 4;
   const initialTail = new Position(initialRowTail, initialColTail);
   const initialRowMiddle = 2;
   const initialColMiddle = 5;
   const initialMiddle = new Position(initialRowMiddle, initialColMiddle);
   const initialRowHead = 2;
   const initialColHead = 6;
   const initialHead = new Position(initialRowHead, initialColHead);
   const snake = new Snake([initialTail, initialMiddle, initialHead]);

   const laterHeadRow = 1;
   const laterHeadCol = 6;
   const laterHead = new Position(laterHeadRow, laterHeadCol);
  
   // Act && Assert
   snake.moveHead(laterHead);

   const firstOut = snake.moveTail();
   expect(firstOut.row()).toEqual(initialRowTail);
   expect(firstOut.column()).toEqual(initialColTail);

   const secondOut = snake.moveTail();
   expect(secondOut.row()).toEqual(initialRowMiddle);
   expect(secondOut.column()).toEqual(initialColMiddle);

   const thirdOut = snake.moveTail();
   expect(thirdOut.row()).toEqual(initialRowHead);
   expect(thirdOut.column()).toEqual(initialColHead);

   const lastOut = snake.moveTail();
   expect(lastOut.row()).toEqual(laterHeadRow);
   expect(lastOut.column()).toEqual(laterHeadCol);
});
