import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuiestionData } from '../../data/data';

const Quiz : React.FunctionComponent = () =>{
    const [count, setCount] = React.useState<number>(0)
    const [answer, setAnswer] = React.useState<string>("");
    const navigate = useNavigate();

    const handlePagination = (value:number) =>{
        setCount(value);
    }

    const handlePrev = () =>{
        if(count >=1){
            setCount(count-1)
        }
    }

    const handleChange = (e:any) =>{
        setAnswer(e.target.value);

    }
    const handleNext=()=>{
        localStorage.setItem(`question${count}`, answer);
        setCount(count + 1)
        
    }
    const handleFinish = () =>{
        localStorage.setItem(`question${count}`, answer);
        navigate("/result")
    }
    return (
        <div className='flex'>
            <div className='border-2 border-gray-200 w-1/2 p-10 mt-20 ml-10'>
                <h3 className='text-2xl font-semibold mb-3'>{QuiestionData[count].name}</h3>
                {QuiestionData[count].type !== "input"?
                <div>
                    {QuiestionData[count].opt1 ?
                    <div>
                        <input type={QuiestionData[count].type} id={QuiestionData[count].opt1} onChange={(e)=>handleChange(e)}  name="answer" value={QuiestionData[count].opt1} />
                        <label htmlFor="" className='text-base ml-2 font-semibold'>{QuiestionData[count].opt1}</label> 
                    </div>: null}

                    {QuiestionData[count].opt2 ?
                    <div>
                        <input type={QuiestionData[count].type} id={QuiestionData[count].opt2} onChange={(e)=>handleChange(e)} name="answer" value={QuiestionData[count].opt2} />
                        <label htmlFor="" className='text-base ml-2 font-semibold'>{QuiestionData[count].opt2}</label>
                    </div> : null }
                    {QuiestionData[count].opt3 ?
                    <div>
                        <input type={QuiestionData[count].type} id={QuiestionData[count].opt3} onChange={(e)=>handleChange(e)} name="answer" value={QuiestionData[count].opt3} />
                        <label htmlFor="" className='text-base ml-2 font-semibold'>{QuiestionData[count].opt3}</label>
                    </div>:null}
                </div>: <input type="text" onChange={(e)=>handleChange(e)} placeholder='Write your answer' />}
                
                <div className='flex justify-between items-center mt-5'>
                    <input type="button" onClick={handlePrev} value="Previous" className='bg-red-100 py-1 px-5 border-2 border-red-500 rounded-md mt-5 cursor-pointer' />
                    {count + 1 === QuiestionData.length?
                    <input type="button" onClick={handleFinish} value="Finish" className='bg-red-100 py-1 px-5 border-2 border-red-500 rounded-md mt-5 cursor-pointer' />:
                    <input type="button" onClick={handleNext} value="Next" className='bg-red-100 py-1 px-5 border-2 border-red-500 rounded-md mt-5 cursor-pointer' />}
                </div>
            </div>
            <div className='border-2 border-gray-200 w-1/2 p-10 mt-20 ml-5'>
                {QuiestionData.map((data, index)=>(
                    <button onClick={(event: React.MouseEvent<HTMLElement>)=>handlePagination(index)} className='py-2 px-3 border-2 border-gray-200 rounded mr-3'>{index + 1}</button>))}
            </div>
        </div>
    )
}

export default Quiz;