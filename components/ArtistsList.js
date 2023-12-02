import styles from '../styles/artistsList.module.css'
import Link from 'next/link'
export const ArtistsList = ({artists}) => {
    return(
        <main className={styles.artistsPage}>
            {artists.map((artist) => (
                <>
                <div className={styles.artistRowHeader}>
                <h4 className={styles.artistName}>{artist.name}</h4>
                </div>
                <div className={styles.artistRow}>
                    <div className={styles.tattooTiles}>
                        <Link href={`/artist/${artist.name}`}>
                                <img className={styles.tile} src={artist.headshot} alt=""/>
                        </Link>
                        {artist.images.map((image) => (
                            <span><img id="artist-img" src={image} alt=""/></span>
                        ))}
                    </div>
                </div>
                </>
            ))}
        </main>
    )
}