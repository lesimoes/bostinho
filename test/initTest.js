let expect = require('chai').expect;
const Bostinho = require('../model/Bostinho')
let database = require('../database/base');
let randomIntent = Math.floor(Math.random() * database.base.length)

describe('initTest', () => {
    it('should respond a message with no error', () => {
        let bostinho = new Bostinho()
        let response = bostinho.sendMsg('Oii')
        expect(response[0].response[0]).to.be.a('string')
    })
})

describe('nlpTest', () => {
    it('should respond random intent', () => {
        let firstIntent = database.base[randomIntent].phrase[0]
        let firstResArray = database.base[randomIntent].response
        let response = new Bostinho().sendMsg(firstIntent)
        let botRes = firstResArray.filter((value) => {
            if(value === response[0].response[0]) return true
        })
        
        expect(botRes).to.be.a('array')
    })

    it('should respond a random intent with mistranslation', () => {
        //Simulate a mistranslation
        let firstIntent = database.base[randomIntent].phrase[0].replace(database.base[randomIntent].phrase[0][0], database.base[randomIntent].phrase[0][1])
        let firstResArray = database.base[randomIntent].response
        let response = new Bostinho().sendMsg(firstIntent)
        let botRes = firstResArray.filter((value) => {
            if(value === response[0].response[0]) return value
        })
        
        expect(botRes[0]).to.be.a('string')
    })
})
