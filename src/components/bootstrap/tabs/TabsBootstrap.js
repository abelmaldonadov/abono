import React from 'react'
import {Tab, Tabs} from "react-bootstrap";
import CardSmallBootstrap from "../cards/CardSmallBootstrap"

export default function TabsBootstrap({inventory}) {
    const listOutstanding = inventory.map(item => {
        if (item.stock > 5) {
            return <CardSmallBootstrap key={item.code} item={item}/>
        } else return null
    })

    const listCategory = category => inventory.map(item => {
        if (item.category === category) {
             return <CardSmallBootstrap key={item.code} item={item}/>
        } else return null
    })

    return <Tabs defaultActiveKey="01" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="01" title="Destacado">
            <div style={{display:'flex', justifyContent:'flex-start'}}>
                {listOutstanding}
            </div>
        </Tab>
        <Tab eventKey="02" title="Suculentas">
            <div style={{display:'flex'}}>
                {listCategory('suculentas')}
            </div>
        </Tab>
        <Tab eventKey="03" title="Cactus">
            <div style={{display:'flex'}}>
                {listCategory('cactus')}
            </div>
        </Tab>
    </Tabs>
}