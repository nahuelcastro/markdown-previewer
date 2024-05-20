import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Previewer({text}) {
    return (
      <Container style={styles.previewer}>
        <Row>
              <h1 style={styles.title}>Previewer</h1>
          </Row>
            <Row>
                <Col>
                    <textarea
                        id="preview"
                        disabled={true}
                        value={text}
                        style={styles.textview}
                    />
                </Col>
            </Row>
      </Container>
    );
}

const styles = {
    previewer: {
        // width: '50%',
        // height: '100%',
        border: '1px solid blue',
        backgroundColor: '#3C5B6F',
    },
    title: {
        textAlign: 'center',
        color: 'black',
    },
    textview: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
}

