import React from 'react'
import { Container, Typography } from '@material-ui/core';
import { Data } from './Data'
import { Link } from 'react-router-dom'

const Work = () => {

    const [ data, setData ] = React.useState(Data);
  
    return (
        <Container className="subBox" maxWidth="md">
            <div className="workBox">
                <h1 className="subTitle">Work</h1>
                <div className="workItem">
                    {data.map((item)=> (
                        <div className="workItemGrid">
                            <div className="cardBox">
                                <Typography className="typo cardTitle" variant="h6" component="h3">
                                    {item.title}
                                </Typography>
                                <Typography className="typo cardDesc" color="textSecondary">
                                    {item.desc}
                                </Typography>

                                <Link to={`/Work/${item.id}`}>
                                    <Typography class="workItemTitle">Learn More +</Typography>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Work