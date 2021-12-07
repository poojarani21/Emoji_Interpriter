import React,{useState} from "react";
import "./styles.css";
// var likeCounter = 0;
var emojiDictionary = {
  "❤️":"Red heart",
  "🔥":"fire",
  "🍿":"popcorn",
  "❤️‍🔥":"heart on fire",
  "✨":"sparkles",
  "🐈":"cat"
}
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
            const [meaning,setmeaning] = useState("")
            function emojiInputHandler(event){
            var userInput = event.target.value;
            var meaning = emojiDictionary[userInput];
            // console.log(meaning);
            if (meaning === undefined){
              meaning="we don't have this meaning in our database"    
             }
            setmeaning(meaning);
          }
          function emojiClickHandler(emoji){
          var meaning = emojiDictionary[emoji];
          setmeaning(meaning)
          }

  return (
    <div className="App">
      <h1 className = "see">inside outt!!</h1>
      <input onChange = {emojiInputHandler}/>
      <h2> {meaning}</h2>
      <h3 className = "see">emojis we know</h3>
      {emojisWeKnow.map(function(emoji){
        return <span 
        onClick = {() => emojiClickHandler(emoji)}
        style = {{fontSize:"2rem",padding:"1rem",cursor:"pointer"}}
         key = {emoji}>{emoji}{" "}
         </span>
      
      
  })}

      

    </div>
  );
}
