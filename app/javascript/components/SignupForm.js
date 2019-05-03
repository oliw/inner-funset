import React from "react";
import PropTypes from "prop-types";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onFirstPage: true,
      aboutMe: "",
      email: "",
      name: ""
    };
    this.togglePage = this.togglePage.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePreferenceChange = this.handlePreferenceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  togglePage() {
    this.setState(state => ({
      onFirstPage: !state.onFirstPage
    }));
  }

  handleSubmit() {
    console.log("Sending");
  }

  handleAboutMeChange(event) {
    this.setState({ aboutMe: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePreferenceChange(event) {
    this.setState({ preference: event.target.value });
  }

  renderFirstPage() {
    return (
      <React.Fragment>
        <form>
          <div>
            <label>
              How would you describe yourself to a neighbor?
              <textarea
                value={this.state.aboutMe}
                required
                onChange={this.handleAboutMeChange}
                placeholder="How would you describe yourself to a neighbor"
              />
            </label>
          </div>
          <div>
            <label>
              Would you prefer to grab:
              <select
                value={this.state.preference}
                onChange={this.handleChange}
              >
                <option value="coffee">Coffee at Beanery</option>
                <option value="beer">Drinks at the Shamrock</option>
                <option value="any">No preference!</option>
              </select>
            </label>
          </div>
        </form>
        <button onClick={this.togglePage}>Continue</button>
      </React.Fragment>
    );
  }

  renderSecondPage() {
    return (
      <React.Fragment>
        <h1>Nice! How it'll work</h1>
        <p>
          Once a month, we'll start an email thread between you and one or two
          inner sunset neighbors.
        </p>
        <p>
          We don't like spam, and you can unsubscribe whenever you feel like it.
          We won't share your email address with anyone, even the neighbors you
          match with. You can decide how much you share.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            type="email"
            required
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <button onClick={this.togglePage}>Back</button>
          <input type="submit" value="Add me to the list!" />
        </form>
      </React.Fragment>
    );
  }

  render() {
    const onFirstPage = this.state.onFirstPage;

    if (onFirstPage) {
      return this.renderFirstPage();
    } else {
      return this.renderSecondPage();
    }
  }
}

export default SignupForm;
