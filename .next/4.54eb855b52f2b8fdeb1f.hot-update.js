webpackHotUpdate(4,{

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(106);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _posts = __webpack_require__(123);
	
	var _posts2 = _interopRequireDefault(_posts);
	
	var _css = __webpack_require__(105);
	
	var _lodash = __webpack_require__(126);
	
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
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/account"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/account") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9EOi9kZXYvTmV4VGhyb25lL3BhZ2VzL2FjY291bnQuanM/NDU2YSJdLCJuYW1lcyI6WyJfIiwiaWQiLCJ1cmwiLCJxdWVyeSIsIml0ZW0iLCJmaW5kIiwic3R5bGVzIiwibWFpbiIsImhlYWRlciIsInBhbmVsIiwiaGVhZGluZyIsImNvZGVOYW1lIiwicmVhbE5hbWUiLCJzdG9yeSIsInNpbmdsZVBob3RvIiwiZGlzcGxheV9zcmMiLCJwYWRkaW5nIiwiZm9udCIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0tBQVlBLEM7Ozs7OzttQkFFRyxnQkFBMEI7QUFBQSxTQUFWQyxFQUFVLFFBQXhCQyxHQUF3QixDQUFsQkMsS0FBa0IsQ0FBVkYsRUFBVTs7QUFDckMsU0FBTUcsT0FBT0osRUFBRUssSUFBRixrQkFBYyxFQUFFSixJQUFJQSxFQUFOLEVBQWQsQ0FBYjs7QUFFQSxZQUNJO0FBQUE7QUFBQSxXQUFLLFdBQVcsZ0JBQU1LLE9BQU9DLElBQWIsQ0FBaEI7QUFDSTtBQUFBO0FBQUEsZUFBSyxXQUFXLGdCQUFNRCxPQUFPRSxNQUFiLENBQWhCO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFVBREo7QUFJSTtBQUFBO0FBQUEsZUFBSyxXQUFXLGdCQUFNRixPQUFPRyxLQUFiLENBQWhCO0FBQ0k7QUFBQTtBQUFBLG1CQUFJLFdBQVcsZ0JBQU1ILE9BQU9JLE9BQWIsQ0FBZjtBQUFBO0FBQ2VOLHNCQUFLTyxRQURwQjtBQUVJLDBEQUZKO0FBR0ksMERBSEo7QUFBQTtBQUllUCxzQkFBS1EsUUFKcEI7QUFLSSwwREFMSjtBQU1JLDBEQU5KO0FBQUE7QUFRSSwwREFSSjtBQVNJLDBEQVRKO0FBVUk7QUFBQTtBQUFBO0FBQU9SLDBCQUFLUztBQUFaO0FBVko7QUFESixVQUpKO0FBa0JJO0FBQUE7QUFBQSxlQUFLLFdBQVcsZ0JBQU1QLE9BQU9RLFdBQWIsQ0FBaEI7QUFDSSxvREFBSyxLQUFLVixLQUFLVyxXQUFmLEVBQTRCLEtBQUtYLEtBQUtRLFFBQXRDLEVBQWdELE9BQU8sR0FBdkQsRUFBNEQsUUFBUSxHQUFwRTtBQURKO0FBbEJKLE1BREo7QUF3QkgsRTs7QUFHRCxLQUFNTixTQUFTO0FBQ1hDLFdBQU07QUFDRlMsa0JBQVE7QUFETixNQURLOztBQUtYUixhQUFRO0FBQ0pTLGVBQUs7QUFERCxNQUxHOztBQVNYUixZQUFPO0FBQ0hTLGdCQUFPLE9BREo7QUFFSEMsc0JBQWEsT0FGVjtBQUdIQyxnQkFBTTtBQUhILE1BVEk7O0FBZVhOLGtCQUFhO0FBQ1RPLGlCQUFRLGdCQURDO0FBRVRELGdCQUFPLE9BRkU7QUFHVEUsaUJBQVEsT0FIQztBQUlUSixnQkFBTTtBQUpHLE1BZkY7O0FBc0JYUixjQUFTO0FBQ0xPLGVBQUs7QUFEQTtBQXRCRSxFQUFmIiwiZmlsZSI6IjQuNTRlYjg1NWI1MmYyYjhmZGViMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwb3N0cyBmcm9tICcuLi9kYXRhL3Bvc3RzJztcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2Nzcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7dXJsOiB7cXVlcnk6IHtpZH19fSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IF8uZmluZChwb3N0cywgeyBpZDogaWQgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLm1haW4pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkZXIpfT5cclxuICAgICAgICAgICAgPGgzPiBORVhUSFJPTkUgLSBUSEUgUkVWRUxBVElPTiBPRiBHQU1FIE9GIFRIUk9ORVMnIENIQVJBQ1RFUlMgPC9oMz4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnBhbmVsKX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaGVhZGluZyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIENoYXJhY3Rlcjp7aXRlbS5jb2RlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBSZWFsIE5hbWU6e2l0ZW0ucmVhbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJlZiBEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5zdG9yeX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDE+ICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuc2luZ2xlUGhvdG8pfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmRpc3BsYXlfc3JjfSBhbHQ9e2l0ZW0ucmVhbE5hbWV9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfS8+ICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1haW46IHtcclxuICAgICAgICBwYWRkaW5nOic1MHB4J1xyXG4gICAgfSxcclxuXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBmb250OicxNXB4IE1vbmFjbydcclxuICAgIH0sXHJcblxyXG4gICAgcGFuZWw6IHtcclxuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzE0MHB4JyxcclxuICAgICAgICB3aWR0aDonMzAwcHgnXHJcbiAgICB9LFxyXG5cclxuICAgIHNpbmdsZVBob3RvOiB7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLFxyXG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgIGhlaWdodDogJzUwMHB4JyxcclxuICAgICAgICBmbG9hdDonbGVmdCdcclxuICAgIH0sXHJcblxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICAgIGZvbnQ6JzE1cHggTW9uYWNvJ1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRDovZGV2L05leFRocm9uZS9wYWdlcy9hY2NvdW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==