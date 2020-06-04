import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component<Props> {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return <div>{this.props.children}</div>;
  }
}
