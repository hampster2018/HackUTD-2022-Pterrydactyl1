import './FormInput.css'

const FormInput = (props) => {
    return (
        <div className= "FormInput">
            <input placeholder={props.placeholder}/>
        </div>
    );
};

export default FormInput;