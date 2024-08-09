import React from 'react';

class Improve extends React.Component {
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

        // counton số liệu
        const duration = 5000
        const startNumber = 0

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
        //nhansu
        animateNumber(100, 500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('nhansu').innerText = formattedNumber
        })
        animateNumber(2, 2500000000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('giaosu').innerText = formattedNumber
        })
        animateNumber(30, 12500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('tiensi').innerText = formattedNumber
        })
        animateNumber(50, 1500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('thacsi').innerText = formattedNumber
        })

        //slideshow
        let slideIndex = [1, 1];
        let slideId = ["mySlides1", "mySlides2"]
        showSlides(1, 0);
        showSlides(1, 1);

        function plusSlides(n, no) {
            showSlides(slideIndex[no] += n, no);
        }

        function showSlides(n, no) {
            let i;
            let x = document.getElementsByClassName(slideId[no]);
            if (n > x.length) { slideIndex[no] = 1 }
            if (n < 1) { slideIndex[no] = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex[no] - 1].style.display = "block";
        }
        return (
            <>

            </>
        );
    }
}
export default Improve;