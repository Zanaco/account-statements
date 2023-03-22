import React from 'react'
import {Skeleton, Card} from 'antd'

export default function BaseSkeleton() {
  return (
    <div>
      <Skeleton.Input style={{width: '100%', height: '50px'}} active />
      <Card style={{marginTop: 16}}>
        <Skeleton.Input style={{width: '50%', marginBottom: 16}} active />
        <Skeleton.Input style={{width: '50%', marginBottom: 16}} active />
        <Skeleton.Button style={{width: '100%', marginBottom: 16}} active />
      </Card>
      <Skeleton.Input
        style={{width: '100%', height: '50px', marginTop: 16}}
        active
      />
      <div style={{textAlign: 'center', marginTop: 16}}>
        <Skeleton.Button style={{width: '50%'}} active />
      </div>
    </div>
  )
}
