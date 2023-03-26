import { useState } from "react";
import ChatList from "../components/ChatList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StoreList from "../components/StoreList";

export default function Dashboard(){
    const [selection, setSelection] = useState(true)

    
    return(<>
        <Navbar />
        <Sidebar selection={selection} setSelection={setSelection}/>
        {selection ? <ChatList /> : <StoreList />}
        
    </>)


}