import React, { useContext } from "react";
import { ChatEngine } from "react-chat-engine";
import Navbar from "../Navbar";
import ChatHeader from "../ChatHeader";
import { projectID } from "../data";
import { Context } from "../data/context";

const ChatsPage = () => {
    const { currentUser } = useContext(Context);
    console.log(currentUser);
    console.log(projectID);
    return (
        <div>
            <Navbar />

            {
                // You need the creds correct before rendering Chat Engine
                currentUser.username && currentUser.secret && (
                    <ChatEngine
                        height="calc(100vh - 64px)"
                        projectID={projectID}
                        userName={currentUser.username}
                        userSecret={currentUser.secret}
                        // renderChatHeader={() => <ChatHeader />}
                    />
                )
            }
        </div>
    );
};

export default ChatsPage;
