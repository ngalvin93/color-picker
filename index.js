// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

const RandomColorBtn = () => {

    return (
        <div className="text-center bg-dark fixed-top">
            <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div>
    )
}

// class SingleColor extends React.Component {
//     state = {
//         hex: '#FF00F5',
//         isLocked: false,
//         text: 'UNLOCK'
//     }
//     // private functions exclusive to this component
//     handleLock = () => {
//         let lockStatus = false
//         let textValue = 'UNLOCK'
//         if (this.state.isLocked === false) {
//             lockStatus = true
//             textValue = 'LOCK'
//         }
//         this.setState({
//             isLocked: lockStatus,
//             text: textValue
//         })
//         console.log(this.state)
//     }
//     // rendering
//     render () {
//         const style = {
//             backgroundColor: this.state.hex
//         }
//         return (
//             <div style={style} className="w-100 d-flex flex-column align-items-center justify-content-center">
//                 <h1>{ this.state.hex }</h1>
//                 <button className="btn btn-dark" onClick={ this.handleLock }>{ this.state.text }</button>
//             </div>
//         )
//     }
// }

function SingleColor(props) {
    const style = { backgroundColor: props.hex }

    function click() {
        props.handleClick(props.index)
    }

    return (
        <div style={ style } className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{ props.hex }</h1>
            <button className="btn btn-dark" onClick={ click }>{ props.text }</button>
        </div>
    )
}

class AllColors extends React.Component {

    state = {
        colors: [
            {   
                id: 1,
                hex: '#30011E',
                isLocked: false,
                text: 'UNLOCK'
            }, {
                id: 2,
                hex: '#D7FCD4',
                isLocked: false,
                text: 'UNLOCK'
            }, {
                id: 3,
                hex: '#B6CCA1',
                isLocked: false,
                text: 'UNLOCK'
            }, {
                id: 4,
                hex: '#B68F40',
                isLocked: false,
                text: 'UNLOCK'
            }, {
                id: 5,
                hex: '#545454',
                isLocked: false,
                text: 'UNLOCK'
            }
        ]
    }

    test = (index) => {
        console.log("click", index);
        // console.log(this.state);
        //setState
    }

    // handleLock = (index) => {
    //     let lockStatus = false
    //     let lockText = 'UNLOCK'
    //     if ()
    // }

    render() {
        // collection of color bands
        // map through all colors to return all five colors
        // pass in the click function to the SingleColor component so that it can access the state
        const Colors = this.state.colors.map((obj) => <SingleColor key={obj.id} index={obj.id} hex={obj.hex} isLocked={obj.isLocked} text={obj.text} handleClick={this.test}/>)
        return (
            <div className="w-100 d-flex" style={{ height: "100vh" }}>
                {Colors}
            </div>)
    }

}

const App = () => {
    return (
        <div>
            <RandomColorBtn />
            <AllColors />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))