import { Position } from './Position';
import { Displacement } from "./Displacement";

import { it, expect, describe } from "vitest";

describe('constructor and getters', () => {

    it('should remember the row', () => {
        // Arrange
        const expectedRow = 4;
        const pos = new Position(expectedRow, 2);
    
        // Act
        const actualRow = pos.row();
    
        // Assert
        expect(actualRow).toEqual(expectedRow);
    });
    
    it('should remember the column', () => {
        // Arrange
        const expectedCol = 7;
        const pos = new Position(1, expectedCol);
    
        // Act
        const actualCol = pos.column();
    
        // Assert
        expect(actualCol).toEqual(expectedCol);
    });
    
});

describe('move()', () => {

    it('should return target position when asked to move', () => {
        // Arrange
        const initialRow = 3;
        const initialCol = 5;
        const displaceRow = 4;
        const displaceCol = 6;
        const origin = new Position(initialRow, initialCol);
        const disp = new Displacement(displaceRow, displaceCol);
    
        // Act
        const destiny = origin.move(disp);
        const finalRow = destiny.row();
        const finalCol = destiny.column();
    
        // Assert
        const expectedRow = initialRow + displaceRow;
        const expectedCol = initialCol + displaceCol;
        expect(finalRow).toEqual(expectedRow);
        expect(finalCol).toEqual(expectedCol);
    });
    
    it('should process movements with no change on any particular axis', () => {
        // Arrange
        const initialRow = 3;
        const initialCol = 5;
        const displaceRow = 0;
        const displaceCol = 0;
        const origin = new Position(initialRow, initialCol);
        const disp = new Displacement(displaceRow, displaceCol);
    
        // Act
        const destiny = origin.move(disp);
        const finalRow = destiny.row();
        const finalCol = destiny.column();
    
        // Assert
        expect(finalRow).toEqual(initialRow);
        expect(finalCol).toEqual(initialCol);
    });
    
    it('should process movements in negative direction', () => {
        // Arrange
        const initialRow = 3;
        const initialCol = 5;
        const displaceRow = -2;
        const displaceCol = -1;
        const origin = new Position(initialRow, initialCol);
        const disp = new Displacement(displaceRow, displaceCol);
    
        // Act
        const destiny = origin.move(disp);
        const finalRow = destiny.row();
        const finalCol = destiny.column();
    
        // Assert
        const expectedRow = initialRow + displaceRow;
        const expectedCol = initialCol + displaceCol;
        expect(finalRow).toEqual(expectedRow);
        expect(finalCol).toEqual(expectedCol);
    });

});

