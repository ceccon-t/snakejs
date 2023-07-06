import { Displacement } from "./Displacement";

import { it, expect } from "vitest";

it('should remember the row', () => {
    // Arrange
    const expectedRow = 2;
    const disp = new Displacement(expectedRow, 1);

    // Act
    const actualRow = disp.row();

    // Assert
    expect(actualRow).toEqual(expectedRow);
});

it('should remember the column', () => {
    // Arrange
    const expectedCol = 5;
    const disp = new Displacement(1, expectedCol);

    // Act
    const actualCol = disp.column();

    // Assert
    expect(actualCol).toEqual(expectedCol);
});

it('should allow no displacement on a particular axis', () => {
    // Arrange
    const expectedRow = 0;
    const expectedCol = 0;
    const disp = new Displacement(expectedRow, expectedCol);

    // Act
    const actualRow = disp.row();
    const actualCol = disp.column();

    // Assert
    expect(actualRow).toEqual(expectedRow);
    expect(actualCol).toEqual(expectedCol);
});

it('should allow displacements in negative direction', () => {
    // Arrange
    const expectedRow = -2;
    const expectedCol = -1;
    const disp = new Displacement(expectedRow, expectedCol);

    // Act
    const actualRow = disp.row();
    const actualCol = disp.column();

    // Assert
    expect(actualRow).toEqual(expectedRow);
    expect(actualCol).toEqual(expectedCol);
});
