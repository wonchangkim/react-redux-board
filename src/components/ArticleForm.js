import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSumit: () => {},
  }
  state = {
    title: '',
    content: '',
  }
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }
  render() {
    const { title, content } = this.state;
    const { errorMessage } = this.props;
    // form 스타일을 사용하고 싶고 form의 내장 브라우저 기능을 방지 하고 있을때. as="div" 사용하므로써 div로 렌더링된다.
    // <Form {e => e.preventDefault}></Form>
    return (
      <Form as="div">
        <Form.Input label="제목" placeholder="제목" name="title" value={title} onChange={this.handleChange} />
        <Form.TextArea label="내용" placeholder="내용" name="content" value={content} onChange={this.handleChange} />
        <Form.Button content="전송" onClick={this.handleSubmit} />
        {
          errorMessage && (
            <Message negative>
              <Message.Header>전송할 수 없습니다.</Message.Header>
              <p>{errorMessage}</p>
            </Message>)
        }
      </Form>
    );
  }
}
