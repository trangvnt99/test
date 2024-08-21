import facebook from '../image/facebook.png';
import mail from '../image/mail.png';
import phone from '../image/phone.png';
import title from '../image/title.jpg';
import React from 'react';
import './Beginning.css';

class Beginning extends React.Component {
    render() {
        return (
            <>
                {/* <!-- MỞ ĐẦU --> */}
                <div className="relative bg-blend-darken pb-0">
                    <img src={title} alt="Background Img"
                        className="absolute inset-0 w-full h-screen object-cover hover:w-8 hover:h-auto" />
                    <div className="relative w-full h-screen content-center bg-blue-500 bg-opacity-10 trasition hover:bg-opacity-50 p-10 text-white">
                        <div id="a-text" className="font-bold">
                            <div className="shadow mt-auto mb-auto text-center lg:text-left block">
                                <h1 className="text-5xl">TRUNG TÂM CÔNG NGHỆ ĐỊA LÝ DITAGIS</h1>
                                <h3 className="text-2xl pl-4 pt-4">286 Lý Thường Kiệt, phường 14, quận 10, TP.HCM</h3>
                                <h3 className="text-2xl pl-4 pt-4">Liên hệ:</h3>
                                <div className="flex p-3 justify-center lg:justify-normal">
                                    <a href="https://www.facebook.com/ditagis.center" target="_blank" rel="noreferrer">
                                        <img className="w-11 h-auto bg-transparent mr-2 hover:opacity-85" src={facebook} alt="facebook icon" title="Liên hệ với chúng tôi qua Facebook" />
                                    </a>
                                    <a href="mailto:mytho.gis@hcmut.edu.vn" target="_blank" rel="noreferrer">
                                        <img className="w-11 h-auto bg-transparent mr-2 hover:opacity-85"
                                            src={mail} alt="mail icon" title="Liên hệ với chúng tôi qua mail" />
                                    </a>
                                    <a href="tel:0985769686" target="_blank" rel="noreferrer">
                                        <img src={phone} alt="phone icon" className="w-11 h-auto bg-transparent hover:opacity-85" title="Liên hệ với chúng tôi qua điện thoại" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Beginning;