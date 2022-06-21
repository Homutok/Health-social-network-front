import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useEffect, useRef, useState } from "react";
import HealthAddModal from "./HealthAddModal";

const HealthAddCard = (props) => {
    const [visible, setVisible] = useState(false)
    const steps = useRef()
    const weight = useRef()
    const pulse = useRef()
    const dream = useRef()

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const createHealth = () => {
        props.posthealthInfo(
            steps.current.input.value,
            weight.current.input.value,
            pulse.current.input.value,
            dream.current.input.value
        )
        hideModal()
    };

    useEffect(() => {
    }, [])

    return <Card>
        <Button shape="round" type="primary" onClick={() => showModal()} >
            <PlusCircleOutlined />
        </Button >
        <HealthAddModal
            steps={steps}
            weight={weight}
            pulse={pulse}
            dream={dream}
            createHealth={createHealth}
            showModal={showModal}
            hideModal={hideModal}
            view={visible} />
    </Card>
}
export default HealthAddCard