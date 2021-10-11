

function StateLanding({
        headerThree, 
        headerOne, 
        paragraph, 
        button, 
        image
    }) {
    
    return (
        <div>
               <div>
                <img 
                src={image} 
                alt="video regarding covid for the first section of the page.
                The second half has two pictures. One relating to different states and the second relating to federal or nationwide."
                        /> 
            </div>

            
            <div>
                <h3>{headerThree}</h3>
                <h1>{headerOne}</h1>
                <p> {paragraph}</p>
                <button>{button}</button>
            </div>
        </div>
    )
}

export default StateLanding
