const Contact = () => {
  return (
    <>
        <span class="border border-primary">
        <div class="mb-3 row g-3 px-3">
            <label for="exampleFormControlInput1" class="form-label"><strong>Email address</strong></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="mb-3 px-3">
            <label for="exampleFormControlTextarea1" class="form-label"><strong>Requests</strong></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-2 px-3">
          <button type="submit">Submit</button>
            </div>
        </span>
    </>
  );
};

export default Contact;
