import axios from "axios";
import { useState } from "react";
import './GalleryItem.css'

function GalleryItem({item, getGallery , id}){


    const [selected, setSelected] = useState(false);

    

    const handleLikes = (id) => {
        console.log('You pressed the like button');

        axios.put(`/gallery/like/${id}`)
        .then(response =>{
            console.log('Response data from file GalleryItem' ,response.data)
            getGallery();
        }).catch(err => {
            console.log('Error in put function in file GalleryItem' , err)
        });

        
    };

    return(

        

        <> 
            
            
        
            <div onClick={() => setSelected(!selected)}>
                {
                    selected ? (
                        <p>
                            {item.description}
                        </p>
                    ) : (
                        <p>
                        
                            <img src={item.path} alt="Images" />
                        </p>
                    )
                    



                }
                

            </div>


            <div>    
                <button className="like-btn" onClick={() => handleLikes(item.id)}>Like</button>
                <p>{item.likes} people like this</p>
            </div>
        
        
        </>

       


    )
}

export default GalleryItem;