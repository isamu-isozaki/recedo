db.createUser(
    {
        user: "test",
        pwd: "testpassword",
        roles: [
            {
                role: "readWrite",
                db: "recedo"
            }
        ]
    }
);