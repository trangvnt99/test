import React from "react";

class TuVan extends React.Component {
    state = {
        hoTen: "",
        soDienThoai: "",
        diaChi: "",
    }
    handleChangeTen = (event) => {
        this.setState({
            hoTen: event.target.value
        })
    }
    handleChangeSDT = (event) => {
        this.setState({
            soDienThoai: event.target.value
        })
    }
    handleChangeDiaChi = (event) => {
        this.setState({
            diaChi: event.target.value
        })
    }
    hadleClickSummit = (event) => {
        event.preventDefault();
        console.log('submit');
        alert('Đã nhập dữ liệu')
    }

    render() {
        console.log('state: ', this.state);
        return (
            <>
                <form className="bg-blue-300 mt-auto mb-auto text-center items-center">
                    <label htmlFor="fname" className=" font-bold text-xl p-2">Họ tên:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.hoTen}
                        onChange={(event) => { this.handleChangeTen(event) }}
                    />
                    <br />
                    <label htmlFor="lname" className=" font-bold text-xl p-2">Số điện thoại:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.soDienThoai}
                        onChange={(event) => { this.handleChangeSDT(event) }}
                    />
                    <br />
                    <label htmlFor="fname" className=" font-bold text-xl p-2">Địa chỉ:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.diaChi}
                        onChange={(event) => { this.handleChangeDiaChi(event) }}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="XÁC NHẬN"
                        onClick={(event) => { this.hadleClickSummit(event) }}
                        className=" mb-4 rounded-2xl bg-white font-bold text-2xl p-2 pl-8 pr-8 text-blue-600 hover:bg-blue-600 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
                    />
                </form>

                <h3>Hãy để lại thông tin liên lạc</h3>
            </>
        )
    }
}
export default TuVan;