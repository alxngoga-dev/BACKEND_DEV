import Order from "../models/orderModel.js";



export const createOrder = async (req, res) => {
    
    try {
        const { order, customer, product, status, total, orderDate } = req.body

        const newOrder = await Order.create({
            order,
            customer,
            product,
            status,
            total,
            orderDate
        })

        return res.status(201).json({
            success: true, message: "order created successfully !!!",newOrder
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }

}

export const getAllorder = async (req, res) => {
    try {
        const orders = await Order.find().sort({ orderDate: -1 })

        res.status(200).json({
            success: true,
            count: orders.length,
            orders,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error", error: error.message
        })
    }

}

export const getOrderByid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(400).json({
                success: false,
                message: "order not found"
            })
        }

        return res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateOrder = async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }


        const currentStatus = order.status;
        const newStatus = req.body.status;


        const allowedFlow = {
            Pending: "Paid",
            Paid: "Shipped",
            Shipped: "Delivered",
            Delivered: "Delivered"
        };


        // if (newStatus && allowedFlow[currentStatus] !== newStatus) {
        //     return res.status(400).json({
        //         success: false,
        //         message: `Cannot change status from ${currentStatus} to ${newStatus}`
        //     });
        // }


        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );


        res.status(200).json({
            success: true,
            message: "Order updated successfully",
            order: updatedOrder
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
export const deleteorder = async(req,res) => {
    try {

        const order = await Order.findByIdAndDelete(req.params.id)

        if(!order){
            return res.status(400).json({
                success:false,
                message:"order not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Order deleted successfully",
            order
        })

    } catch (error) {

        return res.status(500).json({
            success:false,
            message:error.message
        })

    }
}