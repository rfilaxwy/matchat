import React, {Component} from 'react';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default class Landing extends Component {

    render(){
        return(
            
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="userName">Username</Label>
                            <Input type="userName" name="userName" id="userName" placeholder="Username" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">First name</Label>
                            <Input type="password" name="password" id="password" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
        </Form>
        )
    }
}