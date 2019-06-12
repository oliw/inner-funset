import React from "react";
import PropTypes from "prop-types";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onFirstPage: true,
      aboutMe: "",
      email: "",
      name: "",
      preference: "No perference!",
      submitted: false
    };
    this.togglePage = this.togglePage.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePreferenceChange = this.handlePreferenceChange.bind(this);
    this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
    this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
  }

  togglePage() {
    this.setState(state => ({
      onFirstPage: !state.onFirstPage
    }));
  }

  handleFirstSubmit(event) {
    event.preventDefault();
    this.togglePage();
  }

  handleSecondSubmit(event) {
    event.preventDefault();
    fetch("/api/v1/signups", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        neighbor: {
          name: this.state.name,
          email: this.state.email,
          description: this.state.description,
          preference: this.state.preference
        }
      })
    }).then(success => {
      if (success.ok) {
        this.setState({ submitted: true });
      }
    });
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
        <h1 className="text-2xl sm:text-3xl mb-4">
          Monthly opportunities to meet more locals
        </h1>

        <form onSubmit={this.handleFirstSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-m lg:text-sm font-bold mb-2"
              htmlFor="username"
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
            <label
              className="block text-grey-darker text-m lg:text-sm font-bold mb-2"
              htmlFor="username"
            >
              What would you prefer to grab?
            </label>
          </div>
          <div className="inline-block relative w-full">
            <select className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="coffee">Coffee at Beanery</option>
              <option value="beer">Drinks at the Shamrock</option>
              <option value="any">No preference!</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="inline-block py-2">
            <input
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 border border-blue-darker rounded"
              type="submit"
              value="Continue"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }

  renderSecondPage() {
    return (
      <React.Fragment>
        <h1 className="mb-4">Nice! How it'll work</h1>
        <p class="text-base">
          Once a month, we'll start an email thread between you and one or two
          inner sunset neighbors.
        </p>
        <p class="text-base">
          We don't like spam, and you can unsubscribe whenever you feel like it.
          We won't share your email address with anyone, even the neighbors you
          match with. You can decide how much you share.
        </p>
        <form className="mt-8" onSubmit={this.handleSecondSubmit}>
          <div className="flex flex-wrap flex-col lg:flex-row -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-first-name"
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
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="grid-last-name"
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
          <div>
            <button
              className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
              onClick={this.togglePage}
            >
              Back
            </button>
            <input
              className="bg-blue hover:bg-blue-dark text-white text-s font-bold py-2 px-4 ml-2 border border-blue-darker rounded"
              type="submit"
              value="Add me!"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }

  renderConfirmationPage() {
    return (
      <>
        <h1>All done!</h1>
        <p>Check your inbox for an email confirming you're on the list.</p>
        <p>Thanks and tell a neighbor about InnerFunset!</p>
      </>
    );
  }

  render() {
    const submitted = this.state.submitted;
    const onFirstPage = this.state.onFirstPage;
    let page = null;

    if (submitted) {
      page = this.renderConfirmationPage();
    } else if (onFirstPage) {
      page = this.renderFirstPage();
    } else {
      page = this.renderSecondPage();
    }

    return (
      <div>
        <div className="flex w-full justify-center">
          <div className="bg-white p-2 rounded rounded-t-none">
            <h1 className="text-5xl lg:text-5xl font-amatic">Inner Funset</h1>
          </div>
        </div>
        <div className="bg-white w-3/4 m-auto mt-8 lg:mt-16 lg:w-2/5 p-8 lg:m-8 lg:mt-16 rounded">
          {page}
        </div>
      </div>
    );
  }
}

export default SignupForm;
