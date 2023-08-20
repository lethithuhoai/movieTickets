import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import cn from 'classnames'
import { baiTapMovieTicketsActions } from '../store/baiTapMovieTickets/slice'

const Chair = ({ ghe, className }) => {
    const dispatch = useDispatch()
    const { chairBookings, chairBookeds } = useSelector((state) => state.baiTapMovieTickets)

    return (
        <div
            className={cn('Chair mt-3', className, {
                booking: chairBookings.find((chair) => chair.soGhe === ghe.soGhe),
                booked: chairBookeds.find((chair) => chair.soGhe === ghe.soGhe),
            })} onClick={() => {
                dispatch(baiTapMovieTicketsActions.setChairBookings(ghe))
            }}>{ghe.soGhe}</div>
    )
}
export default Chair