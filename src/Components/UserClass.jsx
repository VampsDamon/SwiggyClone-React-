import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Default",
        login: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/VampsDamon");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, login, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="userCard">
        <div className="img">
          <img src={avatar_url} alt="" />
        </div>
        <div className="AboutData">
          <h3 className="font-extrabold ">Name :{name}</h3>
          <p>{bio}</p>
          <h4 className="font-medium">Location : Jaipur</h4>
          <h4 className="font-medium">Conatact : {login}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
