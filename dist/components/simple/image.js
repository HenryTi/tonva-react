"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var defaultImage = 'http://101.200.46.56/imgs/Bear-icon.png';
function Image(props) {
    var className = props.className, style = props.style, src = props.src;
    if (!src) {
        src = defaultImage;
    }
    else if (src.startsWith(':') === true) {
        src = 'http://localhost:3015/res/' + src.substr(1);
    }
    return (0, jsx_runtime_1.jsx)("img", { src: src, className: className, style: style }, void 0);
    //}
}
exports.Image = Image;
//# sourceMappingURL=image.js.map