import React from 'react';
import PropertyList from '../components/PropertyList';
import { getResults } from '../api';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  async componentDidMount() {
    const results = await getResults();
    this.setState({ results });
  }

  render() {
    return (
      <PropertyList 
        {...this.props} 
        properties={this.state.results} 
        title='Results' 
        hoverContent={<div>Save</div>}
        onClick={(id) => console.log(id)}
      />
    );
  }
};

export default Results;
