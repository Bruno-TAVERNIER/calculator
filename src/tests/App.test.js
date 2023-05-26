import {render, screen } from '@testing-library/react';
import App from '../App';

/* TDD Test Driven Development */
test("test d'une fonction bidon", () => {
	// un mock permet de simuler une fonction, un composant, ...
	const addition = (a, b) => a + b;
	//assertion 
	expect(addition(2,3)).toEqual(5);
});

// utilisation de JEST plutot que React Testing Library
describe('true is truthy & false is falsy', () => {
	it('true is true', () => {
		expect(true).toBe(true);
	});
	it('true is truthy', () => {
		expect(true).toBeTruthy();
	})
	it('false is false', () => {
		expect(false).toBe(false);
	})
	it('false is falsy', () => {
		expect(false).toBeFalsy();
	})
});

test('render header text', () => {
	render(<App />);
	expect(screen.getByText(/FX-80 Teubé/i)).toBeInTheDocument();
})
test('date pied de page', () => {
	render(<App />);
	expect(screen.getByText(/Copyright © 2023 - Moi/i)).toBeInTheDocument();
})
