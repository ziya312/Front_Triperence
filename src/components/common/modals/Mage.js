const Mage = () => {
    return (
        <div className="gender">
            <label>
                <input onChange={onchange} style={{display:'none'}} value="20" type="radio" name="age"/>
                <div style={{marginLeft:"-16px", marginRight:"12px",width:'78px'}}>Male </div>
            </label>
            <label>
                <input onChange={onchange} style={{display:'none'}} value="30" type="radio" name="age"/>
                <div style={{ width:'78px'}}>Male </div>
            </label>
            <label>
                <input onChange={onchange} style={{display:'none'}} value="40" type="radio" name="age"/>
                <div style={{marginLeft:"12px", width:'78px'}}>Female </div>
            </label>
            <label>
                <input  onChange={onchange} style={{ display:'none'}} value="50" type="radio" name="age"/>
                <div style={{marginLeft:"12px",width:'78px'}}>Other</div>
            </label>
        </div>

    )
};
export default Mage;