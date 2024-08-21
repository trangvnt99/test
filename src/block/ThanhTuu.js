import React from "react";

class ThanhTuu extends React.Component {
    render() {

        function animateNumber(finalNumber, duration, startNumber, callback) {
            let currentNumber = startNumber
            const interval = window.setInterval(updateNumber, 17)
            function updateNumber() {
                if (currentNumber >= finalNumber) {
                    clearInterval(interval)
                } else {
                    let inc = Math.ceil(finalNumber / (duration / 17))
                    if (currentNumber + inc > finalNumber) {
                        currentNumber = finalNumber
                        clearInterval(interval)
                    } else {
                        currentNumber += inc
                    }
                    callback(currentNumber)
                }
            }
        }
        //thANHTUU
        const currentYear = new Date().getFullYear();

        animateNumber((currentYear - 1994), 5000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('namphattrien').innerText = formattedNumber
        })
        animateNumber(42, 25000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('khachhang').innerText = formattedNumber
        })
        animateNumber(78, 12500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('duan').innerText = formattedNumber
        })
        animateNumber(278, 1500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('detainckh').innerText = formattedNumber
        })
        return (
            <>
                {/* <!-- THÀNH TỰU --> */}
                <div className="mt-14 mb-10 items-center justify-center">
                    <h3 id="f1" className="mb-1 text-center text-4xl font-bold">THÀNH TỰU</h3>
                    <p className="text-center italic text-gray-500 text-xl mb-5">Với hơn 30 năm làm nghề, chúng tôi đã nghiên cứu và
                        thực hiện thành công nhiều dự án mới, đáp ứng nhu cầu
                        đa dạng của khách hàng.</p>
                    <div className="text-center font-bold mr-auto ml-auto w-11/12 grid grid-cols-2 md:grid-cols-4">
                        <div className="p-4">
                            <div id="namphattrien" className="text-6xl  text-red-600">
                                30
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-buildings'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                năm phát triển
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="khachhang" className="text-6xl  text-red-600">
                                42
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-group'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                khách hàng
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="duan" className="text-6xl  text-red-600">
                                78
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bx-news'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                dự án
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="detainckh" className="text-6xl  text-red-600">
                                278
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-edit'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                đề tài NCKH
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default ThanhTuu;