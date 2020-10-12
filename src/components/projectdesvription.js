import React from 'react'

import './projectdesvription.css';


class App extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            hits: [],
        };
    }

    componentDidMount() {

        let param = this.props.match.params.id;
        const apiUrl = window.url + 'api/project/get/' + param;
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => this.setState({ hits: data.data }));

    }

    render() {
        const { hits } = this.state;
        // console.log(this.props.id);
        return (


            <div>
                <div className="navdiv">

                    <h1>Projects Description</h1>
                </div>
                {hits.map((hit, key) => (
                    <div className="imag">
                        <img src={window.url + hit.projectimage}></img>
                    </div>
                ))}
                {hits.map((hit, key) => (
                    <div>
                        <div className="detail">
                            <h1>{hit.name}</h1>
                            <div className="des">
                                {hit.description}
                            </div>
                        </div>

                    </div>
                ))}

            </div>

        );


    }



}



export default App;