import { useRef } from "react";


export default function UseRef() {
    const inputRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        let componentInput = inputRef.current;
        let componentInputBorder = inputRef.current.style.border;
        console.log('Border: ', componentInputBorder)
        if (componentInput.value === '' || componentInput.value ===  "Valor não pode ser vazio..."){
            componentInput.value = 'Valor não pode ser vazio...';
            componentInput.style.border = '1px solid red'
            componentInput.style.color = 'grey'
        } else {
            componentInput.style.border = ''
            componentInput.style.border = '1px solid lightGreen'
        }
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Use Ref learnings.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            ref={inputRef}
                            id="name"
                            className="form-control mb-2"
                        />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}