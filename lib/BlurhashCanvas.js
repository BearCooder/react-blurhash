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
import { decode } from 'blurhash';
class BlurhashCanvas extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.canvas = null;
        this.handleRef = (canvas) => {
            this.canvas = canvas;
            this.draw();
        };
        this.draw = () => {
            const { hash, height, punch, width } = this.props;
            if (this.canvas) {
                const pixels = decode(hash, width, height, punch);
                const ctx = this.canvas.getContext('2d');
                const imageData = ctx.createImageData(width, height);
                imageData.data.set(pixels);
                ctx.putImageData(imageData, 0, 0);
            }
        };
    }
    componentDidUpdate() {
        this.draw();
    }
    render() {
        const _a = this.props, { hash, height, width } = _a, rest = __rest(_a, ["hash", "height", "width"]);
        return React.createElement("canvas", Object.assign({}, rest, { height: height, width: width, ref: this.handleRef }));
    }
}
BlurhashCanvas.defaultProps = {
    height: 128,
    width: 128,
};
export default BlurhashCanvas;
//# sourceMappingURL=BlurhashCanvas.js.map