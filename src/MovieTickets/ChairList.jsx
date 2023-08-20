import React from 'react'
import Chair from './Chair'
import cn from 'classnames'

const ChairList = ({ data }) => {
    return (
        <div>
            {
                data.map((hangGhe) => {
                    return (
                        <div key={hangGhe.hang} className={cn('d-flex gap-3', { disabled: !hangGhe.hang, })} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <p className='mt-3 mt-0' style={{ width: 30 }}>{hangGhe.hang}</p>
                            {
                                hangGhe.danhSachGhe.map((ghe) => {
                                    return (
                                        <Chair className={cn('d-flex gap-3', { disabled: !hangGhe.hang, })} key={ghe.soGhe} ghe={ghe} />
                                    )
                                })
                            }
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ChairList