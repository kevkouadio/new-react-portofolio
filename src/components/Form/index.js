function Form() {

    return (
        <form id="contact-form">
            <input type="hidden" name="contact_number" />
            <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input class="btn btn-info" type="submit" value="Send" />
        </form>
    )
}
export default Form