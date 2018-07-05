import React from 'react';
import App from '../components/App';
import { view } from 'react-easy-state';
import propertyStore from '../propertyStore';

class AppContainer extends React.Component {
  componentDidMount() {
    propertyStore.load();
  }

  render() {
    return <App {...this.props} />;
  }
}

export default view(AppContainer);
