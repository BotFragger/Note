import React from "react";
import {getInitialData} from "../utils/index"
import { preview } from "vite";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            searchNotes:''
        };
    }

    addNote({title, content}){
        this.setState((previousState)=>{
            return{
                notes: [
                    ...previousState.note,{
                        id: +new Date(),
                        title,
                        inputDate:new Date().toISOString(),
                        content,
                        isArchived: false
                    }
                ]
            }
        });
    }

    onArchive(id){
        this.setState((previousState) => {
            return {
                previousState: previousState.notes.map((note) => {
                    if(note.id === id)  {
                        return note.isArchived=!note.isArchived;
                    }else{
                        return note;
                    }
                }) 
            }
        });
    }

    onDelete(){
        const notes = this.state.notes.filter((note)=> 
        note.id !==id
        );
        this.setState({notes});
    }

    findNotes(){
        const notes = this.state;
        const searchNotes = this.state;
        return notes.filter((note)=>
            note.title.toLowerCase().includes(searchNotes.toLowerCase())
        )
    }

    onSearch(title){
        this.setState(()=>{
            return {
                search : title
            }
        })
    }

    render(){
        return(
            <>
                <div className="note-app">
                    <div className="note-app__body">
                        <input addNote={this.addNote} />
                        <h2>Active Note</h2>
                        <List 
                        key = {activeNote.id}
                        notes = {activeNote}
                        onDelete = {this.onDelete}
                        onArchive = {this.onArchive}
                        />
                        <h2>Archived Notes</h2>
                        
                    </div>
                </div>
            </>
        )
    }

}

export default NoteApp;