import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Users from "./UsersTable";
import Modal from "./Modal";
import { Row, Col } from "antd";

class App extends React.Component {
  state = {
    blockedUsers: []
  };

  blockUser = content => {
    if (this.state.blockedUsers.indexOf(content.id) === -1) {
      this.setState(state => {
        return {
          blockedUsers: [...state.blockedUsers].concat([content.id])
        };
      });
      return;
    } else {
      const filtredUsers = this.state.blockedUsers.filter(item => {
        return item !== content.id;
      });
      this.setState(state => {
        return {
          blockedUsers: filtredUsers
        };
      });
    }
  };

  render() {
    const { blockedUsers = [] } = this.state;

    return (
      <div className="App">
        <Modal blockUser={this.blockUser} blockedUsers={blockedUsers} />
        <Row>
          <Col span={12} offset={6}>
            <Users blockedUsers={blockedUsers} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
