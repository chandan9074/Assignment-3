import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage : React.FunctionComponent = () =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const navigate = useNavigate();

    type userDataT = {
        namedt: string,
        emaildt: string,
        genderdt: string
    }

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        if (e.target.name === "name"){
            setName(e.target.value);
        }
        else if (e.target.name === "email"){
            setEmail(e.target.value);
        }
        else if (e.target.name === "gender"){
            setGender(e.target.value);
        }
    }

    const handleSubmit = (e : React.FormEvent) =>{
        e.preventDefault();
        const data : userDataT = {
            namedt : name,
            emaildt: email,
            genderdt: gender
        }

        const parseData = JSON.stringify(data);
        localStorage.setItem("userInfo", parseData);
        navigate("/quiestions");
    }
    return (
        <div>
            <form data-test='info-form' onSubmit={(e)=>handleSubmit(e)} className='border-2 border-gray-200 w-1/4 mx-auto mt-10 p-5'>
                <h3 className='text-2xl font-semibold'>Personal Information</h3>
                <label htmlFor="" className='text-lg font-semibold'>Name:</label><br />
                <input data-test='name' type="text" onChange={(e)=>handleChange(e)} name="name" placeholder='Enter your name' className='w-full' required /><br />
                <label htmlFor="" className='text-lg font-semibold'>Email</label><br />
                <input data-test='email' type="email" onChange={(e)=>handleChange(e)} name="email" placeholder='Enter your email' className='w-full' required /><br />
                <label htmlFor="" className='text-lg font-semibold'>Gender</label><br />
                <input data-test='male-gender' type="radio" onChange={(e)=>handleChange(e)} id="male" name="gender" value="Male" />
                <label className='text-base ml-2 font-semibold'>Male</label> <br />
                <input data-test='female-gender' type="radio" onChange={(e)=>handleChange(e)} id="female" name="gender" value="Female" />
                <label  className='text-base ml-2 font-semibold'>Female</label> <br />
                <input data-test='submit' type="submit" value="Submit" className='bg-red-100 py-1 px-5 border-2 border-red-500 rounded-md mt-5 cursor-pointer' />
            </form>
        </div>
    )
}

export default Homepage;