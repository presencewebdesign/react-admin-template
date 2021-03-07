import React, { Fragment, Dispatch } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCurrentPath } from "../../store/actions/root.actions"
import StatisticBox from "../../common/components/StatisticBox"
import { IProductState, IStateType } from "../../store/models/root.interface"
import ProductList from "../Products/ProductsList"
import { IOrder } from "../../store/models/order.interface"
import OrderList from "../Orders/OrderList"

const Home: React.FC = () => {
   const products: IProductState = useSelector(
      (state: IStateType) => state.products
   )
   const numberItemsCount: number = products.products.length
   const totalPrice: number = products.products.reduce(
      (prev, next) => prev + (next.price * next.amount || 0),
      0
   )
   const totalProductAmount: number = products.products.reduce(
      (prev, next) => prev + (next.amount || 0),
      0
   )

   const orders: IOrder[] = useSelector(
      (state: IStateType) => state.orders.orders
   )
   const totalSales: number = orders.reduce(
      (prev, next) => prev + next.totalPrice,
      0
   )
   const totalOrderAmount: number = orders.reduce(
      (prev, next) => prev + next.amount,
      0
   )

   const dispatch: Dispatch<any> = useDispatch()
   dispatch(updateCurrentPath("home", ""))

   const data = {
      id: 1,
      title: "Web Stats",
      isPercent: true,
      description: "Hello description",
      value: "300",
      results: [
         {
            id: 0,
            title: "unique views",
            isPercent: false,
            value: "100",
         },
         {
            id: 1,
            title: "downloads",
            isPercent: true,
            value: "50",
         },
      ],
   }

   return (
      <Fragment>
         <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
         <p className="mb-4">Summary and overview of our admin stuff here</p>

         <div className="row">
            <StatisticBox statistic={data} />
            <StatisticBox statistic={data} />
            <StatisticBox statistic={data} />
         </div>

         <div className="row">
            <div className="col-xl-6 col-lg-6">
               <div className="card shadow mb-4">
                  <div className="card-header py-3">
                     <h6 className="m-0 font-weight-bold text-green">
                        Product list
                     </h6>
                  </div>
                  <div className="card-body">
                     <ProductList />
                  </div>
               </div>
            </div>

            <div className="col-xl-6 col-lg-6">
               <div className="card shadow mb-4">
                  <div className="card-header py-3">
                     <h6 className="m-0 font-weight-bold text-green">
                        Order list
                     </h6>
                  </div>
                  <div className="card-body">
                     <OrderList />
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Home
