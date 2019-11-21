// import RandomizeBtn from './components/RandomizeBtn'
// var RandomizeBtn = require('./components/RandomizeBtn')

const RandomizeBtn = (props) => {
    const randomizeColors = props.randomizeColors()
    return (
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1" onClick={ randomizeColors }>RANDOMIZE COLORS</button>  
        </div>
    )
}

const ColorStrip = (props) => {
    const style = {
        backgroundColor: props.hex
    }

    let lockStr = 'UNLOCK'
    if (props.isLocked) {
        lockStr = 'LOCK'
    }

    const handleLock = () => props.lockColor(props.id)

    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center" style={ style }>
            <h1>{props.hex}</h1>
            <button className="btn btn-dark" onClick={ handleLock }>{ lockStr }</button>
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

    _randomizeColor () {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }
    
    lockColor = (id) => {
        let stateCopy = [...this.state.strip]
        stateCopy[id].isLocked = !stateCopy[id].isLocked
        this.setState({strip: stateCopy})
    }

    randomizeColor = () => {
        let stateCopy = [...this.state.strip]
        stateCopy.map((x)=>{
            if (!x.isLocked) {
            x.hex = this._randomizeColor()
            console.log(x.hex)
            }
        })
    }

    render () {
    const AllColorStrips = this.state.strip.map((x,idx) => <ColorStrip key={idx} id={x.id} hex={x.hex} isLocked={x.isLocked} lockColor={this.lockColor} />)
    return (
        <div>
            <RandomizeBtn randomizeColors={ this.randomizeColor } />
            <div className="w-100 d-flex" style={{ height: "100vh" }}>
                { AllColorStrips }
            </div>
        </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('root'))