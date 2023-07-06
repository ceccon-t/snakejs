import { Directions } from './Direction'

import { it, expect, describe } from "vitest";

describe('Up', () => {
    it('is not opposite to Up', () => {
        // Arrange
        const up = Directions.up();
        const up2 = Directions.up();
    
        // Act
        const opposesUp = up.isOpposite(up2);
    
        // Assert
        expect(opposesUp).toEqual(false);
    });

    it('is opposite to Down', () => {
        // Arrange
        const up = Directions.up();
        const down = Directions.down();
    
        // Act
        const opposesDown = up.isOpposite(down);
    
        // Assert
        expect(opposesDown).toEqual(true);
    });

    it('is not opposite to Left', () => {
        // Arrange
        const up = Directions.up();
        const left = Directions.left();

        // Act
        const opposesLeft = up.isOpposite(left);

        // Assert
        expect(opposesLeft).toEqual(false);
    });

    it('is not opposite to Right', () => {
        // Arrange
        const up = Directions.up();
        const right = Directions.right();

        // Act
        const opposesRight = up.isOpposite(right);

        // Assert
        expect(opposesRight).toEqual(false);
    });

    it('maps to displacement of one negative unit on row', () => {
        // Arrange
        const up = Directions.up();
        const expectedDisplaceRow = -1;
        const expectedDisplaceCol = 0;

        // Act
        const mappedDisplacement = up.asDisplacement();

        // Assert
        expect(mappedDisplacement.row()).toEqual(expectedDisplaceRow);
        expect(mappedDisplacement.column()).toEqual(expectedDisplaceCol);
    });
    
});

describe('Down', () => {
    it('is opposite to Up', () => {
        // Arrange
        const down = Directions.down();
        const up = Directions.up();
    
        // Act
        const opposesUp = down.isOpposite(up);
    
        // Assert
        expect(opposesUp).toEqual(true);
    });

    it('is not opposite to Down', () => {
        // Arrange
        const down = Directions.down();
        const down2 = Directions.down();
    
        // Act
        const opposesDown = down.isOpposite(down2);
    
        // Assert
        expect(opposesDown).toEqual(false);
    });

    it('is not opposite to Left', () => {
        // Arrange
        const down = Directions.down();
        const left = Directions.left();

        // Act
        const opposesLeft = down.isOpposite(left);

        // Assert
        expect(opposesLeft).toEqual(false);
    });

    it('is not opposite to Right', () => {
        // Arrange
        const down = Directions.down();
        const right = Directions.right();

        // Act
        const opposesRight = down.isOpposite(right);

        // Assert
        expect(opposesRight).toEqual(false);
    });
    
    it('maps to displacement of one positive unit on row', () => {
        // Arrange
        const down = Directions.down();
        const expectedDisplaceRow = 1;
        const expectedDisplaceCol = 0;

        // Act
        const mappedDisplacement = down.asDisplacement();

        // Assert
        expect(mappedDisplacement.row()).toEqual(expectedDisplaceRow);
        expect(mappedDisplacement.column()).toEqual(expectedDisplaceCol);
    });

});

describe('Left', () => {
    it('is not opposite to Up', () => {
        // Arrange
        const left = Directions.left();
        const up = Directions.up();
    
        // Act
        const opposesUp = left.isOpposite(up);
    
        // Assert
        expect(opposesUp).toEqual(false);
    });

    it('is not opposite to Down', () => {
        // Arrange
        const left = Directions.left();
        const down = Directions.down();
    
        // Act
        const opposesDown = left.isOpposite(down);
    
        // Assert
        expect(opposesDown).toEqual(false);
    });

    it('is not opposite to Left', () => {
        // Arrange
        const left = Directions.left();
        const left2 = Directions.left();

        // Act
        const opposesLeft = left.isOpposite(left2);

        // Assert
        expect(opposesLeft).toEqual(false);
    });

    it('is opposite to Right', () => {
        // Arrange
        const left = Directions.left();
        const right = Directions.right();

        // Act
        const opposesRight = left.isOpposite(right);

        // Assert
        expect(opposesRight).toEqual(true);
    });
    
    it('maps to displacement of one negative unit on column', () => {
        // Arrange
        const left = Directions.left();
        const expectedDisplaceRow = 0;
        const expectedDisplaceCol = -1;

        // Act
        const mappedDisplacement = left.asDisplacement();

        // Assert
        expect(mappedDisplacement.row()).toEqual(expectedDisplaceRow);
        expect(mappedDisplacement.column()).toEqual(expectedDisplaceCol);
    });

});

describe('Right', () => {
    it('is not opposite to Up', () => {
        // Arrange
        const right = Directions.right();
        const up = Directions.up();
    
        // Act
        const opposesUp = right.isOpposite(up);
    
        // Assert
        expect(opposesUp).toEqual(false);
    });

    it('is not opposite to Down', () => {
        // Arrange
        const right = Directions.right();
        const down = Directions.down();
    
        // Act
        const opposesDown = right.isOpposite(down);
    
        // Assert
        expect(opposesDown).toEqual(false);
    });

    it('is opposite to Left', () => {
        // Arrange
        const right = Directions.right();
        const left = Directions.left();

        // Act
        const opposesLeft = right.isOpposite(left);

        // Assert
        expect(opposesLeft).toEqual(true);
    });

    it('is not opposite to Right', () => {
        // Arrange
        const right = Directions.right();
        const right2 = Directions.right();

        // Act
        const opposesRight = right.isOpposite(right2);

        // Assert
        expect(opposesRight).toEqual(false);
    });
    
    it('maps to displacement of one positive unit on column', () => {
        // Arrange
        const right = Directions.right();
        const expectedDisplaceRow = 0;
        const expectedDisplaceCol = 1;

        // Act
        const mappedDisplacement = right.asDisplacement();

        // Assert
        expect(mappedDisplacement.row()).toEqual(expectedDisplaceRow);
        expect(mappedDisplacement.column()).toEqual(expectedDisplaceCol);
    });

});
