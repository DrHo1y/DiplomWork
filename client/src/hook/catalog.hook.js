import { json, request } from 'express'
import {useState, useCallback, useEffect} from 'react'

export const Catalog = () => {
    const res = useCallback(() => {
        const request = await fetch('/api/catalog/all', {
            method: 'GET',
            headers: 'application/json'
        })
    })
    const data = await request.json()
}