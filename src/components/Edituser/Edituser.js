import { Component } from "react";
import'./Edit.css'
class Edituser extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id:this.props.UserEdit2.id,
            name:this.props.UserEdit2.name,
            phone:this.props.UserEdit2.phone,
            permission:this.props.UserEdit2.permission
        })
    }
    ischange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        this.setState({
            [name]:value
        })
    }
    getInfoEdit=()=>{
        let info={}
        info.id=this.state.id
        info.name=this.state.name
        info.phone=this.state.phone
        info.permission=this.state.permission
        this.props.getInfoEdit(info)
        this.props.battat()

    }
    render() {
        console.log(this.state);
        return (
            <div className="container mb-4">
                <div className="fixed"></div>
                <div className="row">
                    <div className="card col-12">
                            <div className="card-body">
                                <h5 className="card-title">chỉnh sửa thông tin</h5>
                                <hr />
                                <div className="form-group mb-2">
                                    <label className="d-flex" >TÊN</label>
                                    <input type="text" className="form-control" defaultValue={this.props.UserEdit2.name} onChange={(e)=>this.ischange(e)}
                                        name="name" placeholder="nhập tên ..." />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="d-flex">SỐ ĐIỆN THOẠI</label>
                                    <input type="text" className="form-control" name="phone" placeholder="nhập số điện thoại ..." defaultValue={this.props.UserEdit2.phone} onChange={(e)=>this.ischange(e)}/>
                                </div>
                                <label className="d-flex">PHÂN QUYỀN</label>
                                <select className="form-select mb-2" defaultValue={this.props.UserEdit2.permission} name="permission" onChange={(e)=>this.ischange(e)} >
                                    <option value="admin">admin</option>
                                    <option value="kiemduyet">kiểm duyệt</option>
                                    <option value="giaovien">giáo viên</option>
                                    <option value="hocsinh">học sinh</option>
                                </select>
                                <button className="btn btn-warning w-100" onClick={()=>this.getInfoEdit()}>lưu</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edituser;