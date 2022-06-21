import { Input, Modal } from "antd"

const ExercieAddModal = (props) => {
    return <Modal
        title="Новая запись в дневнике упражнений"
        visible={props.visible}
        onOk={props.addNewExercise}
        onCancel={props.hideModal}
        okText="Создать"
        cancelText="Отмена"
    >
        <Input  ref={props.exercieText} placeholder="Введите упраженение" />
    </Modal>
}
export default ExercieAddModal