import React, {   useState } from "react";
import { useSelector } from "react-redux";
import {   useParams } from "react-router-dom";
import {GrAddCircle,GrSubtractCircle} from "react-icons/gr";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import CommentList from "./CommentList";
//import {  editComment, getComments } from "../JS/Actions/comment";
//import { addToCart } from "../JS/Actions/cart";
//import { getOneProduct } from "../JS/Actions/product";


const ProductDetails=()=>{
   // const dispatch=useDispatch();
    //const [newComment, setnewComment] = useState();
    ////const match = useMatch("/edit/:id");
    //const navigate = useNavigate();
    //const handleChange=(e)=>{
    //  setnewComment({...newComment,[e.target.name]:e.target.value})
  //}
 // useEffect(() => {
   // dispatch(getComments(match.params.id))
//})
//const handleEdit = () => {
 // dispatch(editComment(match.params.id, newComment));
  //navigate(-1);
//}
 // const { id } = useParams();
  //const user = useSelector((state) => state.userReducer.user);
  //const product = useSelector((state) => state.productReducer.productToGet);
  const params = useParams();
  const listProducts = useSelector((state)=>state.productReducer.listProducts);
  const product = listProducts.find((el)=>el.name===params.name);
  //const isAuth = useSelector((state) => state.userReducer.isAuth);
 // const navigate=useNavigate()
//useEffect(() => {
 // dispatch(getOneProduct(id));
 // navigate(`/cart`)
//}, [dispatch, id,navigate]);

//const AddToCartHandle = (e) => {
//e.preventDefault();
//if (!isAuth) {
  //navigate("/login");}
  //dispatch(addToCart(user._id,id));
//};
   const [num,setNum]=useState(1);
   const minus=()=>{
    if (num>1){
        setNum(num-1);
    }else{
        setNum(1);
    }
   }
   return (
    <header>
     <br/>
     <div className='bg-image hover-zoom' style={{display:"flex",margin:"20px"}}>
    <img style={{width:"400px"}}  src={product.imageURL} alt="pic"/>
    <div >
    <h1 style={{fontFamily:"fantasy"}}>{product.name}</h1><br/><br/>
    <br/><p style={{fontFamily:"fantasy",fontSize:"large"}}>{product.price}$</p>
    <br/><br/>
    <div className="container-sm" style={{display:"flex"}}>
    <GrAddCircle size="2em" onClick={()=>setNum(num+1)}/>
    <p style={{border:"solid 3px black",borderRadius:"20px",paddingLeft:"60px",paddingRight:"60px",marginLeft:"10px",marginRight:"10px"}} >{num}</p>
    <GrSubtractCircle size="2em" onClick={minus}/>
    </div>
    <br/>
    <div className="d-grid gap-2">
    <Button variant="secondary"  >ADD TO CART</Button>
    <p>{product.description}</p>
    </div>
    </div>
     </div>
     <div>
   <h1 style={{fontFamily:"-moz-initial"}}>Comments</h1>
   <CommentList/>
   <FloatingLabel style={{marginLeft:"30px",marginRight:"400px"}} controlId="floatingTextarea2" label="Comment">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
          />
      </FloatingLabel>
      <Button style={{margin:"30px"}} variant="secondary"  >ADD COMMENT</Button>
     </div>
    </header>
)};

export default ProductDetails;