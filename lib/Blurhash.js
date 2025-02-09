var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import BlurhashCanvas from './BlurhashCanvas';
const canvasStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
};
class Blurhash extends React.PureComponent {
    componentDidUpdate() {
        if (this.props.resolutionX <= 0) {
            throw new Error('resolutionX must be larger than zero');
        }
        if (this.props.resolutionY <= 0) {
            throw new Error('resolutionY must be larger than zero');
        }
    }
    render() {
        const _a = this.props, { hash, height, width, punch, resolutionX, resolutionY, style } = _a, rest = __rest(_a, ["hash", "height", "width", "punch", "resolutionX", "resolutionY", "style"]);
        return (React.createElement("div", Object.assign({}, rest, { style: Object.assign(Object.assign({ display: 'inline-block', height, width }, style), { position: 'relative' }) }),
            React.createElement(BlurhashCanvas, { hash: hash, height: resolutionY, width: resolutionX, punch: punch, style: canvasStyle })));
    }
}
Blurhash.defaultProps = {
    height: 128,
    width: 128,
    resolutionX: 32,
    resolutionY: 32,
};
export default Blurhash;
//# sourceMappingURL=Blurhash.js.map