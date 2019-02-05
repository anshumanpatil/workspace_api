import { Switch, Route } from 'react-router';
import React, {Component} from 'react';
import _extends from '@babel/runtime/helpers/esm/extends';
import store from '../store';

// TODO - Read - https://medium.com/bucharestjs/upgrading-a-create-react-app-project-to-a-ssr-code-splitting-setup-9da57df2040a


// const asyncComponent = (importComponent) => {
//   return class extends Component {
//       state = {
//           component: null
//       }

//       componentDidMount() {
//           importComponent()
//               .then(cmp => {
//                   this.setState({component: cmp.default});
//               });
//       }

//       render() {
//           const C = this.state.component;
//           return C ? <C {...this.props}/> : null;
//       }
//   }
// };

function renderProtected(routes, extraProps, switchProps) {
    
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }
  
  return routes ? React.createElement(Switch, switchProps, routes.map(function (route, i) {
    return React.createElement(Route, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        let __state = store.getState();
        let __cleanRoute = Object.assign({}, route);
        
        // const __asyncCompo  = asyncComponent(() => {
        //     return import(route.asyncPath);
        // });

        let __component = route.component;




        delete __cleanRoute.isPublic;
        delete __cleanRoute.redirectNonPublic;
        if(route.isPublic){
          return React.createElement(__component, _extends({}, props, extraProps, {
            route: __cleanRoute
          }));
        }else{
          if(__state.hasOwnProperty('user') && !(__state['user'].hasOwnProperty('token'))){
            __component = route.redirectNonPublic;
          }
          // if(__state.hasOwnProperty('user') && __state['user'].hasOwnProperty('token')){
          //   return React.createElement(__component, _extends({}, props, extraProps, {
          //     route: __cleanRoute
          //   }));
          // }else{
            return React.createElement(__component, _extends({}, props, extraProps, {
              route: __cleanRoute
            }));
          // }
        }
      }
    });
  })) : null;
}

export { renderProtected };
