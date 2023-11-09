import React from 'react'
import useState from 'react'
import MYInput from '../../../Components/MyInput'
import { fbSignUp } from '../../../Config/FirebaseMethod'

export default function UserRegister() {
    const [UserForm, SetUserForm] = React.useState<any>({})
    const userType = ["Admin","Teacher","Institute"];

    let fillModel = (key: string, value: any) => {
        UserForm[key] = value;
        SetUserForm({ ...UserForm });
    }

    const register = () => {
        console.log(UserForm)
        // Perform validation checks here
        if (
            !UserForm.name ||
            !UserForm.email ||
            !UserForm.password ||
            !UserForm.UserCnic ||
            !UserForm.userType
        ) {
            alert("Please fill out all fields.");
        } 
        else {
        
            fbSignUp(UserForm,"users").then((res)=>{
                alert(res)
            }).catch((err)=>{
                    alert(err)
            })
            
        }
    }
    const handleDropdownChange = (selectedValue: string) => {
        SetUserForm({ ...UserForm, userType: selectedValue })
    };

    // ...rest of the code

    return (
        <div className='container'>
            <h1 className='User-form my-5'>User Registration Form</h1>
            <div className="row">
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='User Name'type="text" myval={UserForm.UserName} head='User Name' className='user-input' change={(e: any) => fillModel("name", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='User Email'type="email" myval={UserForm.Useremail}  head='User Email' className='user-input' change={(e: any) => fillModel("email", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='User Password' type="password" myval={UserForm.UserPassword}  head='User Password' className='user-input' change={(e: any) => fillModel("password", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='User Cnic'type="text"  myval={UserForm.UserCnic} head="User Cnic" className='user-input' change={(e: any) => fillModel("UserCnic", e.target.value)} />
                </div>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <div className=''>
                        <h6 className='mb-2 ms-2 text-start'>Institute Type</h6>
                        <select name="instituteType" className='user-dropdown' value={UserForm.UserType} onChange={(e: any) => handleDropdownChange(e.target.value)}>
                            {userType.map((opt, index) => {
                                return (
                                    <option value={opt} key={index} className='p-5'>
                                        {opt}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>


                <div>
                    <button onClick={register} className='btn' style={{backgroundColor:"blueviolet",color:"white"}}>Register</button>
                </div>
            </div>
        </div>
    )
}