import Background from "../components/background.jsx";
import {Page, Content} from "../components/page.jsx"



function Dashboard(){


    return(
        <Background>
            <Page>
                <Content>
                    <div className="w-[16rem] h-[200px] bg-gray-200 rounded-lg "></div>
                    <div className="w-[16rem] h-[200px] bg-gray-200 rounded-lg "></div>
                    <div className="w-[16rem] h-[200px] bg-gray-200 rounded-lg "></div>
                    <div className="w-[16rem] h-[200px] bg-gray-200 rounded-lg "></div>
                </Content> 
            </Page>
        </Background>
    )
}


export default Dashboard