import type { FC, PropsWithChildren } from 'react';
import React from 'react';

interface Props {
  fallback: FC<{ reset: () => void }>;
  onError?: (error: Error) => void;
}

interface State {
  error?: Error;
}

export default class ErrorBoundary extends React.Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  public componentDidCatch(error: Error) {
    this.props.onError?.(error);
  }

  public render() {
    const { error } = this.state;
    const { fallback: Fallback } = this.props;

    if (error) {
      return <Fallback reset={() => this.setState({ error: undefined })} />;
    }

    return this.props.children;
  }
}
