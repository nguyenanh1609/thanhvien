import { Component } from "react";
import Edituser from "../Edituser/Edituser";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duLieuSearch: '',
            infoEdit:{}
        }
    }

    onChangeInputSearch = (event) => {
        // console.log(event.target.value);
        this.setState({
            duLieuSearch: event.target.value
        })
        // console.log("dữ liệu" +this.state.duLieuSearch)
        this.props.getTextSearch(this.state.duLieuSearch)

    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="btn btn-danger cancel__click mb-2 " onClick={() => this.props.ketnoi()}>đóng lại</div>
            )
        }
        else {
            return (
                <div className="btn btn-primary add__click mb-2" onClick={() => this.props.ketnoi()}>thêm mới</div>
            )
        }
    }
    getInfoEdit=(info)=>{
        this.setState({
            infoEdit:info
        })
        this.props.getUserEditInfo(info)
    }
// 
    hienThiFormEdit = () => {
        if (this.props.trangThaiShowTableEditSearch=== true) {
            return (
                <Edituser
                UserEdit2={this.props.editDataUser}
                battat={this.props.trangThaiShowTableEdit1}
                getInfoEdit={(info)=>this.getInfoEdit(info)}
                ></Edituser>
            )
        }
    }
    render() {
        console.log(this.state.infoEdit);
        return (
            <>
                {this.hienThiFormEdit()}
                {/* <Edituser></Edituser> */}
                <div className="search__form mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <form className="d-flex">
                                    <input type="text" className="form-control" placeholder="Nhập tên cần tìm kiếm ..." onChange={(event) => this.onChangeInputSearch(event)} />
                                    <button type="button" className="btn btn-success" onClick={(textSearch) => this.props.getTextSearch(this.state.duLieuSearch)}>tìm</button>
                                </form>
                            </div>
                            <div className="col-3">
                                {this.hienThiNut()}
                            </div>
                        </div>
                    </div>
                </div>
            </>);
    }
}
export default Search;