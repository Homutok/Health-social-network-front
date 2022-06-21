import { Input, Modal, Row, Space } from "antd"
import { useEffect } from "react"

const HealthAddModal = (props) => {
    useEffect(() => {

    }, [props.view])
    return <Modal
        visible={props.view}
        onOk={props.createHealth}
        onCancel={props.hideModal}
        okText="Создать"
        cancelText="Отмена"
    >
        <Space style={{
            width: '90%'
        }}>
            <Input ref={props.steps} type="number" placeholder="Шаги" suffix='шагов' />
            <Input ref={props.weight} type="number" placeholder="Вес" suffix='кг' />
        </Space>
        <Space style={{
            width: '90%'
        }}>
            <Input ref={props.pulse} type="number" placeholder="Пульс" suffix='уд/мин.' />
            <Input ref={props.dream} type="number" placeholder="Сон" suffix='час' />
        </Space>

    </Modal>
}
export default HealthAddModal