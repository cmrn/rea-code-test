import React from 'react';
import Results from '../components/Results';
import { getResults } from '../api';


class ResultsContainer extends React.Component {
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
      <Results {...this.props} results={this.state.results}  />
    );
  }
};

export default ResultsContainer;
