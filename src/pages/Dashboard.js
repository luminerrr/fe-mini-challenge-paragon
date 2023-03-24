import Chat from "../components/Chat";
import Chatroom from "../components/Chatroom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard(){

    return(
        <>
        <Navbar />
        <Sidebar />
       
        <Chatroom />
        <Chat />

        </>
    )
}