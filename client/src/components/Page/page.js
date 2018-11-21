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

// console.log(jpg);
class Header extends React.PureComponent<Props, State> {
  static defaultProps: Default = {
    className: '',
  };
  render() {
    return (
      <div className='header'>
        <img src={url+'.jpg'} alt=""/>
        <img src={url+'.png'} alt=""/>

      </div>
    );
  }
}

export default Header;
