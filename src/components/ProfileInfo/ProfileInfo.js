import React from 'react';
import Typography from "@material-ui/core/Typography";

const ProfileInfo = (props) => {
    return (
        <div>
            <Typography variant="body1" color="primary">
                {`Olá, ${props.user.name}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
                {props.user.email}
            </Typography>
        </div>
    );
};

export default ProfileInfo;