<!DOCTYPE html>
<html lang="en">

<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        class Validate{
            Validate_username;
            Validate_email;
            constructor(username,email){
                this.Validate_username = username;
                this.Validate_email = email;
            }

            canValidate(){
                let arr = new Array();
                if(this.Validate_username==""){
                    arr.push({status:false,errId:"userErr"})
                }
                if(this.Validate_email==""){
                    arr.push({status:false,errId:"emailErr"})
                }

                /*Display Error*/
                let err_length = arr.length;
                for(let i=0;i<err_length;i++){
                    let errId = arr[i]["errId"];
                    if(arr[i]["status"])
                }
                return arr;
            }
        }
        $(document).ready(function(){
            $("#submit").click(function(){
                let username = $("#username").val();
                let email = $("#email").val();
                let validate = new Validate(username,email);
                let isValidate = validate.canValidate();

            });
        });
    </script>
</head>

<body>
    <input type="text" name="username" id="username" class="username" placeholder="Username" value=""/>
    <span style="color:red;display:none" id="userErr">"Please fill in this Field!"</span>
    <input type="email" name="email" id="email" class="email" placeholder="Email" value=""/>
    <span style="color:red;display:none" id="emailErr">"Please fill in this Field!"</span>
    <input type="button" value="Submit" id="submit" class="submit"/>
</body>

</html>
