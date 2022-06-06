import { Card } from 'antd';
import React, { useEffect, useState } from 'react';

const ChoosePhotoComponent = (props) => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        setImage(props.image);
    }, [props.image])

    return <Card
        hoverable
        style={{
            width: 100,
            marginTop: 16,
        }}
        cover={
            <img
                alt="example"
                src={image.person_photo}
                style={{
                    width:'100%',
                }}
            />
        }
    >
    </Card>;
}
export default ChoosePhotoComponent