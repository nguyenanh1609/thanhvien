import '../App.css';
import Header from './Header/Header';
import Search from './Search/Search';
import Tabledata from './Table/Tabledata';
import Adduse from './Adduse/Adduse';
import { Component } from 'react';

import Data from './datauser.json';
// import Edituser from './Edituser/Edituser';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: Data,
      textSearch: "",
      trangThaiShowEdit: false,
      UserEdit: {},
      editInfo: {}

    }
  }

  doiTrangThaiHienThiForm = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  getTextSearch = (textSearch) => {
    this.setState({
      textSearch: textSearch
    })
    // console.log(this.state.textSearch);
  }
  addUser = (name, phone, permission) => {
    let newItemUser = {}
    newItemUser.name = name;
    newItemUser.phone = phone;
    newItemUser.permission = permission;
    newItemUser.id = uuidv4();
    let itemUser = this.state.data;
    this.setState({
      data: itemUser
    })
    itemUser.push(newItemUser);
  }
  trangThaiShowTableEdit = () => {
    this.setState({ trangThaiShowEdit: !this.state.trangThaiShowEdit })
    console.log(this.state.trangThaiShowEdit);
  }
  editDataUser = (userEdit) => {
    this.setState({
      UserEdit: userEdit
    })
  }

  getUserEditInfo = (info) => {
    this.state.data.forEach((value) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
  }
  xoa = (idc) => {
    let mangxoa = this.state.data.filter(item => item.id !== idc)
    this.setState({
      data: mangxoa
    })
  }
  // render
  render() {
    // console.log(this.state.textSearch);
    console.log(this.state.UserEdit);
    let outPutKetQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textSearch) !== -1)
        outPutKetQua.push(item);
    })
    // console.log(outPutKetQua);
    // console.log(this.state.data);

    // this.setState({datasearch:outPutKetQua})
    // console.log(this.state.datasearch);
    // return
    // console.log(this.state.UserEdit.id);
    return (<div className="App">
      <Header></Header>
      {/* <Edituser
        trangThaiShowEdit={this.state.trangThaiShowEdit}
        chuyenDataEdit={settaNew}
        // chuyenDataEdit={(info)=>this.editDataUser(info)}
        
        // xuatData={()=>this.xuatdata()}
        getUserEditInfo={(info) => this.getUserEditInfo(info)}
      ></Edituser> */}
      <Search
        getTextSearch={(textSearch) => this.getTextSearch(textSearch)}
        ketnoi={() => this.doiTrangThaiHienThiForm()}
        hienThiForm={this.state.hienThiForm}
        trangThaiShowTableEdit1={() => this.trangThaiShowTableEdit()}
        trangThaiShowTableEditSearch={this.state.trangThaiShowEdit}
        editDataUser={this.state.UserEdit}
        getUserEditInfo={(info) => this.getUserEditInfo(info)}
      >
      </Search>
      <div className="container">
        <label className="text-left d-flex mb-1"><i>tổng số thành viên là :</i><b>{outPutKetQua.length}</b></label>
        <div className="row">
          <Tabledata
            dataUesrProps={outPutKetQua}
            editFun={(userEdit) => this.editDataUser(userEdit)}
            trangThaiShowTableEdit={() => this.trangThaiShowTableEdit()}
            xoa={(idc) => this.xoa(idc)}
          >
          </Tabledata>
          <Adduse
            hienThiForm={this.state.hienThiForm}
            addUser={(name, phone, permission) => this.addUser(name, phone, permission)}
          ></Adduse>
        </div>
      </div>
    </div>);
  }
}

export default App;