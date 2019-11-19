const RandomColorBtn = (props) => {
    function click () {
        props.handleClick()
    }
    return (
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1" onClick={ click }>RANDOMIZE COLORS</button>  
        </div>
    )
}

function SingleColor(props) {
    const style = { backgroundColor: props.hex }

    let btnText = 'UNLOCK'
    if (props.isLocked) {
      btnText = 'LOCKED'
    }

    function click() {
        props.handleClick(props.index)
    }

    return (
        <div style={ style } className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{ props.hex }</h1>
            <button className="btn btn-dark" onClick={ click }>{ btnText }</button>
        </div>
    )
}

class AllColors extends React.Component {

    state = {
        colors: [
            {   
                id: 0,
                hex: '#308bfc',
                isLocked: false
            }, {
                id: 1,
                hex: '#40dfee',
                isLocked: false
            }, {
                id: 2,
                hex: '#a5f7e1',
                isLocked: false
            }, {
                id: 3,
                hex: '#2c57c1',
                isLocked: false
            }, {
                id: 4,
                hex: '#272eee',
                isLocked: false
            }
        ]
    }

    _randomColor () {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }

    handleLock = (index) => {
        let stateCopy = [...this.state.colors]
        stateCopy[index].isLocked = !stateCopy[index].isLocked
        this.setState({colors: stateCopy})
        console.log(this.state)
    }

    randomizeColor = () => {
        let stateCopy = [...this.state.colors]
        const newState = stateCopy.map((color) => {
            if (!color.isLocked) {
                color.hex = this._randomColor()
            }
            return color
        })
        this.setState(newState)
    }

    render() {
        // collection of color bands
        // map through all colors to return all five colors
        // pass in the click function to the SingleColor component so that it can access the state
        const Colors = this.state.colors.map((obj) => <SingleColor key={obj.id} index={obj.id} hex={obj.hex} isLocked={obj.isLocked} handleClick={this.handleLock}/>)
        return (
            <div>
                <RandomColorBtn handleClick={this.randomizeColor}/>
                <div className="w-100 d-flex" style={{ height: "100vh" }}>
                    {Colors}
                </div>
            </div>
            )
    }

}

const App = () => {
    return (
        <div>
            <AllColors />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))