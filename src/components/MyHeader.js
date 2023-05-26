export default function MyHeader(props) {
	return (
		<header className="myHeader">
			<img src={ props.src } alt={ props.title } />
			<h1>{ props.title }</h1>
		</header>
	)
}