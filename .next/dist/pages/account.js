'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('D:\\dev\\NexThrone\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('D:\\dev\\NexThrone\\node_modules\\next\\dist\\lib\\css.js');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var id = _ref.url.query.id;

    var item = _.find(_posts2.default, { id: id });

    return _react2.default.createElement(
        'div',
        { className: (0, _css.style)(styles.main) },
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.header) },
            _react2.default.createElement(
                'h3',
                null,
                ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.panel) },
            _react2.default.createElement(
                'h1',
                { className: (0, _css.style)(styles.heading) },
                'Character:',
                item.codeName,
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Real Name:',
                item.realName,
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Bref Description:',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'span',
                    null,
                    item.story
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.singlePhoto) },
            _react2.default.createElement('img', { src: item.display_src, alt: item.realName, width: 500, height: 500 })
        )
    );
};

var styles = {
    main: {
        padding: '50px'
    },

    header: {
        font: '15px Monaco'
    },

    panel: {
        float: 'right',
        marginRight: '140px',
        width: '300px'
    },

    singlePhoto: {
        border: '1px solid #999',
        width: '500px',
        height: '500px',
        float: 'left'
    },

    heading: {
        font: '15px Monaco'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZcXE5leFRocm9uZVxccGFnZXNcXGFjY291bnQuanMiXSwibmFtZXMiOlsiXyIsImlkIiwidXJsIiwicXVlcnkiLCJpdGVtIiwiZmluZCIsInN0eWxlcyIsIm1haW4iLCJoZWFkZXIiLCJwYW5lbCIsImhlYWRpbmciLCJjb2RlTmFtZSIsInJlYWxOYW1lIiwic3RvcnkiLCJzaW5nbGVQaG90byIsImRpc3BsYXlfc3JjIiwicGFkZGluZyIsImZvbnQiLCJmbG9hdCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsQzs7Ozs7O2tCQUVHLGdCQUEwQjtBQUFBLFFBQVZDLEVBQVUsUUFBeEJDLEdBQXdCLENBQWxCQyxLQUFrQixDQUFWRixFQUFVOztBQUNyQyxRQUFNRyxPQUFPSixFQUFFSyxJQUFGLGtCQUFjLEVBQUVKLElBQUlBLEVBQU4sRUFBZCxDQUFiOztBQUVBLFdBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBTUssT0FBT0MsSUFBYixDQUFoQjtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsZ0JBQU1ELE9BQU9FLE1BQWIsQ0FBaEI7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsU0FESjtBQUlJO0FBQUE7QUFBQSxjQUFLLFdBQVcsZ0JBQU1GLE9BQU9HLEtBQWIsQ0FBaEI7QUFDSTtBQUFBO0FBQUEsa0JBQUksV0FBVyxnQkFBTUgsT0FBT0ksT0FBYixDQUFmO0FBQUE7QUFDZU4scUJBQUtPLFFBRHBCO0FBRUkseURBRko7QUFHSSx5REFISjtBQUFBO0FBSWVQLHFCQUFLUSxRQUpwQjtBQUtJLHlEQUxKO0FBTUkseURBTko7QUFBQTtBQVFJLHlEQVJKO0FBU0kseURBVEo7QUFVSTtBQUFBO0FBQUE7QUFBT1IseUJBQUtTO0FBQVo7QUFWSjtBQURKLFNBSko7QUFrQkk7QUFBQTtBQUFBLGNBQUssV0FBVyxnQkFBTVAsT0FBT1EsV0FBYixDQUFoQjtBQUNJLG1EQUFLLEtBQUtWLEtBQUtXLFdBQWYsRUFBNEIsS0FBS1gsS0FBS1EsUUFBdEMsRUFBZ0QsT0FBTyxHQUF2RCxFQUE0RCxRQUFRLEdBQXBFO0FBREo7QUFsQkosS0FESjtBQXdCSCxDOztBQUdELElBQU1OLFNBQVM7QUFDWEMsVUFBTTtBQUNGUyxpQkFBUTtBQUROLEtBREs7O0FBS1hSLFlBQVE7QUFDSlMsY0FBSztBQURELEtBTEc7O0FBU1hSLFdBQU87QUFDSFMsZUFBTyxPQURKO0FBRUhDLHFCQUFhLE9BRlY7QUFHSEMsZUFBTTtBQUhILEtBVEk7O0FBZVhOLGlCQUFhO0FBQ1RPLGdCQUFRLGdCQURDO0FBRVRELGVBQU8sT0FGRTtBQUdURSxnQkFBUSxPQUhDO0FBSVRKLGVBQU07QUFKRyxLQWZGOztBQXNCWFIsYUFBUztBQUNMTyxjQUFLO0FBREE7QUF0QkUsQ0FBZiIsImZpbGUiOiJhY2NvdW50LmpzIiwic291cmNlUm9vdCI6IkQ6L2Rldi9OZXhUaHJvbmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vZGF0YS9wb3N0cyc7XHJcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe3VybDoge3F1ZXJ5OiB7aWR9fX0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBfLmZpbmQocG9zdHMsIHsgaWQ6IGlkIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5tYWluKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaGVhZGVyKX0+XHJcbiAgICAgICAgICAgIDxoMz4gTkVYVEhST05FIC0gVEhFIFJFVkVMQVRJT04gT0YgR0FNRSBPRiBUSFJPTkVTJyBDSEFSQUNURVJTIDwvaDM+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5wYW5lbCl9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmhlYWRpbmcpfT5cclxuICAgICAgICAgICAgICAgICAgICBDaGFyYWN0ZXI6e2l0ZW0uY29kZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhbCBOYW1lOntpdGVtLnJlYWxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyZWYgRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uc3Rvcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnNpbmdsZVBob3RvKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5kaXNwbGF5X3NyY30gYWx0PXtpdGVtLnJlYWxOYW1lfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0vPiAgXHJcbiAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgcGFkZGluZzonNTBweCdcclxuICAgIH0sXHJcblxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgZm9udDonMTVweCBNb25hY28nXHJcbiAgICB9LFxyXG5cclxuICAgIHBhbmVsOiB7XHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcxNDBweCcsXHJcbiAgICAgICAgd2lkdGg6JzMwMHB4J1xyXG4gICAgfSxcclxuXHJcbiAgICBzaW5nbGVQaG90bzoge1xyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjOTk5JyxcclxuICAgICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICAgICAgZmxvYXQ6J2xlZnQnXHJcbiAgICB9LFxyXG5cclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgICBmb250OicxNXB4IE1vbmFjbydcclxuICAgIH1cclxufSJdfQ==