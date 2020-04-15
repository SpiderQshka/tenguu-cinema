import React from "react";
import { PageUIError } from "pages/errorpage/index";

interface IProps {}

interface IState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error)
      return <PageUIError error={this.state.error} />;

    return this.props.children;
  }
}
