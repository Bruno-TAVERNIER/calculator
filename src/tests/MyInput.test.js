import { screen, render, fireEvent } from "@testing-library/react";
import MyInput from '../components/MyInput';

// label correct
it('props label', () => {
	render(<MyInput label="Nombre 1" />)
	const linkElement = screen.getByText(/nombre 1/i);
	expect(linkElement).toBeInTheDocument();
})
//classe CSS
it('classe input', () => {
	const { container } = render(<MyInput label="Nombre 1" />);
	expect(container.firstChild).toHaveClass('myInput');
})

//change value
it('value', () => {
	//fonction mock
	const action = jest.fn();
	//valeur par défaut
	const val = 0;
	const { container } = render(<MyInput label="Nombre 1 " val={val} onChgInput={action} />)
	//vérif valeur
	expect(screen.getByLabelText(/nombre 1/i)).toHaveDisplayValue(0);
	//modif valeur (fireEvent)
	fireEvent.change(container.getElementsByTagName('input')[0], { target: {value: 2}})
	//mock appelé
	expect(action).toHaveBeenCalledTimes(1);
})