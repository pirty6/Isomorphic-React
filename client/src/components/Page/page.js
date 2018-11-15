//@flow
import * as React from 'react';

export type StoreProps = {
  title: string,
};
export type Actions = {};

type Props = StoreProps & Actions;
type State = {};
type Default = {
  className: string,
};

let url = window.location.href;
//url = url.replace(/\#/g, '');
//url = url.substring(0, url.length - 1);
// url = url.split("#").pop()
console.log(url+'.jpg');
//let newUrl = url.split("/").pop();
//console.log(newUrl);

class Header extends React.PureComponent<Props, State> {
  static defaultProps: Default = {
    className: '',
  };
  render() {
    return (
      <div className='header'>
        <img src={ url + '.jpg'} alt=''/>
      </div>
    );
  }
}

export default Header;
