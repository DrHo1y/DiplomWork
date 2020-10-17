import React, { useState } from 'react'
import { Row, Col, TextInput, Checkbox, Button, Icon } from 'react-materialize'

export const AddCategory = () => {

    const [form, setForm] = useState({
        name: '', popular: 'false'
    })

    const handleAddCategory = async () => {
        try {
            console.log('tyti')
            const req = await fetch('/api/catalog/add', {
                mode: 'no-cors',
                method: 'POST'
            }, { form })
            console.log(req.message)
        } catch (e) { }
    }
    
    const handlerChange = event => {
        setForm({...form, [event.target.name]:event.target.value })
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
                                placeholder="Название категории"
                                onChange={handlerChange}
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
                                value={form.popular}
                                name="popular"
                                onChange={handlerChange}
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
                                onClick={handleAddCategory}
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