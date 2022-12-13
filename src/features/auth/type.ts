export type loginInfo = {
    email: string,
    password: string,
}

export type registerInfo ={
    username: string,
    email: string,
    password: string,
    cpassword: string,
}

export type authErrors ={
    username?: string,
    email?: string,
    password?: string,
    cpassword?: string,
}