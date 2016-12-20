'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('D:\\dev\\NexThrone\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('D:\\dev\\NexThrone\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('D:\\dev\\NexThrone\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('D:\\dev\\NexThrone\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('D:\\dev\\NexThrone\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('D:\\dev\\NexThrone\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('D:\\dev\\NexThrone\\node_modules\\next\\dist\\lib\\css.js');

var _link = require('D:\\dev\\NexThrone\\node_modules\\next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
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
                    'table',
                    { className: (0, _css.style)(styles.table) },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { className: (0, _css.style)(styles.th) },
                                'Charcter'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: (0, _css.style)(styles.th) },
                                'Real Name'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.props.posts.map(function (post, i) {
                            return _react2.default.createElement(
                                'tr',
                                { key: i },
                                _react2.default.createElement(
                                    'td',
                                    { className: (0, _css.style)(styles.td) },
                                    post.codeName
                                ),
                                _react2.default.createElement(
                                    'td',
                                    { className: (0, _css.style)(styles.td) },
                                    _react2.default.createElement(
                                        _link2.default,
                                        { href: '/account?id=' + post.id },
                                        post.realName
                                    )
                                )
                            );
                        })
                    )
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps() {
            return { posts: _posts2.default };
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
    th: {
        background: '#00cccc',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: '12px',
        padding: '12px 35px'
    },

    header: {
        font: '15px Monaco',
        textAlign: 'center'
    },

    table: {
        fontFamily: 'Arial',
        margin: '25px auto',
        borderCollapse: 'collapse',
        border: '1px solid #eee',
        borderBottom: '2px solid #00cccc'
    },

    td: {
        color: '#999',
        border: '1px solid #eee',
        padding: '12px 35px',
        borderCollapse: 'collapse'
    },

    list: {
        padding: '50px',
        textAlign: 'center'
    },

    photo: {
        display: 'inline-block'
    },

    photoLink: {
        color: '#333',
        verticalAlign: 'middle',
        cursor: 'pointer',
        background: '#eee',
        display: 'inline-block',
        width: '250px',
        height: '250px',
        lineHeight: '250px',
        margin: '10px',
        border: '2px solid transparent',
        ':hover': {
            borderColor: 'blue'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZcXE5leFRocm9uZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImhlYWRlciIsInRhYmxlIiwidGgiLCJwcm9wcyIsInBvc3RzIiwibWFwIiwicG9zdCIsImkiLCJ0ZCIsImNvZGVOYW1lIiwiaWQiLCJyZWFsTmFtZSIsIkNvbXBvbmVudCIsImJhY2tncm91bmQiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsInBhZGRpbmciLCJmb250IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwibGlzdCIsInBob3RvIiwiZGlzcGxheSIsInBob3RvTGluayIsInZlcnRpY2FsQWxpZ24iLCJjdXJzb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBT2E7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVyxnQkFBTUEsT0FBT0MsTUFBYixDQUFoQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBTyxXQUFXLGdCQUFNRCxPQUFPRSxLQUFiLENBQWxCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtDQUFJLFdBQVcsZ0JBQU1GLE9BQU9HLEVBQWIsQ0FBZjtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUEsa0NBQUksV0FBVyxnQkFBTUgsT0FBT0csRUFBYixDQUFmO0FBQUE7QUFBQTtBQUZKO0FBREoscUJBREo7QUFPSTtBQUFBO0FBQUE7QUFFUSw2QkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxtQ0FDakI7QUFBQTtBQUFBLGtDQUFJLEtBQUtBLENBQVQ7QUFDSTtBQUFBO0FBQUEsc0NBQUksV0FBVyxnQkFBTVIsT0FBT1MsRUFBYixDQUFmO0FBQWtDRix5Q0FBS0c7QUFBdkMsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUksV0FBVyxnQkFBTVYsT0FBT1MsRUFBYixDQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFNLHVCQUFxQkYsS0FBS0ksRUFBaEM7QUFBd0NKLDZDQUFLSztBQUE3QztBQURKO0FBRkosNkJBRGlCO0FBQUEseUJBQXJCO0FBRlI7QUFQSjtBQUpKLGFBREo7QUEyQkg7OzswQ0FoQ3dCO0FBQ3JCLG1CQUFPLEVBQUNQLHNCQUFELEVBQVA7QUFDSDs7O0VBSHdCLGdCQUFNUSxTOzs7OztBQW9DbkMsSUFBTWIsU0FBUztBQUNYRyxRQUFJO0FBQ0FXLG9CQUFZLFNBRFo7QUFFQUMsZUFBTyxNQUZQO0FBR0FDLHVCQUFlLFdBSGY7QUFJQUMsa0JBQVUsTUFKVjtBQUtBQyxpQkFBUTtBQUxSLEtBRE87O0FBU1hqQixZQUFRO0FBQ0prQixjQUFNLGFBREY7QUFFSkMsbUJBQVU7QUFGTixLQVRHOztBQWNYbEIsV0FBTztBQUNIbUIsb0JBQVksT0FEVDtBQUVIQyxnQkFBUSxXQUZMO0FBR0hDLHdCQUFnQixVQUhiO0FBSUhDLGdCQUFRLGdCQUpMO0FBS0hDLHNCQUFhO0FBTFYsS0FkSTs7QUFzQlhoQixRQUFJO0FBQ0FNLGVBQU8sTUFEUDtBQUVBUyxnQkFBUSxnQkFGUjtBQUdBTixpQkFBUyxXQUhUO0FBSUFLLHdCQUFlO0FBSmYsS0F0Qk87O0FBNkJYRyxVQUFNO0FBQ0ZSLGlCQUFTLE1BRFA7QUFFRkUsbUJBQVU7QUFGUixLQTdCSzs7QUFrQ1hPLFdBQU87QUFDSEMsaUJBQVE7QUFETCxLQWxDSTs7QUFzQ1hDLGVBQVc7QUFDUGQsZUFBTyxNQURBO0FBRVBlLHVCQUFlLFFBRlI7QUFHUEMsZ0JBQVEsU0FIRDtBQUlQakIsb0JBQVksTUFKTDtBQUtQYyxpQkFBUyxjQUxGO0FBTVBJLGVBQU8sT0FOQTtBQU9QQyxnQkFBUSxPQVBEO0FBUVBDLG9CQUFZLE9BUkw7QUFTUFosZ0JBQVEsTUFURDtBQVVQRSxnQkFBUSx1QkFWRDtBQVdQLGtCQUFVO0FBQ05XLHlCQUFZO0FBRE47QUFYSDtBQXRDQSxDQUFmIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L2Rldi9OZXhUaHJvbmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vZGF0YS9wb3N0cyc7XHJcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7cG9zdHM6cG9zdHN9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmhlYWRlcil9PlxyXG4gICAgICAgICAgICAgICAgPGgzPiBORVhUSFJPTkUgLSBUSEUgUkVWRUxBVElPTiBPRiBHQU1FIE9GIFRIUk9ORVMnIENIQVJBQ1RFUlMgPC9oMz4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy50YWJsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnRoKX0+Q2hhcmN0ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnRoKX0+UmVhbCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGQpfT57cG9zdC5jb2RlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWNjb3VudD9pZD0ke3Bvc3QuaWR9YH0gPntwb3N0LnJlYWxOYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+ICAgICAgICBcclxuICAgICAgICAgICAgPC90YWJsZT4gICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0aDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDBjY2NjJyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLCBcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgIHBhZGRpbmc6JzEycHggMzVweCdcclxuICAgIH0sXHJcblxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgICAgZm9udDogJzE1cHggTW9uYWNvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcclxuICAgIH0sXHJcblxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgIG1hcmdpbjogJzI1cHggYXV0bycsXHJcbiAgICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTonMnB4IHNvbGlkICMwMGNjY2MnXHJcbiAgICB9LFxyXG5cclxuICAgIHRkOiB7XHJcbiAgICAgICAgY29sb3I6ICcjOTk5JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2VlZScsXHJcbiAgICAgICAgcGFkZGluZzogJzEycHggMzVweCcsXHJcbiAgICAgICAgYm9yZGVyQ29sbGFwc2U6J2NvbGxhcHNlJ1xyXG4gICAgfSxcclxuXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgcGFkZGluZzogJzUwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuXHJcbiAgICBwaG90bzoge1xyXG4gICAgICAgIGRpc3BsYXk6J2lubGluZS1ibG9jaydcclxuICAgIH0sXHJcblxyXG4gICAgcGhvdG9MaW5rOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMzMzJyxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNTBweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjonYmx1ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19