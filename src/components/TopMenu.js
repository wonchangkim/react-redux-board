import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


export default class TopMenu extends Component {
  static defaultProps = {
    logoProps: {},
    accountProps: {},
  }
  render() {
    const { logoProps, accountProps } = this.props;
    // const logoProps = {
    //   as: Link,
    //   to : '/list'
    // } 부모로부터 받을 것
    return (
      <Menu>
        <Menu.Item {...logoProps} name="browse">
          게시판
        </Menu.Item>
        <Menu.Menu {...accountProps} position="right">
          <Menu.Item name="signup">
           계정
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
