var Order = require('./models/order');

function getOrders(res) {
    Order.find(function (err, orders) {

        if (err) {
            res.send(err);
        }

        res.json(orders); 
    });
};

module.exports = function (app) {

   
    app.get('/api/orders', function (req, res) {
        getOrders(res);
    });

    app.post('/api/orders', function (req, res) {

        Order.create({
            text: req.body.text,
            done: false
        }, function (err, order) {
            if (err)
                res.send(err);

            getOrders(res);
        });

    });

    app.delete('/api/orders/:order_id', function (req, res) {
        Order.remove({
            _id: req.params.order_id
        }, function (err, order) {
            if (err)
                res.send(err);

            getOrders(res);
        });
    });


    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/src/index.html');
    });
};
