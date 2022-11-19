interface InputProps {
 onChange: (e: any) => void
}

const Input = (props: InputProps) => {
    const {onChange} = props;

    return (
        <input
            type="text"
            placeholder="Search for User"
            onChange={onChange}
            className="input_search"
        />
    )
}

export default Input;