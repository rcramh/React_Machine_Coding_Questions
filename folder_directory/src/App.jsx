import Folder from "./Folder"
import "./App.css"

const folder = [
  { 
    name : "root",
    isFolder : true,
    content : [
      {
        name : 'root',
        isFolder : true,
        content : [
          {
            name : 'main1',
            isFolder : true,
            content : [
              {
                name : 'file1',
                isFolder : false,
              },
              {
                name : 'file2',
                isFolder : false,
              },
            ]
          },
        ]
      },
      {
        name : 'root2',
        isFolder : true,
        content : [
          {
            name : 'main',
            isFolder : true,
            content : [
              {
                name : 'file2',
                isFolder : false,
              },
            ]
          },
        ]
      }
    ]
  }
]


const App = () => {
  
  return (
    <>
      <h3>Folder Structure</h3>
      <Folder directory={folder}/>
    </>
  )
}

export default App;

