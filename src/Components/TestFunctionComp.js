import React, {useState} from 'react'; //First, we declare useState

function TestFunctionComp() {
    const [TestValue, setTestValue] = useState(""); //Then we created a variable, with an array where we declare the current state and its updated state. We display the state using the useState hook.

    const submitValues = e => { //We give our submitValues method a variable, logging the state of the value to the console
        e.preventDefault();
        console.log(TestValue);
    };

    return(
        <form onSubmit={submitValues}> {/*Here we declare the submitValues method on the form*/}
            <h1>Test</h1>
            <input
            placeholder="Enter First Name"
            value={TestValue} //This is where we give the element a value so it can be pulled by the state hook
            onChange={event => setTestValue(event.target.value)} //This onChange method ensures that whatever is entered in the input is now the updated state
            />

            <button>
                Submit value
            </button>
        </form>
    );
}

export default TestFunctionComp