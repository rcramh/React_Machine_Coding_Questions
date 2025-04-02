import { useState} from "react";

const Folder = ({directory}) => {
    const [show, setShow] = useState(false);
    
    return (
        <>
            { directory?.map((directory)=>(
                <div key={directory.name} className="folder_container">
                    <div  onClick={()=>setShow(!show)}>
                        {directory.isFolder ? "🗂️" + directory.name : "📁" + directory.name }
                    </div>
                    { (show) &&
                        directory.isFolder &&
                        <div className="sub-comment_container">
                            <Folder directory={directory.content}/>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}

export default Folder;