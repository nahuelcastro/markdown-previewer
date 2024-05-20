import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Editor({text, setText}) {
    return (
        <>
            <Card bg={"dark"} style={styles.card}>
                <Card.Header>
                    <h1 style={styles.title}>Editor</h1>
                </Card.Header>
                <Card.Body>
                    <Col>
                      <textarea
                          id="editor"
                          style={styles.textArea}
                          onChange={(e) => setText(e.target.value)}
                          autoFocus={true}
                          value={text}
                          maxLength={100000}

                      />
                    </Col>
                </Card.Body>
            </Card>
        </>
    );
}

const styles = {
    card: {
        height: '100%',
        marginTop: '50px',
    },
    title: {
        textAlign: 'center',
        color: 'white',
    },
    textArea: {
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
    }
}