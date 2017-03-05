import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  goToStore() {
    event.preventDefault();
    console.log('You changed the URL');
      // first grab the text from the box
      const value = $('input').val();
      // second we're going to transition from / to /store/:storeId
  }

  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
