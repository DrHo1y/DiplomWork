import React, { useState } from 'react'
import { Row, Col, TextInput, Checkbox, Button, Icon } from 'react-materialize'

export const AddCategory = () => {

    const [name, setName] = useState('')
    const [popular, setPopular] = useState(false)

    const changeHandler = event => {
        setName(event.target.name = event.target.value)
    }
    
    const addCategoryHandler = async () => {
        try {
            let body = {
                name: name,
                popular: popular
            }
            body = JSON.stringify(body)
            const req = await fetch('/api/catalog/add', {
                mode: 'no-cors',
                method: 'POST',
                'Content-Type': 'application/json',
                body
            } )
            console.log(req.message)
        } catch (e) { }
    }
    
    

    return (
        <Row>
            <Col
                className="teal white-text"
                l={10}
                s={12}
                offset='l1'
            >
                <div className="text-lol">
                    <Row>
                        <Col
                            l={12}
                            s={12}
                            className="form"
                        >
                            <TextInput
                                className="white-text"
                                id="name"
                                name="name"
                                l={8}
                                s={12}
                                value={name}
                                placeholder="Название категории"
                                onChange={changeHandler}
                            />
                        </Col>

                        <Col
                            l={12}
                            s={12}
                            className="form"
                        >
                            <Checkbox
                                id="popular"
                                label="Популярная категория?"
                                checked={popular}
                                value=""
                                name="popular"
                                onChange={() => setPopular(!popular)}
                            />
                        </Col>

                        <Col
                            l={12}
                            s={12}
                            className="form"
                        >
                            <Button
                                node="button"
                                type="submit"
                                waves="light"
                                onClick={addCategoryHandler}
                            >
                                Submit
                                <Icon right>
                                    send
                                </Icon>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}