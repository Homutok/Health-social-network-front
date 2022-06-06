import { Breadcrumb } from 'antd';
import AuthVerifyContainer from '../AuthComponents/AuthVerifyComponent/AuthVerifyContainer';


const PageBreadCrumb = (props) => {
    return <><Breadcrumb
        style={{
            margin: '16px 0',
        }}
    >
        <Breadcrumb.Item>{props.parent}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.child}</Breadcrumb.Item>
    </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
                padding: 24,
                minHeight: 360,
            }}
        >
            <AuthVerifyContainer/>
            {props.children}

        </div>
    </>;
}
export default PageBreadCrumb