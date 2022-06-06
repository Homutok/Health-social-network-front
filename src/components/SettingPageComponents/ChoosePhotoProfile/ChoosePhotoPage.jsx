import React, { useEffect, useState } from 'react';
import { Space } from "antd";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import ChoosePhotoComponent from './ChoosePhotoComponent';
import ChoosePhotoButton from './ChoosePhotoButton';


const ChoosePhotoPage = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        props.getPhotoData()
        setImages(props.images);
    }, [props.isLoad])
    
    return <PageBreadCrumb
        parent='Настройки'
        child='Выбор фото'
    >
        <ChoosePhotoButton />
        <Space direction='horizontal' wrap style={{ width: '100%' }}>
            {
                images.map((image) => (
                    <ChoosePhotoComponent image={image} key={image.id}/>
                ))
            }
        </Space>
    </PageBreadCrumb>;
}
export default ChoosePhotoPage