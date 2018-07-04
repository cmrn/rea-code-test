import React from 'react';
import PropertyList from '../components/PropertyList';
import { getSavedProperties } from '../api';


class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savedProperties: [] };
  }

  async componentDidMount() {
    const savedProperties = await getSavedProperties();
    this.setState({ savedProperties });
  }

  render() {
    return (
      <PropertyList 
        {...this.props} 
        properties={this.state.savedProperties} 
        title='Saved Properties' 
      />
    );
  }
};

export default Saved;
