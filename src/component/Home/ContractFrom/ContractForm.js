import React from 'react';
import { useForm } from 'react-hook-form';
import './ContractForm.css'
const ContractForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contract">
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input className="form-input" {...register("name", { required: true })} placeholder='Enter Your Name'/>
                <br /> <br />
                {errors.name && <span className="text-danger">This field is required</span>}

                <br />
                
                <input className="form-input" {...register("email", { required: true })} placeholder='Enter Your Email'/>
                <br /> <br />
                {errors.email && <span className="text-danger">This field is required</span>}


                <br />

                <input className="form-description" {...register("description", { required: true })} placeholder='Enter Your Description'/>
                <br /> <br />
                {errors.description && <span className="text-danger">This field is required</span>}


                <br />
                {/* <input className="button" type="submit" /> */}
                <button className="button-form"> Submit </button>
            </form>
        </div>
    );
};

export default ContractForm;