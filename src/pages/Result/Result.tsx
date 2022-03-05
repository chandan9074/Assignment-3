import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import { QuiestionData } from '../../data/data';

const Result : React.FunctionComponent = () =>{
    
    const [dataArray , setDataarray] = React.useState<any>([])
    const [count, setCount] = React.useState<any>([])

    React.useEffect(()=>{
        let questiondt0 = localStorage.getItem("question0");
        let questiondt1 = localStorage.getItem("question1");
        let questiondt2 = localStorage.getItem("question2");
        let questiondt3 = localStorage.getItem("question3");
        let questiondt4 = localStorage.getItem("question4");

        if(questiondt0 === QuiestionData[0].answer){
            setCount((prevState:any) => [...prevState, questiondt0])
            setDataarray((prevState:any) => [...prevState, questiondt0])
        }

        else{
            setDataarray((prevState:any) => [...prevState, "wrong"]);
        }

        if(questiondt1 === QuiestionData[1].answer){
            // setCount(count+1);
            setCount((prevState:any) => [...prevState, questiondt1])
            setDataarray((prevState:any) => [...prevState, questiondt1])
        }

        else{
            setDataarray((prevState:any) => [...prevState, "wrong"]);
        }

        if(questiondt2 === QuiestionData[2].answer){
            // setCount(count+1);
            setCount((prevState:any) => [...prevState, questiondt2])
            setDataarray((prevState:any) => [...prevState, questiondt1])
        }

        else{
            setDataarray((prevState:any) => [...prevState, "wrong"]);
        }

        if(questiondt3 === QuiestionData[3].answer){
            // setCount(count+1);
            setCount((prevState:any) => [...prevState, questiondt3])
            setDataarray((prevState:any) => [...prevState, questiondt3])
        }

        else{
            setDataarray((prevState:any) => [...prevState, "wrong"]);
        }

        if(questiondt4 === QuiestionData[4].answer){
            // setCount(count+1);
            setCount((prevState:any) => [...prevState, questiondt4])
            setDataarray((prevState:any) => [...prevState, questiondt4])
        }

        else{
            setDataarray((prevState:any) => [...prevState, "wrong"]);
        }
    }, [])
    return (
        <div className='flex'>
            <div className='w-1/2 '>
                {QuiestionData.map((data, index)=>(
                    <div className='border-2 border-gray-200 w-11/12 p-5 mt-10 ml-10'>
                        <h1 className='text-2xl font-semibold mb-3'>Q{index+1} {data.name}</h1>
                        {dataArray[index] === data.answer? 
                        <div>
                            <span className='text-base'>Result: </span><span className='text-base text-green-500'>Your answer is correct</span>
                            <h4 className='text-base'>Correct answer is : {data.answer}</h4>
                        </div>:
                        <div>
                            {console.log(dataArray[0])}
                            <span className='text-base'>Result: </span><span className='text-base text-red-500'>Your answer is wrong</span>
                            <h4 className='text-base'>Correct answer is : {data.answer}</h4>
                        </div>
                        }
                    </div>
                ))}
                <div className='mt-10'>
                    <Link to="/" className='bg-red-100 py-1 px-5 border-2 border-red-500 rounded-md cursor-pointer ml-10 '>Go to home</Link>
                </div>
            </div>
            <div className='w-1/2 p-5 mt-10 ml-10'>
                <h3 className='text-2xl font-semibold'>Percentage of Correct and Incorrect:</h3>
                <PieChart
                    data={[
                        { title: 'Correct', value: count.length, color: '#E38627' },
                        { title: 'Incorrect', value: QuiestionData.length-count.length, color: '#C13C37' },
                        
                    ]}
                    
                />;
            </div>
        </div>
    )
}

export default Result;