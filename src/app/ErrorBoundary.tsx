"use client";

import CommonText from "@components/text/CommonText";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  componentDidMount() {
    window.addEventListener("error", this.handleError);
    window.addEventListener("unhandledrejection", this.handleError);
  }

  handleError = () => {
    this.setState({ hasError: true });
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <CommonText size={24} type="large">
              문제가 발생했습니다.
              <br />
              새로고침해주세요.
            </CommonText>
          </section>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
