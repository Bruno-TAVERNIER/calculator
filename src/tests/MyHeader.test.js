import {render, screen} from '@testing-library/react'
import MyHeader from '../components/MyHeader'

//image dans le document 
it('image', () => {
	render(<MyHeader title="toto" />)
	expect(screen.getByRole('img')).toBeInTheDocument();
})
//titre
test('titre', () => {
	render(<MyHeader title="Mon Titre" />)
	const linkElement = screen.getByText(/mon titre/i)
	expect(linkElement).toBeInTheDocument();
	screen.debug(); //comment la lib voit le composant
})

//classe CSS
it('classe css', () => {
	const { container } = render(<MyHeader title="toto" />)
	expect(container.firstChild).toHaveClass('myHeader');
});
it('classe css v2', () => {
	const { container } = render(<MyHeader title="toto" />)
	expect(container.getElementsByTagName('header')[0]).toHaveClass('myHeader');
});
//attrib alt sur image
it('alt img', () => {
	render(<MyHeader title="toto" />)
	expect(screen.getByRole('img')).toHaveAttribute('alt', 'toto');
});

