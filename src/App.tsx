import "./app.scss";

import React from "react";

import { AppState } from "./app-state";

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = ({ appState }) => {
  return (
    <div className="app">
      <canvas id="canvas"></canvas>
    </div>
  );
};
