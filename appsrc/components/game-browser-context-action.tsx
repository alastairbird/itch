
import * as React from "react";
import * as classNames from "classnames";
import {connect} from "./connect";

import Icon from "./icon";
import {IAction} from "../constants/action-types";
import {ILocalizer} from "../localizer";

import {IActionOpts} from "./game-actions/list-secondary-actions";

const Button = require("react-md/lib/Buttons").default;

class GameBrowserContextAction extends React.Component<IGameBrowserContextAction, void> {
  render () {
    const {t, dispatch, opts} = this.props;
    const {action, icon, hint, label, type = "action", classes = []} = opts;

    const textLabel = "" + label;

    return <Button
      flat
      primary={icon === "uninstall"}
      label={t.format(label)}
      iconClass={`icon icon-${icon}`}
      tooltipLabel={hint} tooltipPosition="top"
      onClick={() => dispatch(action)}/>;
  }
}

interface IGameBrowserContextAction {
  t: ILocalizer;
  dispatch: (action: IAction<any>) => void;
  opts: IActionOpts;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: (action: IAction<any>) => void) => ({dispatch});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBrowserContextAction);
