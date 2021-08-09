import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';

const Developer = () => {
    return (
        <div  className="developer">
            <div className="topTitleMenu">
            <h1>Daniel<sub>Naranjo</sub></h1>
            <div className="topRigthLinks">
                <MenuBookIcon />
                <span>&ensp;Resume&ensp;</span>
                <Divider orientation="vertical" flexItem style={{width: "2px", backgroundColor:"white"}} />
                <div className ="gridIconsTop">
                <GitHubIcon style={{fontSize: "1.8rem"}}/>
                <LinkedInIcon style={{fontSize: "2rem"}}/>
                <TwitterIcon style={{fontSize: "2rem"}}/>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Developer;