import fs from 'fs';

const mock = {
    booking: JSON.parse(
        fs.readFileSync("./src/blocks/booking/booking.json", "utf8")
    ),
};

export default mock;
