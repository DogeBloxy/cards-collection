const { where } = require('sequelize');
const Card = require('../models/cards.model')

class CardController {

    // GET /cards
    async getCards(req, res) {
        try {
            const cards = await Card.findAll();

            res.status(200).json(cards);
        }
        catch (error) {
            res.status(500).json({
                error: "Erreur serveur.",
                details: error.message
            })
        }
    }

    // POST /cards
    async create(req, res) {
        try {
            const data = req.body
            const card = await Card.create(data);

            res.status(200).json({
                success: true,
                data: card,
                message: 'Card created.'
            })
        }
        catch (error) {
            res.status(500).json({
                error: "Erreur serveur.",
                details: error.message
            })
        }
    }

    // DELETE /cards/:id
    async delete(req, res) {
        try {
            const id = req.params.id
            const card = await Card.destroy({where: {id: id}});

            res.status(204).json({})
        }
        catch (error) {
            res.status(500).json({
                error: "Erreur serveur.",
                details: error.message
            })
        }
    }
}

module.exports = new CardController();