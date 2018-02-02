import React, { Component } from 'react';
import { List } from 'semantic-ui-react';


export default class ArticleList extends Component {
  static defaultProps = {
    articles: [],
    onMount: () => {},
  }

  // 데이터를 다루는 코드는 프리젠트컴포넌트에서 하지말자.
  render() {
    const { articles } = this.props;
    return (
      <List divided relaxed>
        {
          articles.map(({
            id, title, createdAt, nickName, itemProps = {},
          }) => (
            <List.Item key={id} {...itemProps} >
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>{title} ({nickName})</List.Header>
                <List.Description>{createdAt}</List.Description>
              </List.Content>
            </List.Item>
          ))
        }
      </List>
    );
  }
}
