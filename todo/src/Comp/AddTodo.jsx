import React, { useState } from 'react'
useState

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('title and desc requuired')
        }
        addTodo(title,desc)
        setTitle('');
        setDesc('');

    }
    return (
        <div className='container my-3'>
            <h1>Add a todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input value={desc} onChange={(e) => { setDesc(e.target.value) }} type="text" className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary">Add todo</button>
            </form>

        </div>
    )
}

export default AddTodo