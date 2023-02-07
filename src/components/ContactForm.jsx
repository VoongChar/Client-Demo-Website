import React from 'react'
import { Card } from 'react-bootstrap'
import { useAlert } from 'react-alert'

export default function ContactForm() {
    return (
        <div className="container-fluid p-3">
            <Card border="light" className="p-3">
            <Card.Title className="text-center">Submit an Enquiry</Card.Title>

            <form>
                <div className="row">
                    <div className="">
                      <label for="exampleFormControlInput1"  className="form-label" >Name (*Required)</label>
                      <input type="text" className="form-control" id="name" placeholder="" aria-label="First name" required/>
                    </div>
                    
                    <div className="">
                     <label for="exampleFormControlInput1" className="form-label">Email (*Required)</label>
                     <input type="email" className="form-control" id="colFormLabel email" placeholder="Email" required />
                    </div>

                    <div className="">
                      <label for="formFileMultiple" className="form-label">Attach References</label>
                      <input className="form-control" type="file" id="formFileMultiple" multiple />
                    </div>

                    <div className="mb-3">
                       <label for="formGroupExampleInput" className="form-label">Enquiry (*Required)</label>
                       <input type="text" className="form-control" id="formGroupExampleInput enquiry" placeholder="" maxlength="500" required/>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-secondary" id="submit-btn">Submit</button>
                    </div>
                </div>
            </form>
            </Card>
        </div>
    )
}
