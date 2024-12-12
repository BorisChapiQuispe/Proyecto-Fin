import './Mas.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { faDeezer } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
export default function Mas(){
    return(
        <div className="cont2">
            <div className="portada">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_ny_3E5NhElVE1msnq1HUwtnpjlV0JdXJ3h11Df2tlNmTQ=s160-c-k-c0x00ffffff-no-rj"></img>
            </div>
            <a href="https://www.facebook.com/eminem" target='_blank'><div className="cent caja2">
            <FontAwesomeIcon className="ic" icon={faFacebook} />
            <img src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg" alt="" />
            </div></a>
            <a href='http://instagram.com/eminem' target='_blank'><div className="cent caja3">
            <FontAwesomeIcon className="ic" icon={faInstagram} />
            <img src="https://logowiki.net/uploads/logo/i/instagram.svg" alt="" />
            </div></a>
            <a href="https://twitter.com/Eminem" target='_blank'><div className="cent caja4">
            <FontAwesomeIcon className="ic" icon={faXTwitter} />
            <h2>Twitter</h2>
            </div></a>
            <a href="http://www.youtube.com/user/EminemVevo" target='_blank'><div className="cent caja5">
            <FontAwesomeIcon className="ic" icon={faYoutube} />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
            </div></a>
            <a href="https://itunes.apple.com/artist/eminem/111051" target='_blank'><div className="cent caja6">
            <FontAwesomeIcon className="ic" icon={faApple} />
            <h2>Apple Music</h2>
            </div></a>
            <a href="https://itunes.apple.com/artist/eminem/111051" target='_blank'><div className="cent caja7">
            <FontAwesomeIcon className="ic" icon={faItunesNote} />
            <h2>Itunes</h2>
            </div></a>
            <a href="https://www.deezer.com/es/artist/13?app_id=140685" target='_blank'><div className="cent caja8">
            <FontAwesomeIcon className="ic" icon={faDeezer} />
            <h2>Deezer</h2>
            </div></a>
            <a href="https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR" target='_blank'><div className="cent caja9">
            <FontAwesomeIcon className="ic" icon={faSpotify} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png" alt="" />
            </div></a>
        </div>
    )
}