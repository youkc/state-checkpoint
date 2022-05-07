import React from "react";
import ProfileImg from "./logo.svg";
import Counter from "./Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Youssoupha CASSE",
      bio: "Lorem ipsum...",
      profession: "Front-end developper",
      userImg: ProfileImg,
      show: false,
    };
  }
  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (

      <div className="App" style={{ padding: "100px" }}>
        <button
          onClick={() => {
            this.setState({ toggleState: !this.state.toggleState });
          }}
        >
          Toggle state
        </button>

        {this.state.toggleState ? (
          <>
            <Counter />
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                maxWidth: "450px",
                margin: "auto",
                padding: "30px 30px 60px",
                borderRadius: "20px",
                boxShadow: "0 0 20px rgb(6 72 86 / 15%)",
                fontSize: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <img
                  src={this.state.userImg}
                  alt=""
                  style={{
                    height: "100px",
                    marginRight: "20px",
                    width: "100px",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                />
                <h3>{this.state.fullName}</h3>
              </div>
              <div>
                <h5>{this.state.profession}</h5>
                <p>{this.state.bio}</p>
              </div>
            </div>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    );
  }
}
export default App;
