import React from "react";

class Tuyensinh extends React.Component {
    render() {
        // countdown tuyển sinh
        var fuT = new Date("dec 31, 2024 23:00:00").getTime()
        setInterval(function () {
            var noW = new Date().getTime()
            var D = fuT - noW
            var weeks = Math.floor(D / (1000 * 60 * 60 * 24 * 7))
            var days = Math.floor(D / (1000 * 60 * 60 * 24)) - Math.floor(D / (1000 * 60 * 60 * 24 * 7)) * 7
            var hours = Math.floor(D / (1000 * 60 * 60))
            var mins = Math.floor(D / (1000 * 60))
            var sec = Math.floor(D / (1000))

            hours %= 24
            mins %= 60
            sec %= 60

            document.getElementById("weeks").innerText = weeks
            document.getElementById("days").innerText = days
            document.getElementById("hours").innerText = hours
            document.getElementById("mins").innerText = mins
            document.getElementById("sec").innerText = sec
        }, 1000)


        return (
            <>
                {/* <!-- CHIÊU SINH --> */}
                <div className="bg-orange-400">
                    <div className="text-center items-center mt-10 pb-10 mb-10 mr-auto ml-auto w-11/12 lg:grid lg:grid-cols-2">
                        <div className="p-10 lg:p-14">
                            <div className=" text-white mr-auto ml-auto">
                                <h2 className="text-5xl pb-3 lg:text-5xl w-auto text-center font-bold">THÔNG BÁO CHIÊU SINH</h2>
                                <div className="text-xl lg:text-2xl text-justify">
                                    <div className="mt-2 mb-2">
                                        <strong>Lớp ArcGIS Căn bản:</strong> học vào các buổi tối Thứ 2 - 4 - 6 trong tuần bắt đầu
                                        từ 18g00 - 20h45.
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <strong>Lớp ArcGIS Nâng cao:</strong> học vào các buổi tối Thứ 3 - 5 - 7 trong tuần bắt đầu
                                        từ 18g00 - 20h45.
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <strong>Thời lượng học: 10 buổi.</strong> Học viên đạt yêu cầu sẽ được cấp chứng nhận hoàn
                                        tất khóa học trong vòng 02 tuần sau khi thi cuối khóa.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="items-center text-center">
                            <div
                                className="bg-white rounded-3xl shadow-xl w-80 lg:w-96 h-60 lg:h-72 left items-center justify-center hover:drop-shadow-2xl mr-auto ml-auto">
                                <div
                                    className="text-center items-center justify-center relative flex content-center pt-16 lg:pt-20 ml-auto mr-auto">
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>TUẦN</p>
                                        <span id="weeks" className="text-4xl lg:text-5xl font-bold">Weeks</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>NGÀY</p>
                                        <span id="days" className="text-4xl lg:text-5xl font-bold">Days</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>GIỜ</p>
                                        <span id="hours" className="text-4xl lg:text-5xl font-bold">Hours</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>PHÚT</p>
                                        <span id="mins" className="text-4xl lg:text-5xl font-bold">Mins</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>GIÂY</p>
                                        <span id="sec" className="text-4xl lg:text-5xl font-bold">Sec</span>
                                    </div>
                                </div>
                                <div>
                                    <a href="https://ditagis.com/thong-bao-chieu-sinh"
                                        className="top-14 flex-none text-center justify-center items-center relative p-3 pl-5 pr-5 text-white font-bold text-2xl no-underline bg-red-600  rounded-3xl hover:bg-red-800"
                                        target="_blank" rel="noreferrer">APPLY NGAY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Tuyensinh;