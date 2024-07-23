


class User {
    constructor(
        public IdUser: number,
        public fullName: string,
        public fullLastName: string,
        public email: string,
        public password?: string,
        public token?: string | null,
    ) { }
}

export default User
