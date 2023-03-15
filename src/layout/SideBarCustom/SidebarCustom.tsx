import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
const {  Sider } = Layout;


export const SidebarCustom = (props: any) => {
    
    // const {collapsed, setCollapsed} = props
    
    // const [collapse, setCollapse] = useState(false)
    
    console.log('>>collapse', props.collapsed)
    
    return (
    
        <Sider trigger={null} collapsible={true} collapsed={props.sidebarIsOpen} onCollapse={() => props.setSidebarOpen(!props.sidebarIsOpen)}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}