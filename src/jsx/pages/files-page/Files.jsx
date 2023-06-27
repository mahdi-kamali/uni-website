import React from 'react'
import FileContainer from './FileContainer';



const Files = () => {



    return (
        <main className='files-page'>

            <FileContainer defValue={false} />
            <FileContainer defValue={true} />
            <FileContainer defValue={false} />
            <FileContainer defValue={false} />
        
        </main>
    )
}

export default Files