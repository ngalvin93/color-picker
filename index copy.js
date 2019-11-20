const RandomizeBtn = () => {
    return (
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
    )
}

const ColorStrip = (props) => {
    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{props.name}</h1>
            <button className="btn btn-dark">Button</button>
        </div>
    )
}

class App extends React.Component {
    state = {
        strip: [{
            id: 0,
            hex: '#FFFFFF',
            isLocked: false
        }, {
            id: 1,
            hex: '#FFFFFF',
            isLocked: false
        }, {
            id: 2,
            hex: '#FFFFFF',
            isLocked: false
        }, {
            id: 3,
            hex: '#FFFFFF',
            isLocked: false
        }, {
            id: 4,
            hex: '#FFFFFF',
            isLocked: false
        }]
    }
    render () {

    const AllColorStrips = this.state.strip.map(x => <ColorStrip name={x.hex} />)
    return (
        <div>
            <RandomizeBtn />
            <div className="w-100 d-flex" style={{ height: "100vh" }}>
                { AllColorStrips }
            </div>
        </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('root'))