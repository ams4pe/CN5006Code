import './App';

function GreetingElementWithProps(props){
    const greeting = 'welcome to myapp';
    console.log("prop is ",props.msg);
    return (
    <div className='app'>
    <h1>{props.msg}</h1>
    </div>
    
    );
    }

    export default GreetingElementWithProps;