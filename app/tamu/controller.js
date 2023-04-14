const Tamu = require('./model');
const index = async (req, res, next) => {
    try {
        let {limit=0, skip=0} = req.query;
        let namaTamu = req.query.namaTamu
        if(!namaTamu) namaTamu = ""
        let semuaTamu = await Tamu.find({namaTamu: {$regex: namaTamu, $options: 'i'}}).sort({createdAt: -1}).limit(parseInt(limit)).skip(parseInt(skip))
        let count = await Tamu.find()
        return res.status(200).json({
            message : semuaTamu,
            totalData : count.length
        })
    } catch (e) {
        next(e)
    }
}

const findOne = async (req, res, next) => {
    try {
        let id = req.params.id
        let semuaTamu = await Tamu.findOne({_id: id});
        return res.status(200).json({
            status: "ok",
            message: semuaTamu
        })
    } catch (e) {
        next(e)
    }
}

const store = async (req, res, next) => {
    try {
        let payload = req.body
        console.log(payload)
        let tamu = new Tamu(payload)
        await tamu.save()
        return res.status(201).json({
            status: 'Ok',
            data: tamu
        })
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        let id = req.params.id;
        let payload = req.body;
        let updateTamu = await Tamu.findOneAndUpdate({_id: id}, payload, {new: true, runValidators: true})
        return res.status(200).json({
            status: 'Updated',
            data: updateTamu
        })
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        let deleted = await Tamu.findOneAndDelete({_id: req.params.id})
        return res.status(200).json({
            status: 'Deleted'
        })
    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            })
        }
        next(err)
    }
}


module.exports = {
    index,
    findOne,
    store,
    update,
    destroy
}