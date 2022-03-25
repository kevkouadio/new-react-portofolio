function Form() {

    return (
        <form id="contact-form">
            <h4 style={{color:"black"}}>Send me an email</h4>
            <div class="form-group">
                <label for="exampleFormControlInput1"></label>
                <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1"></label>
                <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" style={{color:"black"}}>Message</label>
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <input class="btn btn-success" type="submit" value="Send" />
        </form>
    )
}
export default Form