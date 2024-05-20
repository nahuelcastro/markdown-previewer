import React from "react";
import {marked} from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import Card from 'react-bootstrap/Card';

marked.setOptions({
    breaks: true,
});

export default function Previewer({text}) {
    return (
        <>
            <Card bg={"dark"} style={styles.card}>
                <Card.Header>
                    <h1 style={styles.title}>Previewer</h1>
                </Card.Header>
                <Card.Body>
                    <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}
                         style={styles.markview}
                    />
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
    markview: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
}

