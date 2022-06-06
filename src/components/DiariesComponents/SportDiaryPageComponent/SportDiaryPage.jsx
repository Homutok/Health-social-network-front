import { Alert, Calendar, Table } from "antd";
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";



const SportDiaryForm = () => {
    const columns = [
        {
            title: 'Пнонедельник',
            dataIndex: 'Monday',
        },
        {
            title: 'Вторник.',
            dataIndex: 'Tuesday',
        },
        {
            title: 'Среда',
            dataIndex: 'Wednesday',
        },
        {
            title: 'Четверг',
            dataIndex: 'Thursday',
        },
        {
            title: 'Пятница',
            dataIndex: 'Friday',
        },
        {
            title: 'Суббота',
            dataIndex: 'Saturday',
        },
        {
            title: 'Воскресенье',
            dataIndex: 'Sunday',
        },
    ];
    const data = [
        {
          key: '1',
          Monday: <Alert type="success" message='Бег'/>,
          Friday: <Alert message='Плавание'></Alert>,
          Sunday: 'Тяжелая атлетика',
        },
        {
            key: '2',
            Wednesday: 'Бег',
            Tuesday: <Alert type="success" message='Плавание'></Alert>,
            Saturday: 'Тяжелая атлетика',
        },
        {
            key: '3',
            Wednesday: 'Бег',
            Friday: 'Плавание',
            Saturday: <Alert message='Плавание'></Alert>,
        },
        {
            key: '4',
            Monday: 'Бег',
            Friday: <Alert message='Плавание'></Alert>,
            Saturday: 'Тяжелая атлетика',
        },
    ];
    return <PageBreadCrumb
        parent='Дневники'
        child='Дневник тренировок'
    >
        <Table columns={columns} dataSource={data}/>;
    </PageBreadCrumb>;
}
export default SportDiaryForm