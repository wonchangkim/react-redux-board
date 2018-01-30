import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Redirect} from 'react-router-dom';
import {Dimmer, Loader} from 'semantic-ui-react';

export default function withAuth(WrappedComponent) {
  return class extends Component { //익명클래스
    state = {
      currentUser: null,
      loading: false,
      redirectToLogin: false
    }
    componentWillMount() {
      const currentUser = firebase
        .auth()
        .currentUser;
      if (currentUser) {
        this.setState({currentUser});
      } else {
        // ? 상태
        this.setState({loading: true})
        const unsubscribe = firebase
          .auth()
          .onAuthStateChanged(user => { // 다른 페이지에서 실행될수 있다.막기위해서는 subscribe를 취소 해줘야한다. firebase doc / auth
            //onAuthStateChanged 는 함수를 반환한다.
            unsubscribe();
            if (user) {
              this.setState({currentUser: user, loading: false})
            } else {
              this.setState({redirectToLogin: true})
            }
          })
      }
    }

    render() {
      if (this.state.redirectToLogin) {
        return (<Redirect to="/login"/>)
      } else if (this.state.loading) {
        return (
          <Dimmer active={this.state.loading}>
            <Loader/>
          </Dimmer>
        )
      } else {
        return (
          <WrappedComponent {...this.props}/> // app.js에서 main으로 넘겨준 prop을 상위감싸고 있는 여기에도 props을 넘겨줘야된다. 어떤 컴포넌트를 감싸서 추가 기능이들어있는 컴포넌트를 정의할때
        // 프리젠테이셔널 을 감싸서 컨테이너 컨포넌트를 만들때...
        )
      }
    }
  }
}
