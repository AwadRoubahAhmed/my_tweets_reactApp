import { useState } from "react";
import { Tweet } from "./components/Tweet";
import "./index.css";

const DEFAULT_TWEET = [
  { id: 0, name: "Sabrina", content: "Je vais bien !", liked: 1000 },
  { id: 1, name: "Lionel", content: "Hyper Cool !", liked: 29 },
  { id: 2, name: "John", content: "Super bien !", liked: 70 },
  { id: 3, name: "Zakia", content: "Vraiment Fun !", liked: 18 },
];

function App() {
  //Code JavaScript;
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  //const [tweetLiked, setTweetLiked] = useState(DEFAULT_TWEET.liked);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      liked: 0,
    };

    setTweets([...tweets, newTweet]);

    console.log(newTweet);
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  //const handleLiked = (tweetLiked) => {
  //SsetTweetLiked((tweetLiked += 1));
  //};

  //Code JSX;
  return (
    <div className="App container">
      <h1 className="text-3xl underline text-center text-white mb-8 mt-4 font-sans font-bold">
        My App Tweets
      </h1>

      <div className="text-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col size-52 gap-4 m-2"
        >
          <h4 className="text-white underline">New Tweet</h4>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="rounded-md"
          />
          <input
            type="text"
            placeholder="content"
            name="content"
            className="rounded-md"
          />
          <input
            type="submit"
            value="AddItems"
            className="text-black bg-white cursor-pointer hover:bg-cyan-300 font-bold rounded-md"
          />
        </form>
      </div>

      <div className="flex flex-wrap gap-6 m-8">
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              content={tweet.content}
              liked={tweet.liked}
              onDelete={(id) => {
                onDelete(id);
                console.log("Delete", id);
              }}
            ></Tweet>
          );
        })}
      </div>
    </div>
  );
}

export default App;
