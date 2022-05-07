import React from 'react'

class counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { time: 0 };
    }

    componentDidMount() {
        this.timer = setInterval(
            () =>
                this.setState((prevState) => ({
                    time: prevState.time + 1,
                })),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p> Composant monté depuis : {this.state.time} secondes</p>
            </div>
        )
    }
};

export default counter;