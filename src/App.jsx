import { useState } from "react";
import { Tweet } from "./components/Tweet";
import "./index.css";
import TweetForm from "./components/TweetForm";

const DEFAULT_TWEET = [
  { id: 0, name: "Sabrina", content: "Je vais bien !", liked: 1000 },
  { id: 1, name: "Lionel", content: "Hyper Cool !", liked: 29 },
  { id: 2, name: "John", content: "Super bien !", liked: 70 },
  { id: 3, name: "Zakia", content: "Vraiment Fun !", liked: 18 },
];

export default function App() {
  //Code JavaScript;

  //State
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  //Comportement
  const handleSubmit = (tweet) => {
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name: tweet.name,
      content: tweet.content,
      liked: 0,
    };

    addTweet(newTweet);
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const updatedTweet = curr.find((tweet) => tweet.id === tweetId);
      updatedTweet.liked++;
      return [...curr];
    });
  };

  //Code JSX;

  //Affichage(render)
  return (
    <div className="App container">
      <h1 className="text-3xl underline text-center text-white mb-8 mt-4 font-sans font-bold">
        My App Tweets
      </h1>

      <TweetForm onSubmit={handleSubmit} />

      {/*-------------------------------------------------------------*/}

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
              onLike={(id) => {
                onLike(id);
                console.log("Liked", id);
              }}
            ></Tweet>
          );
        })}
      </div>
    </div>
  );
}
