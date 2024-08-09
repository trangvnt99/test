import facebook from '../image/facebook.png';
import mail from '../image/mail.png';
import phone from '../image/phone.png';
import React from 'react';

class Beginning extends React.Component {
    render() {
        return (
            <>
                {/* <!-- MỞ ĐẦU --> */}

                <div id="a-text" className=" h-screen text-gray-600 p-8 font-bold bg-no-repeat bg-cover"
                >
                    <div className=" mt-auto mb-auto text-center md:pt-56 lg:pt-80 lg:text-left block">
                        <h1 className="text-5xl">TRUNG TÂM CÔNG NGHỆ ĐỊA LÝ DITAGIS</h1>
                        <h3 className="text-2xl pl-4 pt-4">286 Lý Thường Kiệt, phường 14, quận 10, TP.HCM</h3>
                        <h3 className="text-2xl pl-4 pt-4">Liên hệ:</h3>
                        <div className="flex p-3 justify-center lg:justify-normal">
                            <a href="https://www.facebook.com/ditagis.center"><img className="w-11 h-auto bg-transparent mr-1"
                                src={facebook} alt="facebook icon"
                                title="Liên hệ với chúng tôi qua Facebook" /></a>
                            <a href="mailto:mytho.gis@hcmut.edu.vn" target="_blank"><img className="w-11 h-auto bg-transparent mr-1"
                                src={mail} alt="mail icon" title="Liên hệ với chúng tôi qua mail" /></a>
                            <a href="tel:0985769686" target="_blank"><img src={phone} alt="phone icon"
                                className="w-11 h-auto bg-transparent" title="Liên hệ với chúng tôi qua điện thoại" /></a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default Beginning;