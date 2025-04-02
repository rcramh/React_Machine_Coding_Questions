import NestedComments from "./NestedComments"
import "./App.css"

const comments = [
  {
    id: 1,
    photo_url: "https://example.com/avatars/rahul.jpg",
    name: "Rahul",
    comment: "Amazing article, very informative!",
    nestedComments: [
      {
        id: 2,
        photo_url: "https://example.com/avatars/sumit.jpg",
        name: "Sumit",
        comment: "Totally agree with you, Rahul!",
        nestedComments: [
          {
            id: 3,
            photo_url: "https://example.com/avatars/deepak.jpg",
            name: "Deepak",
            comment: "Yeah, the insights were really helpful!",
            nestedComments: [
              {
                id: 4,
                photo_url: "https://example.com/avatars/priya.jpg",
                name: "Priya",
                comment: "Can you share more resources on this?",
                nestedComments: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        photo_url: "https://example.com/avatars/amit.jpg",
        name: "Amit",
        comment: "Nice breakdown of the topic!",
        nestedComments: []
      }
    ]
  },
  {
    id: 6,
    photo_url: "https://example.com/avatars/vikash.jpg",
    name: "Vikash",
    comment: "I have a different opinion on this!",
    nestedComments: [
      {
        id: 7,
        photo_url: "https://example.com/avatars/nisha.jpg",
        name: "Nisha",
        comment: "Oh? What do you think differently?",
        nestedComments: [
          {
            id: 8,
            photo_url: "https://example.com/avatars/vikash.jpg",
            name: "Vikash",
            comment: "I think another approach could be more efficient.",
            nestedComments: []
          }
        ]
      }
    ]
  },
  {
    id: 9,
    photo_url: "https://example.com/avatars/sneha.jpg",
    name: "Sneha",
    comment: "Thanks for writing this, super helpful!",
    nestedComments: []
  }
];


const App = () => {
  
  return (
    <>
      <h3>Nested comments</h3>
      <NestedComments comments={comments}/>
    </>
  )
}

export default App;

