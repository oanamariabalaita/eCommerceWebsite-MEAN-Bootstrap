var Order = require('./models/Order');

function getOrders(res) {
    Order.find(function (err, orders) {

        if (err) {
            res.send(err);
        }

        res.json(orders); 
    });
};

module.exports = function (app) {

   
    app.get('/orders', function (req, res) {
        getOrders(res);
    });
    
    
    app.post('/orders', function (req, res) {

        Order.create({
            text: req.body.text,
            done: false
        }, function (err, order) {
            if (err)
                res.send(err);

            getOrders(res);
        });

    });

    app.delete('/orders/:order_id', function (req, res) {
        Order.remove({
            _id: req.params.order_id
        }, function (err, order) {
            if (err)
                res.send(err);

            getOrders(res);
        });
    });


};
