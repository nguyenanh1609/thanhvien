import { Component } from "react";
class Adduse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            permission: ''
        }
    }
    onChangeAdd = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addnew = (name, phone, permission) => {
        name = this.state.name
        phone = this.state.phone
        permission = this.state.permission

        this.props.addUser(name, phone, permission)
    }


    kiemTraHienThiForm = () => {
        if (this.props.hienThiForm === true)
            return (
                <div className="col-3">
                    <form>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">thêm mới </h5>
                                <hr />
                                <div className="form-group mb-2">
                                    <label >TÊN</label>
                                    <input type="text" className="form-control" name="name" placeholder="nhập tên ..." onChange={(event) => this.onChangeAdd(event)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label >SỐ ĐIỆN THOẠI</label>
                                    <input type="text" className="form-control" name="phone" placeholder="nhập số điện thoại ..." onChange={(event) => this.onChangeAdd(event)} />
                                </div>
                                <label >PHÂN QUYỀN</label>
                                <select className="form-select mb-2" name="permission" defaultValue="mac dinh" onChange={(event) => this.onChangeAdd(event)}>
                                    <option value="">-chọn quyền mặc định-</option>
                                    <option value="admin">admin</option>
                                    <option value="kiểm duyệt">kiểm duyệt</option>
                                    <option value="giáo viên">giáo viên</option>
                                    <option value="học sinh">học sinh</option>
                                </select>
                                <button type="reset" className="btn btn-primary" onClick={(name, phone, permission) => this.addnew(name, phone, permission)}>thêm mới</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
    }
    render() {
        // console.log(this.state);
        return (
            <>
                {this.kiemTraHienThiForm()}



            </>
        );
    }
}

export default Adduse;


