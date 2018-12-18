import * as React from 'react';
import './map-page-input';
import Button from '../../../elements/Button';
import { cnMapPage } from '..';

class MapPageInput extends React.PureComponent {
    state = {
        word: ''
    }

    onChangeHandler = (e) => this.setState({ word: e.target.value });

    render() {
        return (<div className={cnMapPage('Input')}>
            <input type='text' placeholder='add word'
                className={cnMapPage('InputElem')}
                value={this.state.word}
                onChange={this.onChangeHandler}></input>
            <Button onClick={this.onChangeHandler} icon='plus' caption='Добавить' />
        </div>)
    }
}

export default MapPageInput;