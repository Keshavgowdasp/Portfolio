import NewImage from './main1.gif';


export default function Main(){

    return (
    
    <section id="main" className="px-10 w-full flex gap-12 flex-col lg: flex-row justify-center items-center align-center mt-40 mb-16 1g:mt-10 max-w-5xl mx-auto lg:gap-0 h-[71vh]">
    
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
    
    <div>
    <h4 className="text-center text-2xl font-bold">
    
    Hi .. welcome to
    
    </h4>
    
    <h2 className="text-center text-red-500 text-5xl font-bold">
    
    My Portfolio Website
    
    </h2>
    
    </div>
    
    <p className="text-center">
    
    I am your Full Stack developer...
    
    </p>
    
    </div>
    
    <div className="flex-1">
    
    <img src={NewImage} alt="main.svg" className="w-[800px] max-h-[800px] bg-cover"/>
    
    </div>
    <br/>
       
    </section>
    
    );
    }
    