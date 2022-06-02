import "./style.css";

function Inputs({
	type,
	name,
	label,
	id,
	placeholder,
	value,
	handleChangeForm,
	error,
}) {
	return (
		<div className='column'>
			<label className='data-label' htmlFor={id}>
				{label}
			</label>
			<input
				className='input'
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleChangeForm(e)}
			/>
			{error && (
				<span className='font-form-error align-form-error'>{error}</span>
			)}
		</div>
	);
}

export default Inputs;
