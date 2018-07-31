import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    onClickButton() {
        alert("警告！")
    }
    render() {
        return <button onClick={this.onClickButton}>押す</button>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)