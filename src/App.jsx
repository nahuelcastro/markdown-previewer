import React from 'react';
import { useState } from 'react';
// import marked from 'marked';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {

    const [text, setText] = useState('init text');
    // const [markdown, setMarkdown] = useState('init markdown');

    const createMarkUp = (val) => {
    return { __html: marked(val) }
    }

  return (
      <div style={styles.masterContainer}>
    <Container fluid="md" style={styles.container}>
        <Row>
            <Col>
                <h1>Columna 1</h1>
            </Col>
            <Col>
                <h1>Columna 2</h1>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Editor text={text} setText={setText} />
            </Col>
            <Col md={6}>
                <Previewer text={marked(text)}/>
                <div id="previewer" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
                {/*    https://marked.js.org/using_pro#renderer*/}
            </Col>
        </Row>
    </Container>
      </div>
  );
}

export default App;

// styles

const styles = {
    masterContainer: {
        backgroundColor: '#87b5b5',
        height: '100vh',
      },
      previewer: {
        width: '50%',
        height: '100%',
        border: '1px solid black',
      }
};
