import React from "react";
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import Routes from "../../routes";
import Game from "../game/Game";

const NavigationSwitch = () => {
  return (
    <Switch>
      <Route path={Routes.Game.home} element={<Game />} ></Route>
      <Route
        path="*"
        element={<Navigate to={Routes.Game.home} replace />}
      />
    </Switch>
  )
}

export default NavigationSwitch;
