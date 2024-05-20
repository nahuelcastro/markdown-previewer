import React from 'react';
import {useState} from 'react';
import {initialText} from "./utils/constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {

    const [text, setText] = useState(initialText);
    // const [markdown, setMarkdown] = useState('init markdown');

    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col md={6}>
                        <Editor text={text} setText={setText}/>
                    </Col>
                    <Col md={6}>
                        <Previewer text={text}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;