import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default function Editor({text, setText}) {
    return (
      <Container style={styles.editor}>
          <Row>
              <h1 style={styles.title}>Editor</h1>
          </Row>
            <Row>
                <Col>
                    <textarea
                        id="editor"
                        style={styles.textArea}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                </Col>
            </Row>
      </Container>
    );
}

const styles = {

    editor: {
        // width: '50%',
        // height: '100%',
        border: '1px solid #DFD0B8',
        color: '#DFD0B8',
        backgroundColor: '#3C5B6F',
    },
    title: {
        textAlign: 'center',
        color: 'black',
    },
    textArea: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
}