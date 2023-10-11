import React, { useReducer } from 'react'

function PostReducer() {
    const initialState = {
        name: '',
        email: '',
        password: '',
        subscription: 'free',
        agreeToTerms: false,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.field]: action.value };
                
                case 'TOGGLE_CHECKBOX':
                return { ...state, [action.field]: !state[action.field] };

            default:
                return state;
        }
    }
    const [formState, dispatch] = useReducer(reducer, initialState);

    const handleChange = event => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        dispatch({ type: 'SET_FIELD', field: name, value: fieldValue });
    };

    const handleCheckboxChange = event => {
        dispatch({ type: 'TOGGLE_CHECKBOX', field: event.target.name });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Do something with the form data, e.g., send it to a server
        console.log('Form submitted with data:', formState);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input className='form-control' type="text" name="name" value={formState.name} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input className='form-control' type="email" name="email" value={formState.email} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input className='form-control' type="password" name="password" value={formState.password} onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Subscription:
                            <select className='form-control' name="subscription" value={formState.subscription} onChange={handleChange}>
                                <option value="free">Free</option>
                                <option value="basic">Basic</option>
                                <option value="premium">Premium</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Agree to Terms:
                            <input className='form-check-input'
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formState.agreeToTerms}
                                onChange={handleCheckboxChange}
                            />
                        </label>
                    </div>
                    <button type="submit" className='btn btn-light'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default PostReducer