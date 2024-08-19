const Card = require("../models/Card");

// Create a card
exports.createCard = async (req, res) => {
    try {
        const {title, description} = req.body;
    
        if(!title || !description){
            return res.status(404).json({
                success: false,
                message: "Please fill all the details",
            });
        }

        // 
        const normalizedTitle = title.toLowerCase();
        const link = "cards/" + normalizedTitle.replace(' ', '-');

        // const existingCard = await Card.findOne({title: title});
        const existingCard = await Card.findOne({normalizedTitle: normalizedTitle});

        if(existingCard){
            return res.status(400).json({
                success: false,
                message: `Card already exist with the title: ${title}`,
                existingCard,
            });
        }

        const card = await Card.create({
            title,
            normalizedTitle,
            description,
            link
        });

        return res.status(200).json({
            success: true,
            message: "Card created successfully",
            card,
        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

// Get all cards
exports.getAllCards = async (req, res) => {
    try {
        const allCard = await Card.find();
        return res.status(200).json({
            success: true,
            message: "All cards fetched successfully",
            allCard,
        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}


// Get a specific card
exports.getCard = async (req, res) => {
    try {
        const { title } = req.params;
        
        if(!title){
            return res.status(404).json({
                success: false,
                message: "Please fill all the details",
            });
        }
        
        // Replacing the - with space, so that whole word can be founded in DB
        const normalizedTitle = title.toLowerCase().replace('-', ' ');
        
        const card = await Card.findOne({ normalizedTitle });
        if(!card){
            return res.status(401).json({
                success: false,
                message: "Card not found, Please enter valid card",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Card fetched successfully",
            card,
        });
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}