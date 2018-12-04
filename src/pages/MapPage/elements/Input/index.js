import React from 'react';
import './map-page-input';
import Button from '../../../../elements/Button';

class MapPageInput extends React.PureComponent {
    state = {
        word: ''
    }

    onChangeHandler = (e) => this.setState({ word: e.target.value });

    render() {
        return (<div className='map-page-input'>
            <input type='text' placeholder='add word'
                className='map-page-input__input'
                value={this.state.word}
                onChange={this.onChangeHandler}></input>
            <Button onClick={this.onChangeHandler} icon='plus' />
        </div>)
    }
}

export default MapPageInput;