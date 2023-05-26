export default function MyButton(props) {
	return (
		<button className="myButton" onClick={ props.onAction } name={ props.name }>{ props.texte }</button>
	)
}