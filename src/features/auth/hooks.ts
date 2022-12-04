import { FormEvent, InputHTMLAttributes, useState } from "react";

type AuthForm = {
    email:string,
    password:string,
}


export const useAuthForm = () :[AuthForm, (e:FormEvent<HTMLInputElement>) => void ]=>{
    const [form, setForm] = useState<AuthForm>({
        email:'',
        password:''
    })

    const onChangeInput = (e:FormEvent<HTMLInputElement>)=>{
        const name = e.currentTarget.getAttribute('name')!
        setForm({
            ...form,
            [name] : e.currentTarget.value
        })
    }
    return [form,onChangeInput]
}