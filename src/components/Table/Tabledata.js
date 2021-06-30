import { Component } from "react";
import Tabledatarow from "./Tabledatarow";
import './Tabledata.css';
class Tabledata extends Component {
    delete=(idc)=>{
        this.props.xoa(idc)
    }
    mapDatauser = () => {
        return (
            this.props.dataUesrProps.map((value, key) => (
                <Tabledatarow
                    key={key}
                    stt={key}
                    id={value.id}
                    name={value.name}
                    phone={value.phone}
                    permission={value.permission}
                    clickEdit={(userEdit) => this.props.editFun(value)}
                    trangThaiShowTableEdit={() => this.props.trangThaiShowTableEdit()}
                    delete={(idc)=>this.delete(idc)}

                ></Tabledatarow>
            )
            ))
    }
    //this.props.editDataUser
    render() {
        // console.log(this.props.dataUesrProps);
        return (
            <div className="col table__overFlow">
                <table className="table table-striped table-inverse table-hover table-bordered table__data">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>TÊN</th>
                            <th>SỐ ĐIỆN THOẠI</th>
                            <th>QUYỀN</th>
                            <th>THAO TÁC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapDatauser()}
                    </tbody>
                </table>

            </div>);
    }
}

export default Tabledata;
