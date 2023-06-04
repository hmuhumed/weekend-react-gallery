import axios from 'axios';
import { useState } from 'react';

function GalleryForm({getGallery}){

    const [pathInput , setPathInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const postGallery = () =>{
        axios({
            method: 'POST',
            url: '/gallery/fresh',
            data: {
                path: pathInput,
                description: descriptionInput ,
            }
        }).then(response => {
            console.log(response);
            setPathInput('');
            setDescriptionInput('');
            getGallery();
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <>
            <form onSubmit={postGallery}>
                <label>Picture URL</label>
                <input 
                    value={pathInput}
                    type='text'
                    placeholder='Add the url to the image here'
                    onChange={(event) => setPathInput(event.target.value)}
                />
                <input 
                    value={descriptionInput}
                    type='text'
                    placeholder='Give your image a description'
                    onChange={(event) => setDescriptionInput(event.target.value)}
                />
                <button type='submit'>Submit</button>






            </form>
        
        
        
        
        </>


    );
}

export default GalleryForm;