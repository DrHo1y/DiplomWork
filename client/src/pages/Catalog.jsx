import React, { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-materialize'

export const Catalog = () => {
    const [category, setCategory] = useState([])
    
    const handleLoadCategory = useCallback( async () => {
        try {
            console.log('tyti')
            const req = await fetch('/api/catalog/all', {
                mode: 'no-cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            setCategory(data)
            console.log('lol')
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        handleLoadCategory()
    }, [handleLoadCategory])

    return (
        <Row>
            <Col
                className="teal white-text"
                l={10}
                s={12}
                offset='l1'
            >
                <button className="btn-small" onClick={handleLoadCategory}>click me</button>
                { !category.length ? <div className="text-lol">text</div> : category.map(
                    res => <div key={res.id}>
                        <p>Название - {res.name}</p><br/>
                        <p>Популярный - </p>
                        <input  type="checkbox" value={res.popular} disabled="true" />
                    </div>     
                )}
                
            </Col>
        </Row>
    )
}