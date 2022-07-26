const Mgen = () => {
return (
<div className="gender">
    <label>
        <input onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{marginLeft:"-36px"}}>Male </div>
    </label>
    <label>
        <input onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{marginLeft:"24px", marginRight:"24px"}}>Female </div>
    </label>
    <label>
        <input  onChange={onchange} style={{display:'none'}} value="Male" type="radio" name="gender"/>
        <div style={{}}>Other</div>
    </label>
</div>

)
};
export default Mgen;