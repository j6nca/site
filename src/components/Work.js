import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Projects from '../data/projects.json';

function Work(){
    return(
            <Container>
                <Row>
                <Col><h1 className='display-4'>work</h1></Col>
                </Row>
                {Projects.map((project, index)=>{
                    return <Row>
                    <Col xl className='project' onClick={()=> window.open(project.url)}>
                        <div style={{backgroundColor:'#1DA1F2',height:'250px',width:'340px'}}></div>
                    </Col>
                    <Col xl>
                        <h2>{project.title}</h2>
                        <p className='lead'>{project.desc}</p>
                        <ul className="tagbox">
                            {project.tags.map((tag, index)=>{
                                return <li className="tag">{tag}</li>
                            })}
                        </ul>
                    </Col>
                </Row>
                })}
            </Container>
    );
}
export default Work;