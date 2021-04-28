import React from 'react';
import ReactDOM from 'react-dom';

function ForgetPassword() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Forget Password</div>

                        <div className="card-body">
                            <form method="POST" action="}">
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control " name="email" value="" required autocomplete="email" autofocus/>
                                    </div>
                                </div>

                                

                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                           Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;

if (document.getElementById('app')) {
    ReactDOM.render(<ForgetPassword />, document.getElementById('app'));
}
