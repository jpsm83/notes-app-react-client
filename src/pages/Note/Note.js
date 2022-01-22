import React, { Component } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteService from "../../services/note.service";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };
    this.noteService = new NoteService();
  }

  // componentDidMount is the first method to execute in a component
  componentDidMount() {
    this.refreshState();
  }

  refreshState() {
    this.noteService
      .getOne(this.props.match.params.id)
      .then((res) => {
        // axios gives the response in '.data'
        this.setState({ note: res.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <main className="flex max-w-7xl mx-auto mt-3">
          <div className="flex flex-col w-full">
            <NoteDetail
              {...this.state.note}
              refreshState={() => this.refreshState()}
            />
          </div>
        </main>
      </div>
    );
  }
}
