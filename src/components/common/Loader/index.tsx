import React from 'react'
import {HashLoader} from 'react-spinners'
import {gold} from '../../constants/colors'

export default function Loader() {
  return (
    <div>
      <HashLoader size={100} color={gold.deep} loading />
    </div>
  )
}
