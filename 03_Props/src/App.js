function App(props) {
    const { Name, Age, Sex } = props       //Object Destructuring
    return (
        <div>
            <h1>Hi My name is {Name} . I am {Age} years old {Sex} </h1>
        </div>
    )
}

export default App
