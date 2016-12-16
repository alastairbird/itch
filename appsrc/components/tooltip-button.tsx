
import * as classNames from "classnames";

import * as React from "react";

const Button = require("react-md/lib/Buttons").default;
const injectTooltip = require("react-md/lib/Tooltips").default as IInjectTooltip;

interface IInjectTooltipCbOpts {
    className: string;
    tooltip: JSX.Element;
    children: JSX.Element[];
}

interface IInjectTooltipCb {
    (opts: IInjectTooltipCbOpts): JSX.Element;
}

interface IInjectTooltip {
    (cb: IInjectTooltipCb): React.ComponentClass<any>;
}

export default injectTooltip(({children, className, tooltip, ...props}) => (
    <Button {...props} className={classNames(className, "inline-rel-container")}>
        {tooltip}
        {children}
    </Button>
));
