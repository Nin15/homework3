import Card from "./components/cards/Card";
import { users } from "./data";
import "./App.css";
import Text from "./components/text/Text";
import { texts } from "./data"
function App() {
  const newWindow = () => {
    window.open(
      "https://www.chess.com/forum/view/general/lichess-com",
      "_blank"
    );
  };
  return (
    <>
      <button className="btn" onClick={newWindow}>
        Go to chess
      </button>
      <>
        {users.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            img={el.img}
            name={el.name}
            surname={el.surname}
            email={el.email}
            password={el.password}
          ></Card>
        ))}
        {texts.map((el) => (
          <Text
            key={el.id}
            id={el.id}
            text={el.text}
            fontSize={el.fontSize}
            textColor={el.textColor}
          ></Text>
        ))}
      </>
    </>
  );}



export default App;
