export default function MyInput(props) {
  return (
    <div className="myInput">
      <label htmlFor={ props.label }>{ props.label }</label>
      <input type="text" id={ props.label } value={ props.val } onChange={ props.onChgInput }/>
    </div>
  )
}