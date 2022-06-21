import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Form, Input, Modal, Row, Space } from 'antd';
import { useEffect } from 'react';
import TagSelectItem from './TagSelectItem';

const NewPostModal = (props) => {
    const { TextArea } = Input;

    useEffect(() => {

    }, [props.tagSelected])
    return <Modal
        title="Новая запись в блоге"
        visible={props.visible}
        onOk={props.completeNewPost}
        onCancel={props.hideModal}
        okText="Создать"
        cancelText="Отмена"
    >
        <Form layout="vertical">
            <Form.Item label='Название'>
                <Input ref={props.label} placeholder="Введите название" />
            </Form.Item>
            <Form.Item label='Текст'>
                <TextArea ref={props.text} placeholder="Вводите текст" />
            </Form.Item>
            <Form.Item label='Добавление тэгов'>
                <TagSelectItem
                    data={props.tagSearch}
                    selected={props.tagSelected}
                    search={props.changeSearch}
                    select={props.selectSearch}
                />
            </Form.Item>
            <Form.Item label='Тэги'>
                {
                    props.tagSelected.map((tag, index) =>
                        <Button shape="round" type="primary" key={tag.id} onClick={() => props.deletTag(index)}> {tag.value} <CloseCircleFilled /></Button>
                    )
                }
            </Form.Item>
        </Form>

    </Modal>

}
export default NewPostModal