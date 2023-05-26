import {render, screen, fireEvent } from '@testing-library/react'
import MyButton from '../components/MyButton'

// texte sur le bouton
test('texte bouton addition', () => {
	render(<MyButton texte="addition" />)
	const linkElement = screen.getByText(/addition/i)
	expect(linkElement).toBeInTheDocument();
});
// attribut name
test('attribut name', () => {
	render(<MyButton texte="addition" name="add" />)
	expect(screen.getByRole('button')).toHaveAttribute('name', 'add')
});
// classe CSS
test('class MyButton', () => {
	render(<MyButton texte="addition" name="add" />)
	expect(screen.getByRole('button')).toHaveClass('myButton')
});
// clic ?
test('clic bouton', () => {
	//mock
	const action = jest.fn();
	render(<MyButton texte="addition" name="add" onAction={ action } />)
	//gestion du clic
	fireEvent.click(screen.getByText(/addition/i))
	expect(action).toHaveBeenCalledTimes(1);
});