const User = require('../../../models/SalesUser');

const userList = async (req, res, next) => {
    try {
        const list = await User.find().select('-password').sort({_id: -1});

        const formattedList = list.map((user) => {
            try {
                const detail = JSON.parse(user.detail);
                return {
                    name: detail.name,
                    email: detail.email,
                    phone: detail.number,
                    status: detail.status,
                    image: user.image,
                    createdAt: user.createdAt
                };
            } catch (error) {
                // Handle JSON parsing error
                console.error("Error parsing user detail:", error);
                return null; // or handle invalid data as needed
            }
        }).filter(user => user !== null); // Remove null entries caused by parsing errors

        res.status(200).json({ message: 'success', status: true, users: formattedList });
    } catch (error) {
        next(error);
    }
};

module.exports = userList;
