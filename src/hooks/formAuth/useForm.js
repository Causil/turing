import { useState } from 'react';

export const useForm = (initialForm,validationsForm,login) => {
    const [ form, setForm ] = useState(initialForm)
    const [ errors, setErrors ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ response, setResponse ] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('hanledSubmit',form);
        login(form);
    };
    
    const handleChange = (e) => {
        //console.log('handlechange',form)
        const { name,value } = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validationsForm(form));
    };

    const handle = (e) => {};
    return {
        form,
        errors,
        loading,
        response,
        handleSubmit,
        handleChange,
        handleBlur,
        handle,
    }
};