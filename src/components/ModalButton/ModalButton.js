import React, { Component } from 'react'
import { Modal, Radio, Form, Input, Button } from 'antd';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;


export default class ModalButton extends Component {
  constructor() {
     super();
     this.state = {
       formLayout: 'horizontal',
       visible: false,
       value: 1,
       gart:0,
       gart1:0,
       gart2:0,
       gart3:0,
       gart4:0,
       cid:0,
       best:0,
       trafficsource:0,
       discount:0,
       visibleForm:"hiddenForm",
       visibleDiscount:"",
       titleModal:"GET DISCOUNT 20 AED + FREE DELIVERY"
     };
      this.handleSubmit = this.handleSubmit.bind(this);
   }



 showModal = () => {
   this.setState({
     visible: true,
   });
 }

 handleOk = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleCancel = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleSubmit(event) {
  //alert('A name was submitted: ' + this.state.value);

}

discountHandler =(e) => {
  e.preventDefault()
  var currentDate = new Date(new Date().getTime() + 1 * 60 * 60 * 500)

var  x = currentDate.getDate()
var  y = currentDate.getMonth()

let z1=x*3+(y+2)
let z2=x-1
let z3=x*2
let z=z1 + "0" + z2 + z3
console.log(z)



this.state.discount===z ? this.setState({visibleForm: "visibleForm", visibleDiscount: "hiddenForm", titleModal:"To place an order simply fill up the form" }) : alert("Wrong Code")

}




onDiscountChange = (e) => {
  this.setState({
    discount: e.target.value,
  });
}




 onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  componentDidMount() {
    function getURLParameter(name) {
                return decodeURI(
                    (RegExp(name + '=' + '(.+?)(&|$)').exec(document.location.search) || [, null])[1] || ''
                );
            }
         let gart = getURLParameter('adid')
         let gart1 = getURLParameter('adsetname')
         let gart2 = getURLParameter('age')
         let gart3 = getURLParameter('gender')
         let gart4 = getURLParameter('placement')
         let cid = getURLParameter('clickid')
         let best = getURLParameter('best')
         let trafficsource = getURLParameter('trafficsource')
  this.setState({"gart":gart, "gart1":gart1, "gart2":gart2, "gart3":gart3, "gart4":gart4,  "cid":cid, "trafficsource":trafficsource,  "best":best  })

  }

  render(){
    const radioStyle = {
         display: 'block',
         height: '30px',
         lineHeight: '30px',
       };

    const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;


    const { classNames, btntext } = this.props

      return (
        <div >

            <div className={classNames} onClick={this.showModal}>{btntext}</div>

              <Modal
         title={this.state.titleModal}
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
         footer={null}
       >
       <form className={this.state.visibleDiscount}>
         <label style={{color:"#fff"}}>
          Enter Promo Code:
           <input type="text" name="discount" style={{width:"100%"}}   onChange={this.onDiscountChange}  />
         </label>
         <button onClick={this.discountHandler} className="price-block__button" style={{ margin:"20px auto", display:"block"}}> Get Discount</button>
       </form>


       <Form layout={formLayout} className={this.state.visibleForm} action="https://hairflame.shop/thanks-hairflame/" method="GET" onSubmit={this.handleSubmit}>

      <FormItem
        label="Name"
        {...formItemLayout}
      >
        <Input  name="name" required="required"  />
      </FormItem>

      <FormItem
        label="Phone"
        {...formItemLayout}
      >
        <Input type="number"  name="phone" required="required"  />
      </FormItem>

            <FormItem
              label="City"
              {...formItemLayout}
            >
              <Input  name="city" required="required"  />
            </FormItem>

            <FormItem
              label="Street"
              {...formItemLayout}
            >
              <Input  name="adress1" required="required" />
            </FormItem>

            <FormItem
              label="Building number"
              {...formItemLayout}
            >
              <Input  name="building1" required="required"  />
            </FormItem>

            <FormItem
              label="Apartment number"
              {...formItemLayout}
            >
              <Input  name="adress2"  required="required" />
            </FormItem>


      <FormItem
        label="Quantity"
        {...formItemLayout}
      >


      <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio style={radioStyle}  value={1}>1 for AED 147   <div className="showtext">Save 60 AED</div></Radio>
              <Radio style={radioStyle}  value={2}>2 for AED 222   <div className="showtext">Save 192 AED</div></Radio>
              <Radio style={radioStyle}  value={3}>3 for AED 297 <div className="showtext">Save 324 AED</div></Radio>
              <Radio style={radioStyle}   value={4}>4 for AED 372 <div className="showtext">Save 456 AED</div></Radio>
            </RadioGroup>




      </FormItem>
      <FormItem


      >
        <Input type="hidden" value={this.state.value}  name="quantity" />
      </FormItem>

      <Input type="hidden" id="aff_sub1" className="aff_sub1" name="affsub1" value={this.state.gart} />
       <Input type="hidden" id="aff_sub2" className="aff_sub2" name="affsub2" value={this.state.gart1} />
       <Input type="hidden" id="aff_sub3" className="aff_sub3" name="affsub3" value={this.state.gart2} />
       <Input type="hidden" id="aff_sub4" className="aff_sub4" name="affsub4" value={this.state.gart3} />
       <Input type="hidden" id="aff_sub5" className="aff_sub5" name="affsub5" value={this.state.gart4} />
         <Input type="hidden" id="cid" className="cid" name="cid" value={this.state.cid} />
       <Input type="hidden" id="best" className="best" name="best" value={this.state.best} />
       <Input type="hidden" id="version" className="version" name="version" value="version-hairflame1-discount" />
       <Input type="hidden" id="trafficsource" className="trafficsource" name="trafficsource" value={this.state.trafficsource} />

      <FormItem {...buttonItemLayout}>
          <Button className="price-block__button lastbtn" type="primary" htmlType="submit">Order Now</Button>
      </FormItem>
    </Form>



       </Modal>

        </div>
      )
    }
  }
