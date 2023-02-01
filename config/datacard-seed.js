const express = require('express')
const Datacard = require('../models/datacard-model')
const Wargear = require('../models/wargear-model')
const router = express.Router()

const startingDataCards = [
    {
        name: 'Intercessor',
        movement: '6',
        weaponSkill: '3',
        ballisticSkill: '3',
        strength: '4',
        toughness: '4',
        wounds: '2',
        attacks: '2',
        leadership: '7',
        saves: '3',
        id: '00001'
    },
    {
        name: 'Eradicator',
        movement: '5',
        weaponSkill: '3',
        ballisticSkill: '3',
        strength: '4',
        toughness: '5',
        wounds: '3',
        attacks: '2',
        leadership: '7',
        saves: '3',
        id: '00002'
    },
    {
        name: 'Aggressor',
        movement: '5',
        weaponSkill: '3',
        ballisticSkill: '3',
        strength: '4',
        toughness: '5',
        wounds: '3',
        attacks: '3',
        leadership: '7',
        saves: '3',
        id: '00003'
    },
    {
        name: 'Intercessor',
        movement: '6',
        weaponSkill: '3',
        ballisticSkill: '3',
        strength: '4',
        toughness: '4',
        wounds: '2',
        attacks: '2',
        leadership: '7',
        saves: '3',
        id: '00004'
    },
    {
        name: 'Marine',
        movement: '6',
        weaponSkill: '3',
        ballisticSkill: '3',
        strength: '4',
        toughness: '4',
        wounds: '2',
        attacks: '1',
        leadership: '7',
        saves: '3',
        id: '00005'
    }
]

const startingWargear =[
    {
        name: 'Bolter',
        range: '12',
        type: 'Rapid Fire',
        strength: '3',
        ap: '2',
        damage:'1'
    }
]

router.get('/datacards', (req, res, next) => {
    Datacard.deleteMany({})
        .then(() => {
            Datacard.create(startingDataCards)
                .then(datacards => {
                    res.status(200).json({ datacards: datacards })
                })
        })
        .catch(next)
})

router.get('/wargears', (req, res, next) => {
    Wargear.deleteMany({})
        .then(() => {
            Wargear.create(startingWargears)
                .then(wargears => {
                    res.status(200).json({ wargears: wargears })
                })
        })
        .catch(next)
})

module.exports = router