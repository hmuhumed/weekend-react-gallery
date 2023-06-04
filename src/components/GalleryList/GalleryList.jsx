import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({galleryList , getGallery}){

    

    return(
        <>
            <div>

                <p>My Gallery</p>
                {galleryList.map((item) => (
                    <GalleryItem 
                    key={item.id}
                    item={item}
                    getGallery={getGallery}
                    
                    />
                    
                ))}





            </div>
        
        
        
        </>
    )

        
};

export default GalleryList;