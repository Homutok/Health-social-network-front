import React, { useEffect, useRef, useState } from 'react';
import {
    Form
} from 'antd';
import PageBreadCrumb from "../../OtherComponents/PageBreadCrumb";
import ProfileEditFullName from './ProfileEditFullName';
import ProfileEditDateOfBirth from './ProfileEditDateOfBirth';
import ProfileEditGender from './ProfileEditGender';
import ProfileEditCountry from './ProfileEditCountry';
import ProfileEditSummary from './ProfileEditSummary';
import ProfileEditUniversity from './ProfileEditUniversity';
import ProfileEditSave from './ProfileEditSave';
import Loading from '../../OtherComponents/LoadingPage';

const ProfileEdit = (props) => {

    const [gender, setGender] = useState()
    const [country, setCountry] = useState()
    const [universityEnd, setUniversityEnd] = useState()
    const [dateBirth, setDateBirth] = useState()

    const firstName = useRef()
    const secondName = useRef()
    const summary = useRef()
    const university = useRef()

    const save = () => {
        console.log(dateBirth)
        console.log(universityEnd)
        props.updateProfileInfo(
            props.profile.id,
            dateBirth,
            summary.current.resizableTextArea.props.value,
            gender,
            country,
            university.current.input.value,
            universityEnd,
        )
    }

    useEffect(() => {
        props.isLoadProfile
            ? console.log('load')
            : props.getProfileInfo()
    }, [props.isLoadProfile])

    const changeGender = (value) => {
        setGender(value)
    }

    const changeCountry = (value) => {
        setCountry(value)
    }

    const changeDateOfBirth = (value) => {
        setDateBirth(value)
    }

    const changeUniversityEnd = (value) => {
        setUniversityEnd(value)
    }

    return props.isLoadProfile ?
        <PageBreadCrumb
            parent='Настройки'
            child='Общие настройки'
        >
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <ProfileEditFullName
                    firstName={firstName}
                    secondName={secondName}
                    firstNameDefault={props.profile.first_name}
                    secondNameDefault={props.profile.last_name}

                />
                <ProfileEditDateOfBirth
                    changeDateOfBirth={changeDateOfBirth}
                    dateBirthDefault={props.profile.public_user_info.date_of_birth}
                />
                <ProfileEditGender
                    changeGender={changeGender}
                    genderDefault={props.profile.public_user_info.person_gender}
                />
                <ProfileEditCountry
                    changeCountry={changeCountry}
                    countryDefault={props.profile.public_user_info.country}
                />
                <ProfileEditSummary
                    summary={summary}
                    summaryDefault={props.profile.public_user_info.summary}
                />
                <ProfileEditUniversity
                    university={university}
                    changeUniversityEnd={changeUniversityEnd}
                    universityDefault={props.profile.public_user_info.place_of_study}
                    universityEndDefault={props.profile.public_user_info.release_date}
                />
                <ProfileEditSave save={save} />
            </Form>
        </PageBreadCrumb>
        : <Loading />
}
export default ProfileEdit