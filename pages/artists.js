import {artists} from '../data/artists'
import { ArtistsList } from '../components/ArtistsList'

const Artists = () => {
    return(
        <>
        <div>Artists</div>
        <ArtistsList artists={artists}/>
        </>
    )
}

export async function getStaticProps() {
    return {props: {artists}}
}
export default Artists;