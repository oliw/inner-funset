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
        <h1 className="mb-4">Monthly opportunities to meet more locals</h1>

        <form>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              How would you describe yourself to a neighbor?
            </label>
            <textarea
              value={this.state.aboutMe}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={this.handleAboutMeChange}
              placeholder="How would you describe yourself to a neighbor"
            />
          </div>
          <div>
            <p>What would you prefer to grab?</p>
          </div>
          <div class="inline-block relative w-64">
            <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="coffee">Coffee at Beanery</option>
              <option value="beer">Drinks at the Shamrock</option>
              <option value="any">No preference!</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </form>
        <button
          className="mt-4 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-darker rounded"
          onClick={this.togglePage}
        >
          Continue
        </button>
      </React.Fragment>
    );
  }

  renderSecondPage() {
    return (
      <React.Fragment>
        <h1 className="mb-4">Nice! How it'll work</h1>
        <p>
          Once a month, we'll start an email thread between you and one or two
          inner sunset neighbors.
        </p>
        <p>
          We don't like spam, and you can unsubscribe whenever you feel like it.
          We won't share your email address with anyone, even the neighbors you
          match with. You can decide how much you share.
        </p>
        <form className="mt-8" onSubmit={this.handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Jane"
                required
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                type="email"
                required
                placeholder="jane@gmail.com"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>
          <button
            className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
            onClick={this.togglePage}
          >
            Back
          </button>
          <input
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 ml-4 border border-blue-darker rounded"
            type="submit"
            value="Add me to the list!"
          />
        </form>
      </React.Fragment>
    );
  }

  render() {
    const onFirstPage = this.state.onFirstPage;
    let page = null;

    if (onFirstPage) {
      page = this.renderFirstPage();
    } else {
      page = this.renderSecondPage();
    }

    return <div className="bg-white w-2/5 p-8 m-8 mt-32 rounded">{page}</div>;
  }
}

export default SignupForm;
