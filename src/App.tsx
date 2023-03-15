import React, { useState } from 'react';

import { Layout} from 'antd';
import { SidebarCustom } from './layout/SideBarCustom/SidebarCustom'
import HeaderCustom from './layout/HeaderCustom'
import ContentCustom from './layout/ContentCustom'


const App: React.FC = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    
  
    
    return (
        <Layout>
            
            <SidebarCustom  sidebarIsOpen={sidebarIsOpen} setSidebarOpen={setSidebarOpen}/>
           
            <Layout className="site-layout">
                
                <HeaderCustom  sidebarIsOpen={sidebarIsOpen} setSidebarOpen={setSidebarOpen} />
         
                {/*</Header>*/}
                <ContentCustom >
                    <div>SOme texty</div>
                </ContentCustom>
    
            </Layout>
        </Layout>
    );
};

export default App;