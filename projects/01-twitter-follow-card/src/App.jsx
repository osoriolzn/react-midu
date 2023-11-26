import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: 'osoriolzn',
    name: 'Yohan Osorio',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'Klerith',
    name: 'Fernando Herrera',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
