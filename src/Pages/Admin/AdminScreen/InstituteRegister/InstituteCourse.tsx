import React from 'react'
import MYInput from '../../../../Components/MyInput'
import useState from 'react'
import { FbForm } from '../../../../Config/FirebaseMethod'
// import { FbForm } from '../../Config/Firebasemethod'
export default function InstituteCourse() {
    const [InstituteForm, SetInsituteForm] = React.useState<any>({})
    const [InstituteType, setInstituteType] = React.useState<any>()
    const instituteType = ["School", "College", "University", "Private Institute"];

    let fillModel = (key: string, value: any) => {
        InstituteForm[key] = value;
        SetInsituteForm({ ...InstituteForm });
    }

    const register = () => {
        // Perform validation checks here
        if (
            !InstituteForm.InstituteName ||
            !InstituteForm.ShortNameInstitute ||
            !InstituteForm.Num_Campus ||
            !InstituteForm.Institute_image ||
            !InstituteForm.Contact ||
            !InstituteForm.Address ||
            !InstituteForm.Location ||
            !InstituteForm.OwnerContact ||
            !InstituteForm.Owneremail ||
            !InstituteForm.InstituteType
        ) {
            alert("Please fill out all fields.");
        } else {
          
            FbForm( InstituteForm,"institute")
                .then((res) => {
                    alert(res);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }
    const handleDropdownChange = (selectedValue: string) => {
        SetInsituteForm({ ...InstituteForm, InstituteType: selectedValue })
    };

    // ...rest of the code

    return (
        <div className='container'>
            <h1 className='institute-form'>Institute Form</h1>
            <div className="row">
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Institute Name'type="text" myval={InstituteForm.InstituteName} head='Institute Name' className='institute-input' change={(e: any) => fillModel("InstituteName", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Short Name Institute'type="text" myval={InstituteForm.ShortNameInstitute}  head='Short Name Institute' className='institute-input' change={(e: any) => fillModel("ShortNameInstitute", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='No of campus'type="text" myval={InstituteForm.Num_Campus}  head='No of campus' className='institute-input' change={(e: any) => fillModel("Num_Campus", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Institute image'type="text"  myval={InstituteForm.Institute_image} head="Institute image" className='institute-input' change={(e: any) => fillModel("Institute_image", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5" >
                    <MYInput placeholder='Location'type="text"  myval={InstituteForm.Location} head='Location' className='institute-input' change={(e: any) => fillModel("Location", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Address' head='Address'type="text" myval={InstituteForm.Address} className='institute-input' change={(e: any) => fillModel("Address", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Contact' head='Contact' type="text" myval={InstituteForm.Contact} className='institute-input' change={(e: any) => fillModel("Contact", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Owner Contact' head='Owner Contact' myval={InstituteForm.OwnerContact} type='text' className='institute-input' change={(e: any) => fillModel("OwnerContact", e.target.value)} />
                </div>

                <div className="col-md-5 col-sm- mb-5 me-5">
                    <MYInput placeholder='Owner-email' head='Owner email' myval={InstituteForm.Owneremail} type="email" className='institute-input' change={(e: any) => fillModel("Owneremail", e.target.value)} />
                </div>
                <div className="col-md-5 col-sm- mb-5 me-5">
                    <div className=''>
                        <h6 className='mb-2 ms-2 text-start'>Institute Type</h6>
                        <select name="instituteType" className='institute-dropdown' value={InstituteForm.InstituteType} onChange={(e: any) => handleDropdownChange(e.target.value)}>
                        <option value="Select">Select</option>
                            {instituteType.map((opt, index) => {
                                return (
                                    <option value={opt} key={index}>
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
