<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>RoyalUI Admin</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="../../properties/vendors/ti-icons/css/themify-icons.css">
  <link rel="stylesheet" href="../../properties/vendors/base/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="../../properties/css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="../../properties/images/favicon.png" />
  <!-- jquery/ajax -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!-- sweetalert -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script>
    function validateEmail(email){
        const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        const str = email;
        let m;
        let validate = false;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                validate = true;
            });
        }
        if(validate){
          return validate;
        }
    }
    class signUp{
        signUp_username;
        signUp_email;
        signUp_country;
        signUp_password;
        constructor(username,email,country,password){
            this.signUp_username = username;
            this.signUp_email = email;
            this.signUp_country = country;
            this.signUp_password = password;
        }
        doSignUp(){
            let data = {
                username:this.signUp_username,
                email:this.signUp_email,
                country:this.signUp_country,
                password:this.signUp_password
            }
            $.ajaxSetup({

            });
            Swal.fire({
                imageUrl: "../../properties/gif/spinner2.gif",
                text: "Loading! Please wait...",
                imageHeight: 100,
                imageWidth: 100,
                showConfirmButton:false,
                allowOutsideClick:false,
            }).then((result)=>{
            });
            $.ajax({
                type: "POST",
                url: "/action/signUp",
                data: data,
                dataType: "json",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                success: function (res) {
                    Swal.close();
                    Swal.fire({
                        text:res.response.message,
                        icon:res.response.icon,
                    }).then((result)=>{
                        if(res.response.code!="err"){
                            window.location.reload();
                        }
                    })
                }
            });
        }
    }
    $(document).ready(function(){
        $(document).on('click','button[id="submitBut"]',function(e){
            /*---CHECK ALL INPUT IS EMPTY---*/
            let input = $("input")
            let errArray = new Array();
            let form_length = input.length
            for (var i = 0; i < form_length;i++){
                if(input[i]["value"] == ""){
                    input[i]["style"] = "border-color:red;"
                    let err = input[i]["dataset"]["err"]
                    $(`span[id=${err}]`).css("display","block")
                    $(`span[id=${err}]`).text("Please fill in this Field!")
                    errArray.push(false);
                }else{
                    input[i]["style"] = "border-color:none;"
                    let err = input[i]["dataset"]["err"]
                    $(`span[id=${err}]`).css("display","none")
                }
            }
            /*---END---*/

            /*---CHECK IF COUNTRY IS EMPTY---*/
            let country = $("#country").val();
            if(country == ""){
                $("#countryErr").css("display","block");
                errArray.push(false);
            }else{
                $("#countryErr").css("display","none");
            }
            /*---END---*/

            /*---VALIDATE EMAIL---*/
            let email = $("#email").val();
            let isValidate = validateEmail(email);
            if(email != ""){
              if(isValidate){

              }else{
                $("#emailErr").text("Invalid Email!");
                $("#emailErr").css("display","block");
                errArray.push(false);
              }
            }
            /*---END---*/

            /*---CHECK IF AGREEMENT IS CHECKED---*/
            if(errArray.length==0){
                let isChecked = $("#agreement").is(":checked");
                if(isChecked){
                    let username = $("#username").val();
                    let email = $("#email").val();
                    let country = $("#country").val();
                    let password = $("#password").val();
                    let sign_Up = new signUp(username,email,country,password);
                    sign_Up.doSignUp();
                }else{
                    Swal.fire({
                        text:"Please Check Agreement!",
                        icon:"error",
                    }).then((result)=>{

                    })
                }
            }
            /*---END---*/
        })
    })
  </script>
</head>

<body id="load">
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="../../properties/images/logo.svg" alt="logo">
              </div>
              <h4>New here?</h4>
              <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form class="pt-3" >
                @csrf
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="username" data-err="userErr" placeholder="Username">
                  <span style="color:red;display:none" id="userErr">"Please fill in this Field!"</span>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="email" data-err="emailErr" placeholder="Email" >
                  <span style="color:red;display:none" id="emailErr">"Please fill in this Field!"</span>
                </div>
                <div class="form-group">
                  <select class="form-control form-control-lg" id="country" data-err="countryErr" >
                    <option value="">Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                  <span style="color:red;display:none" id="countryErr">"Please Select One Option!"</span>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="password" data-err="passErr" placeholder="Password">
                  <span style="color:red;display:none" id="passErr">"Please fill in this Field!"</span>
                </div>
                <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" id="agreement" >
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div class="mt-3">
                    <button type="button" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" id="submitBut">
                        <a>SIGN UP</a>
                    </button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account? <a href={{ route("signIn") }} class="text-primary">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  <!-- plugins:js -->
  <script src="../../properties/vendors/base/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="../../properties/js/off-canvas.js"></script>
  <script src="../../properties/js/hoverable-collapse.js"></script>
  <script src="../../properties/js/template.js"></script>
  <script src="../../properties/js/todolist.js"></script>
  <!-- endinject -->
</body>

</html>
