import _ from "lodash";
import React from "react";
import DisplayError from "./index";
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  errorHandler = _.throttle((event) => {
    let message = "Something went wrong";
    if ("error" in event) {
      window.hooks.sendErrorHook(event.error.stack)
    } else {
      message = event.reason instanceof Error ? event.reason.message : event.reason;
      window.hooks.sendErrorHook(message)
    }
  }, 100);

  componentDidCatch(error) {
    window.hooks.sendErrorHook(error.stack)
  }

  componentDidMount() {
    window.addEventListener("error", this.errorHandler);
    window.addEventListener("unhandledrejection", this.errorHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("error", this.errorHandler);
    window.removeEventListener("unhandledrejection", this.errorHandler);
  }

  render() {
    if (this.state.hasError) {
        return <DisplayError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary