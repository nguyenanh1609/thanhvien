import { Component } from "react";

class Tabledatarow extends Component {

    onClickEdit=()=>{
        this.props.clickEdit()
        this.props.trangThaiShowTableEdit()
    }
    delete=(idc)=>{
        this.props.delete(idc)
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.permission}</td>
                <td className="text-center">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success" onClick={()=>this.onClickEdit()}>sửa</button>
                        <button type="button" className="btn btn-danger" onClick={(idc)=>this.delete(this.props.id)}>xóa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Tabledatarow;