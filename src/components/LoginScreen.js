import React, { Component } from 'react';
import {Grid, Segment,Button, Header , Icon} from 'semantic-ui-react'
import styled from  'styled-components';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
`

export default class LoginScreen extends Component{
  static defalutProps = {
    onGoogleLogin : () => {}
  }
  // onGoogleLogin에 프롬이 없을때 위 함수가 실행된다..문서화의 의미도 크다.
  render(){
    return(
      <FullHeightGrid centered verticalAlign='middle'>
          <Grid.Column style={{width: '280px'}}>
            <Segment stacked textAlign='center' padded='very' color='red'>
              <Header as='h1'>로그인</Header>
              <Button fluid color='google plus' onClick={this.props.onGoogleLogin}>
                  <Icon name='google plus' />구글로 로그인
              </Button>
              <Button fluid color='twitter' style={{marginTop: '10px'}}>
                   <Icon name='twitter' />트위터로 로그인
              </Button>
            </Segment>
          </Grid.Column>
      </FullHeightGrid>
    )
  }
}
