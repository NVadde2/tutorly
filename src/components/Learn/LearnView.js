import React from "react";
import { useState, useEffect } from "react";
import Api from "../../api";
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

function LearnView() {
    const [tags, setTags] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const api = new Api();

    useEffect(() => {
        getTags();
    },[]);

    function getTags() {
        let tags = []
        let topicLinks = []
        api.getTags().then(result => {
            let data = result.data._embedded.tags
            Object.keys(data).forEach(function(key) {
                let tag = {}
                let val = data[key]
                tag.tagId = val.tagId
                tag.tagName = val.tagName
                topicLinks.push(val._links.topics.href)
                tags.push(tag)
            })
            setTags(tags)
            setLoading(false)
            console.log(tags)
            console.log(topicLinks)
        })
    }

    if(isLoading) {
        return (
            <div style={{textAlign: "center", padding: "10px"}}>
                <h1>Loading..</h1>
            </div>
        ) 
    }
    return (
        <>
        {tags.map((tag) =>
            <Link style={{textDecoration:"None"}} to={`/fp/course/${tag.tagId}`} className="listrow">
                <ListGroup key={tag.tagId}>
                    <ListGroup.Item>{tag.tagName}</ListGroup.Item>
                </ListGroup>
            </Link>
        )}   
        </>
    )
}

export default LearnView;